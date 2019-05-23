const url = require("url");

//Helpers
const hFile = require("../helpers/hFile");
const hCrypt = require("../helpers/hEncryption");

//Model
const mFile = require("../models/mFile");

//Function's Controller
exports.get = (req, res) => {
  mFile
    .get()
    .then(async file => {
      file.decifrado = hCrypt.decryptCesar(file.cifrado);
      file.resumo_criptografico = hCrypt.encryptSha1(file.decifrado);

      let responseFile = await JSON.stringify(file);

      let writeFile = await hFile.existsDirOrFile("./src/archives/answer.json");

      let success = writeFile
        ? await hFile.createAndWriteInFile(
            "./src/archives/answer.json",
            responseFile
          )
        : await hFile.writeInFile("./src/archives/answer.json", responseFile);

      success ? res.render("home/index", { response: file }) : res.send(error);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
};

exports.post = (req, res) => {
  hFile
    .openFile("./src/archives/answer.json")
    .then(file => {
      let openedFile = JSON.parse(file);

      mFile
        .submit(openedFile)
        .then(response => {
          res.redirect(
            url.format({
              pathname: "/submitted",
              query: openedFile
            })
          );
        })
        .catch(error => {
          console.log(error);
          res.render("home/index", { status: { error: true } });
        });
    })
    .catch(error => {
      console.log(error);
      res.render("home/index", { status: { error: true } });
    });
};

exports.submitted = (req, res) => {
  res.render("home/submitted");
};

//helpers
const hFile = require('../helpers/hFile')
const mFile = require('../models/File')

exports.get = ((req, res) => {

  let userToken = "15ceecf5a98d8f829b6eea3978f9cad4bc8e3a3d"
  let apiUrl = "https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token="+userToken
  

  mFile.get(apiUrl)
    .then( async file => {

      let responseFile = await JSON.stringify(file)
      
      let writeFile = await hFile.existsDirOrFile('./src/archives/answer.json')

      let success = 
        writeFile ?
          await hFile.createAndWriteInFile('./src/archives/answer.json', responseFile)
        :
          await hFile.writeInFile('./src/archives/answer.json', responseFile) 

      success ? res.render('home/index', {response: file}) : res.send(error)

    })
    .catch( error => {
      console.log(error)
      console.log("Nao foi possivel fazer a requisição!")
      res.send(error)
    })
})
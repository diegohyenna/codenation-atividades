const fs = require('fs')

hFile = {

  existsDirOrFile: function(path){
    return new Promise( (resolve, reject) => {
      try{
        fs.existsSync(path) ? resolve(true) : resolve(false)
      }catch(e){
        reject(e)
      }
    })
  },

  createAndWriteInFile: function(path, file, ){
    return new Promise( (resolve, reject) => {
      try{
        fs.writeFile(path, file, {enconding:'utf-8', flag: 'a'}, (error) => {
          if (error) reject(error)
          resolve(true)
        });
      }catch(e){
        reject(e)
      }
    })
  },

  writeInFile: function(path, file){
    return new Promise( (resolve, reject) => {
      try{
        fs.writeFile(path, file, {enconding:'utf-8', flag: 'w'}, (error) => {
          if (error) reject(error)
          resolve(true)
        });
      }catch(e){
        reject(e)
      }
    })
  },

  openFile: function(path){
    fs.openSync(path)
  }

}

module.exports = hFile
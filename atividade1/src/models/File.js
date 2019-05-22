const fetch = require('node-fetch')

mFile = {

  get: function(url) {

    return new Promise( function (resolve, reject) {
      try{
        fetch(url)
          .then( response => {  
            resolve(response.json())
          }).catch( error => {
            reject(error)
          })
      }catch(error){
        reject(error)
      }
    })

  } 
}

module.exports = mFile;
const fetch = require('node-fetch')
const url = require('url')
const https = require('https')

const userToken = "15ceecf5a98d8f829b6eea3978f9cad4bc8e3a3d"
const apiUrl = "https://api.codenation.dev/v1/challenge/dev-ps/"
// https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=

mFile = {

  get: function() {

    return new Promise( function (resolve, reject) {
      try{
        fetch(apiUrl+"generate-data?token="+userToken)
          .then( response => {  
            resolve(response.json())
          }).catch( error => {
            reject(error)
          })
      }catch(error){
        reject(error)
      }
    })

  },
  
  submit: function(doc){
    
    //"Content-Type":  "application/x-www-form-urlencoded"
    return new Promise( function (resolve, reject) {
      try{
        
        let body = new url.URLSearchParams();
            body.set('answer', JSON.stringify(doc));

        let myHeaders = new fetch.Headers();
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded")

        let myInit = { 
            method: 'POST',
            headers: myHeaders,
            body: body
        }
       
        let myRequest = new fetch.Request(apiUrl+'submit-solution?token='+userToken, myInit);
    
        fetch(myRequest)
          .then( async response => {
            resolve(response.json())
          })
          .catch( error => {
            reject(error)
          })

        // https

       
      }catch(error){
        console.log(error)
        reject(error)
      }
    })
  }
}

module.exports = mFile;
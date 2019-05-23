const sha1 = require('sha1')

hCrypt = {

  encryptSha1: function(word){
    return sha1(word)
  },

  decryptCesar: function(word){

    let decryptWords = "";

    for(let i=0; i<word.length; i++){
      if(word[i].match(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+$/)){    
        let char = ""    
        if((word[i].charCodeAt(0) - 10) < 97){
          char = String.fromCharCode( (122 + (word[i].charCodeAt(0) - 10  - 96) ))
        }else{
          char = String.fromCharCode( (word[i].charCodeAt(0) - 10))
        }    
        decryptWords += char
      }else{
        decryptWords += word[i]
      }
    } 
    return decryptWords
  }

}

module.exports = hCrypt
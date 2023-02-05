const userAnwsers = [];

function confirmExample(description){
    return confirm(description)
}

function promptExample(description){
   return prompt(description)
}

function father(callback){
return userAnwsers.push(callback)
}


father(confirmExample())
father(promptExample())
father(confirmExample())
father(promptExample())
console.log(userAnwsers);
    
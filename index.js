let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];

let action = ['ate', 'peed', 'crushed', 'broke'];

let what = ['my homework', 'the keys', 'the car'];

let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

let excuseElement = document.getElementById("excuse");

function fraseRandom (){
    let numeritoWho = Math.floor(Math.random()*who.length)
    let finalWho = who[numeritoWho]

    let numeritoAction = Math.floor(Math.random()*action.length)
    let finalAction = action[numeritoAction]

    let numeritoWhat = Math.floor(Math.random()*what.length)
    let finalWhat = what[numeritoWhat]

    let numeritoWhen = Math.floor(Math.random()*when.length)
    let finalWhen = when[numeritoWhen]

    let frase = finalWho + " " + finalAction + " " + finalWhat+ " " + finalWhen

return frase

}
   excuseElement.innerHTML = fraseRandom()
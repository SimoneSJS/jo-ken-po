const prompt = require('prompt-sync')();
let pergunta = prompt('Você escolhe pedra?')
if (pergunta === 'pedra') {
    console.log('Você respondeu pedra!')
  
} else {
    console.log('Você respondeu !')
}

// Code your solutions in this file
const names = ["Charlie", "Samip", "Ali"]
function writeCards (names, event){
const messages = []
for (let i = 0; i < names.length; i++){
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
}
console.log(messages)
return messages;
}
function countDown(number){
    while(number >= 0){
        console.log(number)
        number = number - 1
    }
}

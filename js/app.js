let db = [
 {
  question: "What is 1+1"
  , answer: 2
 }
 , {
  question: "What is 2+2"
  , answer: 4
 }

 , {
  question: "What is 3+3"
  , answer: 6
 }
];

let escapekey = '';


for(let i=0; i<2; i++){

 let randomQuestion = Math.floor(Math.random()*db.length);
 console.log(randomQuestion);


let res = prompt(db[randomQuestion].question);


if(res == db[randomQuestion].answer) {
 // console.log(+res);
 // console.log('res: '+res);
 escapekey += res;
}else{
 console.log('false');
}
console.log(escapekey);

}


let answer =document.prompt(db[0].question);

console.log(answer);
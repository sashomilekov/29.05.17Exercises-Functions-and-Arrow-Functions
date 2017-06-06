function solve(input) {

    console.log(`<?xml version="1.0" encoding="UTF-8"?>`);
    console.log(`<quiz>`)
   for(let i = 0; i < input.length; i+=2){
       let question = input[i];
       let answer = input[i+1];

       console.log(`<question>
    ${question}
  </question>
  <answer>
    ${answer}
  </answer>`)
   }
   console.log(`</quiz>`);
}
solve(["Who was the forty-second president of the U.S.A.?", "William Jefferson Clinton"]);
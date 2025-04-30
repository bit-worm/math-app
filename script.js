// form validation
const form = document.getElementById('subscribe');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('lname');

form.onsubmit = function(e) {
  if(!fname.value) {
    e.preventDefault();
  }
  if(!lname.value) {
    e.preventDefault();
  }
  if(!fname.value) {
    e.preventDefault();
  }
}


// math logic
let question = '';
let answer = 0;

const generate = document.getElementById('generate');
const check = document.getElementById('check');
const problem = document.getElementById('problem');
const userAnswer = document.getElementById('answer');

generate.addEventListener('click', function() {
  doMath(question, answer);
  problem.innerText = question;
  userAnswer.value = '';
});

check.addEventListener('click', function() {
  if (userAnswer.value == answer) {
    alert('Correct');
  }
  else{
    alert('Incorrect\nTry again');
  }
});

function doMath() {
  // const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  const x = Math.floor(Math.random() * 100 ) + 1;
  const y = Math.floor(Math.random() * 100 ) + 1;
  const operator = Math.floor(Math.random() * 4) + 1;


  switch (operator) {
    case 1:
      question = `${x} + ${y}`;
      answer = x + y;
      break;
    case 2:
      question = `${x} - ${y}`;
      answer = x - y;
      break;
    case 3:
      question = `${x} x ${y}`;
      answer = x * y;
      break;
    case 4:
      question = `${x} / ${y}`;
      answer = (x/y).toFixed(2);
      break;
  }
}

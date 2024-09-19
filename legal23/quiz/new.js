// let question = document.querySelector("#question");
// let a= document.querySelector("#a");
// let b= document.querySelector("#b");
// let c= document.querySelector("#c");
// let d= document.querySelector("#d");
// let score = document.querySelector("#score");
// let nextques = document.querySelector("#nextques");
// let option = document.querySelectorAll(".option");
// let n = 0;
// let sr = 0;
// let ans = 0;
// // let cc = document.querySelector(".cc");



// let mcq = [ ["How many fundamental rights are there in the Constitution" , "3","6","7","None of these" , "b"] ,
// ["Which of the following is currently not a fundamental right in the Constitution?" ,"Right to Equality", "Right to Property", "Right to Constitutional Remedies", "Right against Exploitation", "b"],
// ["Which of the following is NOT a Directive Principle of State Policy?" , "Equal pay for equal work" ,"Equal pay for equal work", " Promotion of international peace" ," Promotion of cottage industries", "b" ] , ["Which part of the Indian Constitution deals with Fundamental Rights?","To protect the sovereignty and integrity of India","To provide opportunities for education to children between the ages of 6 and 14 years" ,"To safeguard public property", "To cherish and follow the noble ideals of the freedom struggle" ,'b'] , 
// ['How many Fundamental Duties are listed in the Indian Constitution?','8','10','11','12','c'],
// ['Which of the following is a Fundamental Duty according to the Indian Constitution??','To develop scientific temper, humanism, and spirit of inquiry', 'To ensure gender equality','To ensure free and compulsory education for children','To provide public health care','a'],
// [' Who is regarded as the principal architect of the Indian Constitution?', 'Jawaharlal Nehru', 'Mahatma Gandhi','B.R. Ambedkar','Sardar Vallabhbhai Patel','c'],
// ['In which part of the Indian Constitution are Fundamental Duties mentioned?','Part II','Part IV','Part IVA','Part III','c'],
// [' Which of the following laws deals with the protection of women from domestic violence in India?','Indian Penal Code, 1860 ','Protection of Women from Domestic Violence Act, 2005','Dowry Prohibition Act, 1961',' Sexual Harassment of Women at Workplace Act, 2013','b'],

// ]

// question.innerText = mcq[n][0];
// a.innerText = mcq[n][1];
// b.innerText = mcq[n][2];
// c.innerText = mcq[n][3];
// d.innerText = mcq[n][4];


// option.forEach( (opt)=>{
//   opt.classList.add("cc");
// // opt.addEventListener( "mouseover" , ()=>{
// //   if( opt.style.backgroundColor !=="rgba(225,0,0, .3)" ||opt.style.backgroundColor !== "rgba(0,225,0, .3)" ){
// //     opt.style.backgroundColor = "rgba(225,225,225, .3)";
// //  }else{
// //   opt.style.backgroundColor = opt.style.backgroundColor;
// //  }
// //  });
// //   opt.addEventListener( "mouseout" , ()=>{
// //     if( opt.style.backgroundColor !=="rgba(225,0,0, .3)" ||opt.style.backgroundColor !== "rgba(0,225,0, .3)" ){
// //     opt.style.backgroundColor = "transparent";
// //  }else{
// //   opt.style.backgroundColor = opt.style.backgroundColor;
// //  } });

  
  
//   opt.addEventListener("click",()=>{
//     if(opt.id == mcq[n][5]){
//     opt.classList.add("correct");
//     opt.classList.remove("cc");
//     sr++;
//     score.innerText = `Score : ${sr}`;
//     // opt.disabled = true;
//     // ans = opt.id;
//     // option.disabled = true;

//     }else{  
//       opt.classList.add("wrong");
//       opt.classList.remove("cc");
//       option.disabled = true;
      

//     }
//     document.getElementById(mcq[n][5]).classList.add("correct");
//     document.getElementById(mcq[n][5]).disabled = true;
//   })
// });


// nextques.addEventListener( "click" , ()=>{
// document.getElementById(mcq[n][5]).disabled = false;
// n++;
// question.innerText = mcq[n][0];
// // document.querySelector("#ans").disabled = false;
// a.innerText = mcq[n][1];
// b.innerText = mcq[n][2];
// c.innerText = mcq[n][3];
// d.innerText = mcq[n][4];
// option.forEach( (opt)=>{
// opt.classList.remove("cc");
// opt.classList.remove("correct");
// opt.classList.remove("wrong");

// });
// option.forEach( (opt)=>{
//   opt.classList.add("cc");
  
//   });

// // a.style.backgroundColor= "transparent";
// // b.style.backgroundColor= "transparent";
// // c.style.backgroundColor= "transparent";
// // d.style.backgroundColor= "transparent";



// // a.style.hover.backgroundColor = "rgba(225,225,225, .3)";
// // document.getElementById("ans").disabled = false;
// });

// function startClock() {
//   const secondHand = document.querySelector('.second-hand');
//   const timeRemainingText = document.getElementById('time-remaining');
//   let timeRemaining = 15;

//   secondHand.style.animation = 'none'; // Reset animation
//   secondHand.offsetHeight; // Trigger reflow
//   secondHand.style.animation = 'rotateClock 15s linear infinite';

//   // Update the remaining time text every second
//   const interval = setInterval(() => {
//     timeRemaining--;
//     timeRemainingText.textContent = timeRemaining;
    
//     if (timeRemaining === 0) {
//       clearInterval(interval);
//     }
//   }, 1000);

//   // Reset the clock and text after 15 seconds and restart
//   setTimeout(() => {
//     timeRemainingText.textContent = 15;
//     timeRemaining = 15;
//     startClock();
//   }, 15000);
// }

// // Start the clock when the page loads
// window.onload = startClock;









// let question = document.querySelector("#question");
// let a = document.querySelector("#a");
// let b = document.querySelector("#b");
// let c = document.querySelector("#c");
// let d = document.querySelector("#d");
// let score = document.querySelector("#score");
// let nextques = document.querySelector("#nextques");
// let option = document.querySelectorAll(".option");
// let timeRemainingText = document.getElementById('time-remaining');
// let secondHand = document.querySelector('.second-hand');
// let n = 0;
// let sr = 0;
// let ans = 0;
// let timer;

// const mcq = [
//   ["How many fundamental rights are there in the Constitution", "3", "6", "7", "None of these", "b"],
//   ["Which of the following is currently not a fundamental right in the Constitution?", "Right to Equality", "Right to Property", "Right to Constitutional Remedies", "Right against Exploitation", "b"],
//   ["Which of the following is NOT a Directive Principle of State Policy?", "Equal pay for equal work", "Equal pay for equal work", "Promotion of international peace", "Promotion of cottage industries", "b"],
//   ["Which part of the Indian Constitution deals with Fundamental Rights?", "To protect the sovereignty and integrity of India", "To provide opportunities for education to children between the ages of 6 and 14 years", "To safeguard public property", "To cherish and follow the noble ideals of the freedom struggle", "b"],
//   ['How many Fundamental Duties are listed in the Indian Constitution?', '8', '10', '11', '12', 'c'],
//   ['Which of the following is a Fundamental Duty according to the Indian Constitution?', 'To develop scientific temper, humanism, and spirit of inquiry', 'To ensure gender equality', 'To ensure free and compulsory education for children', 'To provide public health care', 'a'],
//   ['Who is regarded as the principal architect of the Indian Constitution?', 'Jawaharlal Nehru', 'Mahatma Gandhi', 'B.R. Ambedkar', 'Sardar Vallabhbhai Patel', 'c'],
//   ['In which part of the Indian Constitution are Fundamental Duties mentioned?', 'Part II', 'Part IV', 'Part IVA', 'Part III', 'c'],
//   ['Which of the following laws deals with the protection of women from domestic violence in India?', 'Indian Penal Code, 1860', 'Protection of Women from Domestic Violence Act, 2005', 'Dowry Prohibition Act, 1961', 'Sexual Harassment of Women at Workplace Act, 2013', 'b'],
// ];

// function startClock() {
//   let timeRemaining = 15;
//   secondHand.style.animation = 'none'; // Reset animation
//   secondHand.offsetHeight; // Trigger reflow
//   secondHand.style.animation = 'rotateClock 15s linear infinite';

//   timer = setInterval(() => {
//     timeRemaining--;
//     timeRemainingText.textContent = timeRemaining;

//     if (timeRemaining === 0) {
//       clearInterval(timer);
//       handleTimeUp();
//     }
//   }, 1000);
// }

// function handleTimeUp() {
//   // Handle timer expiration
//   option.forEach(opt => {
//     if (opt.id === mcq[n][5]) {
//       opt.classList.add("correct");
//     } else {
//       opt.classList.add("wrong");
//     }
//     opt.classList.remove("cc");
//     opt.disabled = true;
//   });

//   // Automatically move to next question after a brief delay
//   setTimeout(() => {
//     nextQuestion();
//   }, 1000);
// }

// function nextQuestion() {
//   if (n < mcq.length - 1) {
//     n++;
//     updateQuestion();
//     startClock(); // Restart the timer for the new question
//   } else {
//     alert("Quiz finished!");
//     // Optionally, handle quiz end logic here
//   }
// }

// function updateQuestion() {
//   question.innerText = mcq[n][0];
//   a.innerText = mcq[n][1];
//   b.innerText = mcq[n][2];
//   c.innerText = mcq[n][3];
//   d.innerText = mcq[n][4];

//   option.forEach(opt => {
//     opt.classList.remove("cc");
//     opt.classList.remove("correct");
//     opt.classList.remove("wrong");
//     opt.disabled = false; // Enable options for new question
//   });

//   option.forEach(opt => {
//     opt.classList.add("cc");
//   });
// }

// option.forEach(opt => {
//   opt.addEventListener("click", () => {
//     if (opt.id === mcq[n][5]) {
//       opt.classList.add("correct");
//       opt.classList.remove("cc");
//       sr++;
//       score.innerText = `Score: ${sr}`;
//       clearInterval(timer); // Stop the timer
//       option.forEach(o => o.disabled = true); // Disable all options

//       // Automatically move to next question after a brief delay
//       setTimeout(() => {
//         nextQuestion();
//       }, 1000);
//     } else {
//       opt.classList.add("wrong");
//       opt.classList.remove("cc");
//       option.forEach(o => o.disabled = true); // Disable all options

//       document.getElementById(mcq[n][5]).classList.add("correct");
//       document.getElementById(mcq[n][5]).disabled = true;
//     }
//   });
// });

// nextques.addEventListener("click", () => {
//   clearInterval(timer); // Stop the timer
//   nextQuestion();
// });

// // Start the quiz when the page loads
// window.onload = () => {
//   updateQuestion();
//   startClock();
// };












let question = document.querySelector("#question");
let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let d = document.querySelector("#d");
let score = document.querySelector("#score");
let nextques = document.querySelector("#nextques");
let option = document.querySelectorAll(".option");
let n = 0;
let sr = 0;
let ans = 0;

let mcq = [
  ["How many fundamental rights are there in the Constitution", "3", "6", "7", "None of these", "b"],
  ["Which of the following is currently not a fundamental right in the Constitution?", "Right to Equality", "Right to Property", "Right to Constitutional Remedies", "Right against Exploitation", "b"],
  ["Which of the following is NOT a Directive Principle of State Policy?", "Equal pay for equal work", "Equal pay for equal work", "Promotion of international peace", "Promotion of cottage industries", "b"],
  ["Which part of the Indian Constitution deals with Fundamental Rights?", "To protect the sovereignty and integrity of India", "To provide opportunities for education to children between the ages of 6 and 14 years", "To safeguard public property", "To cherish and follow the noble ideals of the freedom struggle", 'b'],
  ['How many Fundamental Duties are listed in the Indian Constitution?', '8', '10', '11', '12', 'c'],
  ['Which of the following is a Fundamental Duty according to the Indian Constitution?', 'To develop scientific temper, humanism, and spirit of inquiry', 'To ensure gender equality', 'To ensure free and compulsory education for children', 'To provide public health care', 'a'],
  ['Who is regarded as the principal architect of the Indian Constitution?', 'Jawaharlal Nehru', 'Mahatma Gandhi', 'B.R. Ambedkar', 'Sardar Vallabhbhai Patel', 'c'],
  ['In which part of the Indian Constitution are Fundamental Duties mentioned?', 'Part II', 'Part IV', 'Part IVA', 'Part III', 'c'],
  ['Which of the following laws deals with the protection of women from domestic violence in India?', 'Indian Penal Code, 1860', 'Protection of Women from Domestic Violence Act, 2005', 'Dowry Prohibition Act, 1961', 'Sexual Harassment of Women at Workplace Act, 2013', 'b'],
];

function updateQuestion() {
  if (n >= mcq.length) {
    // Optionally, handle the end of quiz
    alert("Quiz completed!");
    return;
  }

  question.innerText = mcq[n][0];
  a.innerText = mcq[n][1];
  b.innerText = mcq[n][2];
  c.innerText = mcq[n][3];
  d.innerText = mcq[n][4];

  option.forEach(opt => {
    opt.classList.remove("cc", "correct", "wrong");
    opt.classList.add("cc");
  });

  startClock();
}

function startClock() {
  const secondHand = document.querySelector('.second-hand');
  const timeRemainingText = document.getElementById('time-remaining');
  let timeRemaining = 15;

  secondHand.style.animation = 'none'; // Reset animation
  secondHand.offsetHeight; // Trigger reflow
  secondHand.style.animation = 'rotateClock 15s linear infinite';

  const interval = setInterval(() => {
    timeRemaining--;
    timeRemainingText.textContent = timeRemaining;
    
    if (timeRemaining === 0) {
      clearInterval(interval);
      nextQuestion(); // Move to the next question when time is up
    }
  }, 1000);

  setTimeout(() => {
    if (timeRemaining > 0) { // Ensure it doesn't restart if already moved to next question
      timeRemainingText.textContent = 15;
      timeRemaining = 15;
      startClock();
    }
  }, 15000);
}

function nextQuestion() {
  document.getElementById(mcq[n][5]).disabled = false;
  n++;
  updateQuestion();
}

option.forEach(opt => {
  opt.addEventListener("click", () => {
    if (opt.id == mcq[n][5]) {
      opt.classList.add("correct");
      opt.classList.remove("cc");
      sr++;
      score.innerText = `Score : ${sr}`;
    } else {
      opt.classList.add("wrong");
      opt.classList.remove("cc");
    }
    document.getElementById(mcq[n][5]).classList.add("correct");
    document.getElementById(mcq[n][5]).disabled = true;
  });
});

nextques.addEventListener("click", nextQuestion);

// Start the quiz
window.onload = updateQuestion;

















// let question = document.querySelector("#question");
// let a = document.querySelector("#a");
// let b = document.querySelector("#b");
// let c = document.querySelector("#c");
// let d = document.querySelector("#d");
// let score = document.querySelector("#score");
// let nextques = document.querySelector("#nextques");
// let option = document.querySelectorAll(".option");
// let n = 0;
// let sr = 0;
// let ans = 0;
// let interval;
// let timeRemaining = 15;
// let secondHand = document.querySelector('.second-hand');
// let timeRemainingText = document.getElementById('time-remaining');

// let mcq = [
//   ["How many fundamental rights are there in the Constitution", "3", "6", "7", "None of these", "b"],
//   ["Which of the following is currently not a fundamental right in the Constitution?", "Right to Equality", "Right to Property", "Right to Constitutional Remedies", "Right against Exploitation", "b"],
//   ["Which of the following is NOT a Directive Principle of State Policy?", "Equal pay for equal work", "Equal pay for equal work", "Promotion of international peace", "Promotion of cottage industries", "b"],
//   ["Which part of the Indian Constitution deals with Fundamental Rights?", "To protect the sovereignty and integrity of India", "To provide opportunities for education to children between the ages of 6 and 14 years", "To safeguard public property", "To cherish and follow the noble ideals of the freedom struggle", "b"],
//   ['How many Fundamental Duties are listed in the Indian Constitution?', '8', '10', '11', '12', 'c'],
//   ['Which of the following is a Fundamental Duty according to the Indian Constitution?', 'To develop scientific temper, humanism, and spirit of inquiry', 'To ensure gender equality', 'To ensure free and compulsory education for children', 'To provide public health care', 'a'],
//   ['Who is regarded as the principal architect of the Indian Constitution?', 'Jawaharlal Nehru', 'Mahatma Gandhi', 'B.R. Ambedkar', 'Sardar Vallabhbhai Patel', 'c'],
//   ['In which part of the Indian Constitution are Fundamental Duties mentioned?', 'Part II', 'Part IV', 'Part IVA', 'Part III', 'c'],
//   ['Which of the following laws deals with the protection of women from domestic violence in India?', 'Indian Penal Code, 1860', 'Protection of Women from Domestic Violence Act, 2005', 'Dowry Prohibition Act, 1961', 'Sexual Harassment of Women at Workplace Act, 2013', 'b']
// ];

// function updateQuestion() {
//   question.innerText = mcq[n][0];
//   a.innerText = mcq[n][1];
//   b.innerText = mcq[n][2];
//   c.innerText = mcq[n][3];
//   d.innerText = mcq[n][4];
//   option.forEach(opt => {
//     opt.classList.remove("cc");
//     opt.classList.remove("correct");
//     opt.classList.remove("wrong");
//     opt.classList.add("cc");
//   });
//   resetTimer();
// }

// function resetTimer() {
//   clearInterval(interval);
//   timeRemaining = 15;
//   timeRemainingText.textContent = timeRemaining;
//   secondHand.style.animation = 'none'; // Reset animation
//   secondHand.offsetHeight; // Trigger reflow
//   secondHand.style.animation = 'rotateClock 15s linear infinite';
//   interval = setInterval(() => {
//     timeRemaining--;
//     timeRemainingText.textContent = timeRemaining;
    
//     if (timeRemaining === 0) {
//       clearInterval(interval);
//       secondHand.style.animationPlayState = 'paused'; // Pause the clock
//     }
//   }, 1000);
// }

// option.forEach(opt => {
//   opt.addEventListener("click", () => {
//     if (opt.id == mcq[n][5]) {
//       opt.classList.add("correct");
//       opt.classList.remove("cc");
//       sr++;
//       score.innerText = `Score : ${sr}`;
//       clearInterval(interval); // Stop timer on correct answer
//       secondHand.style.animationPlayState = 'paused'; // Pause the clock
//     } else {
//       opt.classList.add("wrong");
//       opt.classList.remove("cc");
//       clearInterval(interval); // Stop timer on wrong answer
//       secondHand.style.animationPlayState = 'paused'; // Pause the clock
//     }
//     document.getElementById(mcq[n][5]).classList.add("correct");
//     document.getElementById(mcq[n][5]).disabled = true;
//   });
// });

// nextques.addEventListener("click", () => {
//   if (n < mcq.length - 1) {
//     n++;
//     updateQuestion();
//   } else {
//     alert("No more questions.");
//   }
// });

// window.onload = updateQuestion;

const correctAnswers=['B', 'B', 'A', 'B'];
const form = document.querySelector('.myForms');
const result = document.querySelector('.result');
const percent = document.querySelector('.percent');

form.addEventListener('submit', (e)=>{
     e.preventDefault();
/** Setting score state to 0 */
let score=0;
// getting the value answer users selected

const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value ]

// Checking for correct answers
userAnswers.forEach((answer, index)=>{
if (answer === correctAnswers[index]){
  score += 25;
}
});
/**Scroll to result section */
scrollTo(0,0);
/** Display Result Section */
result.classList.remove("d-none");
/** Display result value on html */
let output = 0;
const timer =setInterval(() => {
  result.querySelector('span').textContent = `${score}%`;
  if (output === score) {
    clearInterval(timer);
  } else{
    output++
  }
}, 300);
console.log(score);

})

// let m=0;
// let n=0;
// let x=0;
// let y=0;
// document.getElementById('radio1Default1').onclick = function () { 
//     let m = 25;
//      } 
//   document.getElementById('radio1Default2').onclick = function () { 
//     let m= 25; 
//   } 
//   document.getElementById('radio2Default1').onclick = function () { 
//     let n = 25;
//      } 
//   document.getElementById('radio2Default2').onclick = function () { 
//     let n= 25; 
//   } 
//   document.getElementById('radio3Default1').onclick = function () { 
//     let x = 25;
//       } 
//   document.getElementById('radio3Default2').onclick = function () { 
//     let x= 25;;
//   } 
//   document.getElementById('radio4Default1').onclick = function () { 
//     let y = 25;
   
//   } 
//   document.getElementById('radio4Default2').onclick = function () { 
//     let y= 25;
//   } 

//  function percentage(m,n,x,y) { 
//     return m+n+x+y
//     }

//  const g = percentage(m,n,x,y);
   
//  document.getElementById("percentage").textContent = `${g}%`;
// console.log(m);


     
  
 
 
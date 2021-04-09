//Expected outputs:
//Build a simple Bot that simulates a security guard at the entrance of a shopping mall. 
//The Bot is to ensure that all visitors are wearing a face mask, 
//and only visitors above 12 years of age are allowed entry into the mall.
//1.	alert “Welcome to {shopping mall name}” if a visitor is wearing a 
//face mask and is >=12 years of age
//2.	alert “You must be 12 years or older to enter {shopping mall name}” if a visitor is wearing a face mask but is less than 12 years of age
//3.	alert “You have been denied entry into {shopping mall name}” for users a without a face mask
//4.	At any point in time, the Bot should be able to provide the number of visitors allowed entry and the number of visitor that were denied entry into the mall


const Mall = "My shopping mall";
const AGE = Number(prompt("Whats your AGE"));
const Mask = prompt("Are you wearing a mask, Enter yes or no");
let allowed = 0;
let rejected = 0;
if (Mask == "yes" && AGE >= "12") {
   allowed = allowed + 1;
   alert(`Welcome to ${Mall}`)
}

else if ( AGE < "12") {
   rejected = rejected + 1;
   alert(`You must be 12 years or older to enter ${Mall}`)
}
else {
   rejected = rejected + 1;
   alert(`You have been denied entry into ${Mall}`)}


console.log(`visitors allowed ${allowed}`);
console.log(`visitors denied ${rejected}`);
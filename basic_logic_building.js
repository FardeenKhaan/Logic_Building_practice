console.log('Print 1 to 5');
// --- Print 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
//
console.log('Print 5 to 1');
// -- Print 5 to 1
for(let i = 5; i>=1; i--){
    
    
    console.log(i);
    
}
//
console.log('Print even');
//
for(let i = 0; i<=20; i++){
    if(i%2 == 0){
        console.log(i);
        
    }
    else{
        console.log(i)
    }
}

//
console.log('Print Odd');
for(let i = 0; i<=20; i++){
    if(i%2 != 0){
        console.log(i);
        
    }
}

//
console.log('Sum of first 10 natural numbers');
let sum = 0;
for(let i=1; i<=10; i++){
    add = sum+i;
    console.log(add)
}


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
    sum +=i;
}
console.log(sum);


//
console.log('Multiplication table of 5');
let num = 5;
for(let i=1; i<=10; i++){
    console.log(num ,'*', i ,'=', num*i)
}


//
console.log('List Print');
const list = [20,30,40,50,60]
for(let i = 0; i<list.length; i++){
    console.log(list[i])
}


console.log('find max number');

const arr = [20, 30, 40, 50, 60];

// assume first element is max
let max = arr[0];

// start loop from second element
for (let i = 1; i < arr.length; i++) {
    // compare current element with max
    if (arr[i] > max) {
        // update max
        max = arr[i];
    }
}

// print result
console.log("Max number is:", max);

    
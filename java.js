//multiplication table
const number = parseInt(prompt("Enter an interger:"));

//creating multiplication method

for (let x = 1; x <= 10; x++){


    //number to multiply by
    
    const result = x * number;
    
        //showing the answer
    document.write(`${number} * ${1} = ${result }`+"</br>");
}

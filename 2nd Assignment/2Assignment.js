// Write a program to check whether number is Perfect Square or not



 function isSquare(n1) {
       
     for(let i = 0; i<Infinity; i++){

        let x = i*i;

        if(x === n1) {

            return "Is Perfect Square";

                 }else{
                       if(x>n1){

                        return "Is not Perfect Square";
                 } 
             }
         } 
    }

      console.log("Number is Perfect Square or not:",isSquare(625));

  //Write a program to find SUM and AVERAGE of two numbers

        function sumAvg(a1,b1){
           let Sum = a1+b1;   
                   console.log("TotalSum:",Sum);

             let Avg = Sum/2;

                   console.log("Average:",Avg)
        }
             sumAvg(34,22);


  //Write a program to calculate difference of two numbers

  function diff(a2,b2){

    if(a2>b2) {

     return a2-b2;

    }else{

        return b2-a2;
    }
  }
  console.log('Difference:',diff(50,22));

 // Write a program to Count Number of Digits in a given number

        function CountNumberofDigit(Num){

          let count = 0;
    
          while(Num>=1){

               Num/= 10;  // Num = Num/10,,,,Num= 12345/10=1234

               count++
           }

        return count;

    }
       console.log("Number of Digits:",CountNumberofDigit(123456));

 //Write a Program to Find Largest Element in an Array

    let array = [1,2,4,3,11,14,15,3];

    console.log(array);


    let Largest = 0;


    function largestElement(array){


        for(let i = 0; i<array.length; i++){


            if(array[i]>Largest){

                Largest = array[i];

            }
         }
                return Largest;
    }

         console.log("Largest Element:",largestElement(array));


 //Write a program to Display Prime Numbers in Array
let newArray = [20,21,22,23,24,25,26,27,28,2,31,32,33,35,38,39,];

console.log(newArray);
    
    for(num of newArray){

        let i ;

        for( i = 2; i < num; i++){

            if(num%i===0){

                break
            }
        } 
        if(i==num){

            console.log(i)

        }

    }


//Write a program to Check Character Is a Vowel or Not Using If-Else

function isVowel(x){

        if(x == "A" || x == "E" || x == "I" || x == "O" || x == "U"
                || x == "a" || x == "e" || x == "i" || x == "o" || x == "u" ){



            console.log("Character Is a Vowel")

        }else{


            console.log("Character Is not a Vowel")

        }

    }
        isVowel("a");

// Write a program to Given Date Month and the Year Is Correct or Not Using If-Else

function isValidDate(d, m, y){   
     
    if (y <1000 ||y >3000){

        console.log("Year is not correct");

    }else{

        console.log("year is correct");

    if (m < 1 || m > 12){

        console.log("month is not correct");

    } else{

        console.log("month is  correct");
    }

    if (d < 1 || d > 31){
        console.log("date is not correct");
    } else{

        console.log("date is correct");
    }
 
}
}
  isValidDate(12, 11, 2022);



//Write a program to Reverse a Number Using While Loop

let N = 123;
let reverse=0;
let remainder;

while (N>0) {
    
        remainder = N % 10;

        reverse = reverse*10+remainder;  

        N= (N/10)|0;
}
console.log(reverse);

//Write a program to Number Is a Palindrome or Not Using While Loop


function Palindrome(){
    let remainder1;
    let final = 0;
    let number = 123321;

    temp=number;

    while(number>0)
    {
        remainder1 = number%10;
        number = (number/10)|0;
        final = final*10+remainder1;
    }
    if(final==temp)
    {
        console.log("The number is Palindrome");
    }
    else
    {
    console.log("The number is not palindrome");
    }
}

 Palindrome();

//Write a program to find first and last digit of any number 
let n = 1234
function firstDigit(n)
{
    while (n >=10){

        n = n/10;

    }
       return n|0;

}
     function lastDigit(n)

{
        return (n % 10)|0;

}
    console.log("First Digit",firstDigit(n),"Last Digit",lastDigit(n));


//Write a program to find sum of first and last digit of any number 

let no  = 2345;

let sum;

function firstNo(no){

    while (no >=10){
        no = no/10;
    }
       return no|0;
}
     function lastNo(no){

        return (no % 10)|0;
 }
      sum = firstNo(no)+lastNo(no);

    console.log("Sum:",sum);

//Write a program to find maximum and minimum using functions
  
    let x = 10;
    let y = 20;

    function getMaxMin(x,y) {
        
        if(x>y){
            console.log("Maximum :",x);
             }else{
                     if(x<y){
                      console.log("Manimum :",x);
                          }else{
                             console.log("Minimum:",y);
                      }
                             console.log("Maximum:",y);
                    }
                }
    
          getMaxMin(x,y);

  //  program to find prime numbers in given range using functions

  function primeNumbers(N1,N2){

    console.log("Prime numbers between 10-50 are:")

    for (let i = N1; i <= N2; i++) {
        let flag = 0;
    
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
            
            }
        }

        if (i > 1 && flag == 0) {

            console.log(i);

        }
        
    }
}  
      primeNumbers(10,50) ;


   //////////////////////////////////////////////////////////////////////////////
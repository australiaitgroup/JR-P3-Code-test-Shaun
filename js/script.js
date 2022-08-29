// write your code here

//answer 1


for (let i=1; i<101;i++) {
    if (i % 3 == 0)
    {
        if (i % 5 == 0)
        {
            console.log("FizzBuzz ")
        }
        else

        console.log("Fizz ")
    }

    else if (i % 5 == 0)

    {
        console.log("Buzz ")
    }
    else

     console.log(i+" ")
}

// answer2
// function evenThree(i){
//     return (i%3==0 & 1%5!==0 ? "Fizz":i)

// }

// function evenFive(i){
//     return (i%5==0 && i%3!==0 ? "Buzz":i)

// }

// function notevenFiften(i){
//     return (i%15!==0 ? i:"FizzBuzz")

// }

// for (let i=1; i<101; i++){
//     console.log(evenThree(i));
//     console.log(evenFive(i));
//     console.log(notevenFiften(i));

// }


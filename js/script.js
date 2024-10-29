//Ciclo For con numeri da 1 a 100
for(let i = 1; i <= 100; i++){

    //Se il numero è divisibile per tre E (&&) per cinque verrà stampato "FizzBuzz"
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");

    //Altrimenti se il numero è divisibile per tre verrà stampato "Fizz"
    }else if(i % 3 === 0){
        console.log("Fizz");

    //Altrimenti se il numero è divisibile per cinque verrà stampato "Buzz"

    }else if(i % 5 === 0){
        console.log("Buzz");

    //Altrimenti verrà stampato il numero normale
    }else{
        console.log(i);
    }
}
function isEven(number){
    return (number ^ 1) == (number + 1) ? true : false
}

const number = 2022;
console.log(isEven(number));

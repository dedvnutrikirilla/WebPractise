const isPowerOfTwo = (number) => {
    for(let i = 1; (i <= 2147483646) && (i > 0); i = i << 1) {
        console.log(number + ' - ' + i);
        if(number === i) return true;
    }
    return false;
}

const coolerIsPowerOfTwo = (number) => {
    if((number & (number - 1)) === 0)
        return true;
    return false;
}

console.log(isPowerOfTwo(2147483646));
console.log(coolerIsPowerOfTwo(2147483646));

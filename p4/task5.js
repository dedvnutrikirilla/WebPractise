function parseNames(input) {
    const patternTotal = /[A-Z]\w*,( *|)[A-Z]\w*/g;
    const patternName = /[A-Z]\w*/g;
    const namesArray = input.match(patternTotal);
    let resultStr = '';
    for(const names of namesArray) {
        const [firstName, secondName] = names.match(patternName);
        resultStr += secondName + ' ' + firstName + '\n';
    }
    return resultStr.slice(0, -1);
}

console.log(parseNames('Lennon, John\nMcCartney,Paul\nHarrison, George\nStar, Ringo'));

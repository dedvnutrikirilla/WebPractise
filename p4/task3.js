function strPad(input, fullLen, fillStr, fillType = 'FILL_RIGHT') {
    if (!input || typeof(input) !== 'string')
        throw new Error('No Input string found');
    if (!fullLen || typeof(fullLen) !== 'number' || fullLen <= input.length) 
        throw new Error('Full Lenght must be bigger than input string length!');
    if (!fillStr || typeof(fillStr) !== 'string') 
        throw new Error('No Search string found');

    let string = input;
    const toFill = fullLen - input.length;
    let strLeft = '';
    let strRight = '';

    if (fillType === 'FILL_LEFT') {
        for(let i = 0; i < toFill; i += fillStr.length) {
            strLeft += fillStr;
        }
        strLeft = strLeft.substr(0, toFill);
    }
    else if (fillType === 'FILL_BOTH') {
        for(let i = 0; i < toFill; i += 2 * fillStr.length) {
            strLeft += fillStr;
            strRight += fillStr;
        }
        strLeft = strLeft.substr(0, toFill / 2);
        strRight = strRight.substr(0, (toFill / 2) + 0.5);
    }
    else {
        for(let i = 0; i < toFill; i += fillStr.length) {
            strRight += fillStr;
        }
        strRight = strRight.substr(0, toFill);
    }

    string = strLeft + string + strRight;
    return string;
}

console.log(strPad('star', 12, '_*_', 'FILL_BOTH'));

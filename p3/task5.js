function substrCount(input, needle, offset = 0, length = 0) {
    if (!input || typeof(input) !== 'string') throw new Error('No Input string found');
    if (!needle || typeof(input) !== 'string') throw new Error('No Search string found');
    if (offset < 0) throw new Error('Offset must be positive');
    if (length < 0) throw new Error('Length must be positive');

    if(length === 0) length = input.length;
    input = input.substr(offset, length);

    let pattern = new RegExp(needle, 'g')
    let resultArray = input.match(pattern);
    if (!resultArray) return 0;
    return resultArray.length;
}

console.log(substrCount('012e4ee7e9', 'e', 1, 5));

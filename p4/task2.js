function wordBySubstr(input, needle){
    if (!input || typeof(input) !== 'string') throw new Error('No Input string found');
    if (!needle || typeof(needle) !== 'string') throw new Error('No Search string found');

    const pattern = new RegExp(`[А-я]*(${needle})[А-я]*`, 'g');
    let resultArray = input.match(pattern);
    if (!resultArray) return 0;
    return resultArray;
}

console.log(wordBySubstr('хромМи знаємо хромненько, що монохромний хромколір – це градації сірогохромий', 'хром'));
// why 'рогохром', where 'сірогохром'? Need to link ukrainian symbols? 

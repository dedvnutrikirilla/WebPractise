function testBrackets(string){
    const expectedBracket = [];

    for(let char of string) {
        const last = expectedBracket.length - 1;
        switch (char) {
            case '(':
                expectedBracket.push(')');
                break;
            case '[':
                expectedBracket.push(']');
                break;
            case '{':
                expectedBracket.push('}');
                break;
            
            case ')':
                if (expectedBracket[last] !== ')') return false;
                expectedBracket.pop(')');
                break;
            case ']':
                if (expectedBracket[last] !== ']') return false;
                expectedBracket.pop(']');
                break;
            case '}':
                if (expectedBracket[last] !== '}') return false;
                expectedBracket.pop('}');
                break;
            default:
                break;
          }
    }

    if (expectedBracket.length > 0)
        return false;
    return true;
}

const string = '{(((1[[2]341{}  ] 3 []4 (1234))[]{}))}[()]';
console.log(testBrackets(string));

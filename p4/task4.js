function testDateString(input) {
    const pattern = /\b([1-9]|[0-2][0-9]|3[0-1])-((|0)[1-9]|1[0-2])-\d{4}\b/;
    const string = input;
    const testResult = pattern.test(string); 
    
    return testResult;
}

console.log(testDateString('25-07-2021'));

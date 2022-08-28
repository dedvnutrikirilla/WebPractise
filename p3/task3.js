class circledArray{
    constructor() {
        this.array = new Array;
    }

    logAll() {
        console.log(this.array);
    }

    add(data) {
        this.array.push(data);
    }

    get(number) {
        const length = this.array.length;
        if (length == 0) throw new Error('Empty Array!');

        let positive = true;
        if (number < 0) {
            positive = false;
        }

        while(Math.abs(number) >= length) {
            if (positive)
                number -= length;
            else
                number += length;
        }
        if (!positive && number !== 0) 
            number = length - Math.abs(number);

        console.log(this.array[number]);
        return this.array[number];
    }
}

const myArr = new circledArray();
myArr.add('position 0');
myArr.add('position 1');
myArr.add('position 2');
myArr.add('position 3');
myArr.add('position 4');
myArr.logAll();
myArr.get(7);
myArr.get(-12);

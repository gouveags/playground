import { expect } from 'chai';

const array = [1, 2, 3, 4, 5, 6];

const shuffle = (arr) => [...arr.sort(() => Math.random() - 0.5)];

const results = new Set();

console.log(process.cwd());

const iterations = 10;

for (let index = 0; index < iterations; index++) {
    const temp = [...array];
    const res = shuffle(temp)

    console.log(res);

    expect(array).to.not.eql(res); 

    results.add(JSON.stringify(res));
}


console.log(results.size);


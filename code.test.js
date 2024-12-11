const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js') + '');

//iterative synchronous implementation of the function
function iterative_count(array, key) {
    if (array === undefined) return 0;
    let accum = 0;
    for (let i = 0; i < array.length; i++) {
        accum += (array[i] === key);
    }
    return accum;
}

countMatchesAsync([1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 5], 1)
    .then(result => {
        assert.strictEqual(result, iterative_count([1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 5], 1), 'Test 1 Failed');
    })
    .catch(err => console.error(err));

countMatchesAsync([], 1)
    .then(result => {
        assert.strictEqual(result, iterative_count([], 1), 'Test 2 Failed');
    })
    .catch(err => console.error(err));

countMatchesAsync([1, 2, 3, 4, 5], 6)
    .then(result => {
        assert.strictEqual(result, iterative_count([1, 2, 3, 4, 5], 6), 'Test 3 Failed');
    })
    .catch(err => console.error(err));

countMatchesAsync([1, 1, 2, 3, 3, 3, 4], 3)
    .then(result => {
        assert.strictEqual(result, iterative_count([1, 1, 2, 3, 3, 3, 4], 3), 'Test 4 Failed');
    })
    .catch(err => console.error(err));

countMatchesAsync([1, 2, 3, 4, 5], 4)
    .then(result => {
        assert.strictEqual(result, iterative_count([1, 2, 3, 4, 5], 4), 'Test 5 Failed');
    })
    .catch(err => console.error(err));

console.log('All tests completed');

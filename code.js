function countMatchesAsync(array, key) {
    // Returns a promise immediately after the function is called.
    return new Promise((resolve) => {
        // Initialize an accumulator variable to count how many times the key matches an element.
        let count = 0;
        //process each element asynchronously.
        const processNext = (index) => {
            // If the current index is beyond the array length exit
            if (index >= array.length) {
                resolve(count); // Resolve the promise with the final count
                return;
            }
            // Checks if current element matches the key.
            if (array[index] === key) {
                // Increment the count if matched.
                count++; 
            }
            // Use setImmediate to schedule the next iteration, allowing other operations to run in between.
            setImmediate(() => processNext(index + 1));
        };
        processNext(0);
    });
}

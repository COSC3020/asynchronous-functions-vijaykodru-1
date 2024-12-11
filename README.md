# Asynchronicity

Implement a function that takes an array and a key to search for and counts the
number of times key matches an element in the array (the count matches function
we talked about in lectures). Your implementation must count the number of
matches asynchronously, but does not need to do so in parallel. What type of
asynchronous execution you choose is up to you.

I have not provided a template; depending on how you choose to implement the
function, it will have a different signature.

I have also not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The [async library](https://caolan.github.io/async/v3/) may be helpful with
this.

## Runtime Analysis

What is the time complexity of your implementation (worst-case $\Theta$)? Add
your answer, including your reasoning, to this markdown file.

The worst case time complexity of the code I implemented is $\Theta(n)$. This is because even though the processnext is being schduled using the setimmediate function that function only has to iterate over given array of size n to find if any matches to the key which take the time complexity of $\Theta(n)$. The time complexity for updating the count variable is constant meaning it take $\Theta(1)$ which can be ignored asymptotically.

References used:

https://nodejs.org/en/learn/asynchronous-work/understanding-setimmediate

The above website helped understand the use of set immediate function to schedule the next iteration

https://www.w3schools.com/js/js_promise.asp

I used this above website for doing my parallel mergesort using promises. 

Having done the parallel mergesort exercise helped me wrote the code very easily as this is just a simple algorithm requiring to find the number of times a element matches in the given array. 

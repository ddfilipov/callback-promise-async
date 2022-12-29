# Callbacks, Promises and async/await

Short [tutorial](https://youtu.be/JRNToFh3hxU) from LearnWebCode. Will be taking some notes to solidify concepts.

The tutorial's goal is to show the difference, especially in code-clarity, between `callbacks`, `Promises` with `.then()` and `Promises` with `async/await`.

Contents:

## [Callbacks](1-callbacks/README.md)

Its the old way of having async functions. Not used that much anymore.

## [Promises + .then()](2-promises/README.md)

A Promise is an object that represents a completion or failure of an async function. When we use `.then()` we can do another thing after our async function has finished executing.

## [Async/Await](3-async-await/README.md)

If we mark a function with the `async` keyword we can then use `await` and the execution will wait each and every single await before in jumps to the next line.

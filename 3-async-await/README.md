## Async/Await

For the async/await part we're gonna use the same functions as before, we'll just have to change the way we call them.

Async/await still uses Promises, but uses different syntax.

This method is better because it's easier for the human brain to quickly understand what's happening. This exemplifies what we want to achieve:

```js
const something = "hello";
console.log(something);
```

When we see this code we immidiately know what's gonna happen. The first line of code is gonna execute, followed by the second one. That's what we wanna achieve with async await.

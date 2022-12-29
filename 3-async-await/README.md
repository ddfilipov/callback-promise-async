## Async/Await

For the async/await part we're gonna use the same functions as before, we'll just have to change the way we call them.

Async/await still uses Promises, but uses different syntax.

This method is better because it's easier for the human brain to quickly understand what's happening. This exemplifies what we want to achieve:

```js
const something = "hello";
console.log(something);
```

When we see this code we immidiately know what's gonna happen. The first line of code is gonna execute, followed by the second one. That's what we wanna achieve with async await.

We know that if we execute this following line, taking into account that getCats can take a few seconds to finish, the `console.log()` won't return anything, because cats would still be executing by the time the JavaScript engine gets to the console.log line.

```js
const cats = getCats();
console.log(cats);
```

We can achieve this by using `await` before the function call.

```js
const cats = await getCats();
console.log(cats);
```

But this is not finished yet! we need to be inside of an async function in order to use the keyword `await`. This is how we'd do it:

```js
const go = async () => {
    const cats = await getCats();
    console.log(cats);
};

go();
```
This code is much cleaner than the `.then()` one.
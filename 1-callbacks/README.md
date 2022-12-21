## Callbacks

`Callbacks` are the way it used to be done.
In JavaScript you can pass a function to a function. That function you've passed to the first function is called the callback. You're supposed to call the function passed as a parameter inside of the "parent" function.

This is an example of a callback function.

```js
function getCats(cb) {
    const random = Math.random() * 1000;
    setTimeout(function () {
        cb(["Meowsalot", "Purrsloud", "BiscuitMaker"]);
    }, random);
}

getCats(function (cats) {
    console.log(cats);
});
```

We call `getCats()` and pass the anonymous function `function (cats){}` and then we console.log() the result of cats, which will return an array of strings.

Notice how there's a `setTimeout()` inside the first function. This is because we want to emulate an api's behavior and make it async.

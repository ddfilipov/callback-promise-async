## Promises

We again have getCats, getDogs, and getBirds that return promises to retrieve data.

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
## Promises

We again have getCats, getDogs, and getBirds that return promises to retrieve data.

The functions which we are calling are at the bottom of the app.js and app.ts file.

`getCats().then();` this line right here would call `getCats()`, and we don't know how long this is gonna take, but when know that after it's been called hence the `.then()`, we're gonna call a function we're gonna give it.

This would be the result:

```js
getCats().then(function (cats) {
    console.log(cats);
});
```

### synchronous async calls (execute one by one and wait)

Let's say we wanted to call the functions one by one. This is what we'd do:

```js
getCats()
    .then(function (cats) {
        console.log(cats);
        return getDogs();
    })
    .then(function (dogs) {
        console.log(dogs);
        return getBirds();
    })
    .then(function (birds) {
        console.log(birds);
    });
```

So, compared to callbacks, where you'd have to keep nesting another level deep reaching a callback hell. With promises you just say on the first level of nesting as see in the code above.

This is a little better than callbacks

### Promise.all()

The previous example is not a real scenario, in reality we don't care which one of the 3 `get` functions gets executed first.

This is one of the biggest reasons we need promises. `Promise.all()` recieves an array of promises and returns a promise.

For this example we'd do:

```js
Promise.all([getCats(), getDogs(), getBirds()]).then(([cats, dogs, birds]) => {
    const allAnimals = cats.concat(dogs, birds);
    console.log(cats, dogs, birds);
    console.log(allAnimals);
});
```

Notice how I've used an arrow function on the .`then()`, you can also use a regular function like LearnWebCode does:

```js
Promise.all([getCats(), getDogs(), getBirds()]).then(function (results) {
    const allAnimals = cats.concat(dogs, birds);
    console.log(cats, dogs, birds);
    console.log(allAnimals);
});
```

Both methods are correct.

The full code would be like this:

```js
Promise.all([getCats(), getDogs(), getBirds()]).then(([cats, dogs, birds]) => {
    const allAnimals = cats.concat(dogs, birds);
    console.log(cats, dogs, birds);
    console.log("showing allAnimals:", allAnimals);

    superSecretOrder(allAnimals).then((orderedAnimals) => {
        console.log("showing ordered animals:", orderedAnimals);
    });
});
```

I've destructured the `cats`, `dogs` and `birds` so it's a lil bit easier to understand what we're concatenating. At the end of our `Promise.all()` we call `superSecretOrder()` and that would order the animals and we then show them with a `console.log`.

We could also return something in our Promise.all() and use a .then() at the end like this:

```js
Promise.all([getCats(), getDogs(), getBirds()])
    .then(([cats, dogs, birds]) => {
        const allAnimals = cats.concat(dogs, birds);
        console.log(cats, dogs, birds);
        console.log("showing allAnimals:", allAnimals);

        return superSecretOrder(allAnimals);
    })
    .then((orderedAnimals) => {
        console.log("showing ordered animals:", orderedAnimals);
    });
```

This would do the same thing as the one I did earlier but it's just a differnt way of doing things.

### Conclusion

This code is still not gonna be perfect, we still have to use anonymous functions, passing in parameters and even though we're not nesting code like we did with callbacks. We still have to use .then() fairly often.

So, promises are better than using callbacks but there's an even better way of working with asynchronous calls, and that's called async/await.

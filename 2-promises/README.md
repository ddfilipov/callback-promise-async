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

This is one of the biggest reasons we need promises. `Promise.all()` recieves an array of promises

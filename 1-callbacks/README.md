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

Here's the TypeScript equivalent of the previous code:

```ts
function getCats(cb: (cats: string[]) => void) {
    const random = Math.random() * 1000;
    setTimeout(function () {
        cb(["Meowsalot", "Purrsloud", "BiscuitMaker"]);
    }, random);
}

getCats(function (cats: string[]) {
    console.log(cats);
});
```

Now, what if we wanted to make several api calls, wait for them to finish and then call another function that's gonna do something with their result?

We have the following code:

```js
getCats(function (cats) {
    getDogs(function (dogs) {
        getBirds(function (birds) {
            const allAnimals = cats.concat(dogs, birds);
            superSecretOrder(allAnimals, function (sortedNames) {
                console.log(sortedNames);
            });
            console.log(allAnimals);
        });
    });
});

function getCats(cb) {
    const random = Math.random() * 1000;
    setTimeout(function () {
        cb(["Meowsalot", "Purrsloud", "BiscuitMaker"]);
    }, random);
}

function getDogs(cb) {
    const random = Math.random() * 1000;
    setTimeout(function () {
        cb(["EatsAnything", "Barksalot", "HeadTilt"]);
    }, random);
}

function getBirds(cb) {
    const random = Math.random() * 1000;
    setTimeout(function () {
        cb(["Scruffy", "Baldy", "Screech"]);
    }, random);
}

function superSecretOrder(items, cb) {
    const random = Math.random() * 1000;
    setTimeout(function () {
        cb([...items].sort());
    }, random);
}
```

Let's go little by little.

First, we've got this:

```js
getCats(function (cats) {
    getDogs(function (dogs) {
        getBirds(function (birds) {
            const allAnimals = cats.concat(dogs, birds);
            superSecretOrder(allAnimals, function (sortedNames) {
                console.log(sortedNames);
            });
            console.log(allAnimals);
        });
    });
});
```

This function will do the following

1. Call `getCats()` and fill an array (`cats`)
2. Call `getDogs()` and fill an array (`dogs`)
3. Call `getBirds()` and fill an array (`birds`)
4. Concat those 3 arrays into allAnimals
5. Call `superSecretOrder()` passing that allAnimals + a callback.

Let's take a look into `superSecretOrder()`:

```js
function superSecretOrder(items, cb) {
    const random = Math.random() * 1000;
    setTimeout(function () {
        cb([...items].sort());
    }, random);
}
```

This function takes an array (of strings) and a callback. The callback is going to take that array of string and sort it. Then we'd print the result `console.log(allAnimals)`as said in the previous snippet.

This would be the ts equivalent:

```ts
function getCatsTs(cb: (a: string[]) => void) {
    const random = Math.random() * 1000;
    setTimeout(function () {
        cb(["Meowsalot", "Purrsloud", "BiscuitMaker"]);
    }, random);
}

getCatsTs(function (cats: string[]) {
    getDogsTs(function (dogs: string[]) {
        getBirdsTs(function (birds: string[]) {
            const allAnimals = cats.concat(dogs, birds);
            console.log(allAnimals);
            superSecretOrderTs(allAnimals, function (orderedAnimals: string[]) {
                console.log(orderedAnimals);
            });
        });
    });
});

function getDogsTs(cb: (dogs: string[]) => void) {
    const random = Math.random() * 1000;
    setTimeout(function () {
        cb(["EatsAnything", "Barksalot", "HeadTilt"]);
    }, random);
}

function getBirdsTs(cb: (birds: string[]) => void) {
    const random = Math.random() * 1000;
    setTimeout(function () {
        cb(["Scruffy", "Baldy", "Screech"]);
    }, random);
}

function superSecretOrderTs(animals: string[], cb: (orderedAnimals: string[]) => void) {
    const random = Math.random() * 1000;
    setTimeout(function () {
        cb(animals.sort());
    }, random);
}
```

There's a lot of indentation with this callback method.

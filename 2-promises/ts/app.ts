export {};

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

// Functions which return promises that you can use
function getCats(): Promise<string[]> {
    return new Promise<string[]>(function (resolve, reject) {
        const random = Math.random() * 1000;
        setTimeout(function () {
            resolve(["Meowsalot", "Purrsloud", "BiscuitMaker"]);
        }, random);
    });
}

function getDogs(): Promise<string[]> {
    return new Promise<string[]>(function (resolve, reject) {
        const random = Math.random() * 1000;
        setTimeout(function () {
            resolve(["EatsAnything", "Barksalot", "HeadTilt"]);
        }, random);
    });
}

function getBirds(): Promise<string[]> {
    return new Promise<string[]>(function (resolve, reject) {
        const random = Math.random() * 1000;
        setTimeout(function () {
            resolve(["Scruffy", "Baldy", "Screech"]);
        }, random);
    });
}

function superSecretOrder(items) {
    return new Promise<string[]>(function (resolve, reject) {
        const random = Math.random() * 1000;
        setTimeout(function () {
            resolve([...items].sort());
        }, random);
    });
}

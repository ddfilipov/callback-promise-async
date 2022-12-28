export {};

// METHOD 1: call functions one after the other
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

// METHOD 2: call all functions at the same time, we don't care which one finishes first
Promise.all([getCats(), getDogs(), getBirds()]).then(([cats, dogs, birds]) => {
    const allAnimals: string[] = cats.concat(dogs, birds);
    console.log(cats, dogs, birds);
    console.log("showing allAnimals:", allAnimals);

    superSecretOrder(allAnimals).then((orderedAnimals: string[]) => {
        console.log("showing ordered animals:", orderedAnimals);
    });
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

export {};

let allAnimalsTs: string[][] = [];

function isArrayFilledTs() {
    if (allAnimalsTs.length === 3) {
        const arrayAnimals: string[] = allAnimalsTs[0].concat(allAnimalsTs[1], allAnimalsTs[2]);
        superSecretOrderTs(arrayAnimals, function (orderedAnimals: string[]) {
            console.log(orderedAnimals);
        });
    }
}

getCatsTs(function (cats: string[]) {
    allAnimalsTs.push(cats);
    isArrayFilledTs();
});
getDogsTs(function (dogs: string[]) {
    allAnimalsTs.push(dogs);
    isArrayFilledTs();
});
getBirdsTs(function (birds: string[]) {
    allAnimalsTs.push(birds);
    isArrayFilledTs();
});

function getCatsTs(cb: (a: string[]) => void) {
    const random = Math.random() * 1000;
    setTimeout(function () {
        cb(["Meowsalot", "Purrsloud", "BiscuitMaker"]);
    }, random);
}

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

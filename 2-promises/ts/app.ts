export {};
// METHOD 1: Execute functions 1 by 1
// getCats(function (cats: string[]) {
//     getDogs(function (dogs: string[]) {
//         getBirds(function (birds: string[]) {
//             const allAnimals = cats.concat(dogs, birds);
//             console.log(allAnimals);
//             superSecretOrder(allAnimals, function (orderedAnimals: string[]) {
//                 console.log(orderedAnimals);
//             });
//         });
//     });
// });

// METHOD 2: Execute all functions at the same time
let allAnimals: string[][] = [];

function isArrayFilledTs() {
    if (allAnimals.length === 3) {
        const arrayAnimals: string[] = allAnimals[0].concat(allAnimals[1], allAnimals[2]);
        superSecretOrder(arrayAnimals, function (orderedAnimals: string[]) {
            console.log(orderedAnimals);
        });
    }
}

getCats(function (cats: string[]) {
    allAnimals.push(cats);
    isArrayFilledTs();
});
getDogs(function (dogs: string[]) {
    allAnimals.push(dogs);
    isArrayFilledTs();
});
getBirds(function (birds: string[]) {
    allAnimals.push(birds);
    isArrayFilledTs();
});

function getCats(cb: (a: string[]) => void) {
    const random = Math.random() * 1000;
    setTimeout(function () {
        cb(["Meowsalot", "Purrsloud", "BiscuitMaker"]);
    }, random);
}

function getDogs(cb: (dogs: string[]) => void) {
    const random = Math.random() * 1000;
    setTimeout(function () {
        cb(["EatsAnything", "Barksalot", "HeadTilt"]);
    }, random);
}

function getBirds(cb: (birds: string[]) => void) {
    const random = Math.random() * 1000;
    setTimeout(function () {
        cb(["Scruffy", "Baldy", "Screech"]);
    }, random);
}

function superSecretOrder(animals: string[], cb: (orderedAnimals: string[]) => void) {
    const random = Math.random() * 1000;
    setTimeout(function () {
        cb(animals.sort());
    }, random);
}

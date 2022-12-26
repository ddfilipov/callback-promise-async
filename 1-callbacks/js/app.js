export {};
// METHOD 1: Execute functions 1 by 1
// getCats(function (cats) {
//     getDogs(function (dogs) {
//         getBirds(function (birds) {
//             const allAnimals = cats.concat(dogs, birds);
//             superSecretOrder(allAnimals, function (sortedNames) {
//                 console.log(sortedNames);
//             });
//             console.log(allAnimals);
//         });
//     });
// });

// METHOD 2: Execute all functions at the same time
var allAnimals = [];

function isArrayFilled() {
    if (allAnimals.length === 3) {
        const arrayAnimals = allAnimals[0].concat(allAnimals[1], allAnimals[2]);
        superSecretOrder(arrayAnimals, function (orderedAnimals) {
            console.log(orderedAnimals);
        });
    }
}

getCats(function (cats) {
    allAnimals.push(cats);
    isArrayFilled();
});
getDogs(function (dogs) {
    allAnimals.push(dogs);
    isArrayFilled();
});
getBirds(function (birds) {
    allAnimals.push(birds);
    isArrayFilled();
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

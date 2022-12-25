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

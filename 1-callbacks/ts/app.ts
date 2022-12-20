function getCatsTs(cb: (a: string[]) => void) {
    const random = Math.random() * 1000;
    setTimeout(function () {
        cb(["Meowsalot", "Purrsloud", "BiscuitMaker"]);
    }, random);
}

getCatsTs(function (cats: string[]) {
    getDogs(function (dogs: string[]) {
        getBirds(function (birds: string[]) {
            const allAnimals = cats.concat(dogs, birds);
            console.log(allAnimals);
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

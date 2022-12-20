function getCats(cb) {
    const random = Math.random() * 1000;
    setTimeout(function () {
        cb(["Meowsalot", "Purrsloud", "BiscuitMaker"]);
    }, random);
}

getCats(function (cats) {
    getDogs(function (dogs) {
        getBirds(function (birds) {
            const allAnimals = cats.concat(dogs, birds);
            console.log(allAnimals);
        });
    });
});
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

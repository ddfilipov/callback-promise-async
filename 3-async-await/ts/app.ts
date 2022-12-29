export {};

const go = async () => {
    const [cats, dogs, birds] = await Promise.all([getCats(), getDogs(), getBirds()]);
    const allAnimals = [...cats, ...dogs, ...birds];
    const orderedAnimals = await superSecretOrder(allAnimals);
    console.log(orderedAnimals);
};

go();

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

function superSecretOrder(items: string[]) {
    return new Promise<string[]>(function (resolve, reject) {
        const random = Math.random() * 1000;
        setTimeout(function () {
            resolve([...items].sort());
        }, random);
    });
}

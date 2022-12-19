function getCatsTs(cb: (a: string[]) => void) {
    const random = Math.random() * 1000;
    setTimeout(function () {
        cb(["Meowsalot", "Purrsloud", "BiscuitMaker"]);
    }, random);
}

getCatsTs(function (cats: string[]) {
    console.log(cats);
});

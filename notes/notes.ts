// random notes I'm taking:
const promesa = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve("holis");
    }, 1000);
});

promesa.then((res) => {
    console.log(res);
});

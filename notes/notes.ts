// random notes I'm taking:
const promesa = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve("respuesta promesa 1");
    }, 1000);
});

const promesa2 = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve("respuesta promesa 2");
    }, 1000);
});

promesa.then((res) => {
    console.log(res);
    promesa2.then((res) => console.log(res));
});

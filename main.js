addEventListener("DOMContentLoaded", (e) => {
    let calcular = document.querySelector("#guia5");
    let suma = 0;
    calcular.addEventListener("submit", (e) => {
        e.preventDefault();
        let numero = document.querySelector("#numero").value;
        if (numero > 0) {
            suma += parseInt(numero);
            calcular.reset();
            document.querySelector("#resultado").innerHTML = `Resultado de la suma: ${suma}`;
        }else{
            alert("Los numeros deben ser positivos");
            suma = 0;
            document.querySelector("#resultado").innerHTML = ``;
            calcular.reset();
        }  
    })
})

let limpiar = (e) => {
    document.querySelector("#guia5").reset()
    document.querySelector("#resultado").innerHTML = ``;
}

addEventListener('reset', limpiar);
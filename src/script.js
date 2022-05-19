const notas = {
    matematica: null,
    lengua: null,
    efsi: null
};

const imagenes = {
    feliz: "../assets/feliz.jpeg",
    llorando: "../assets/llorando.jpeg"
};

const onChange = (id) => {
    const inputElement = document.getElementById(id);
    const errorElement = document.getElementById(`error-${id}`);
    const nota = inputElement.value === "" ? null : Number(inputElement.value);

    notas[id] = nota;

    if (nota === null) {
        inputElement.style.color = "";
        errorElement.style.display = "none";
    } else if (nota < 1 || nota > 10) {
        inputElement.style.color = "";
        errorElement.style.display = "block";
    } else if (nota < 6) {
        inputElement.style.color = "red";
        errorElement.style.display = "none";
    } else {
        inputElement.style.color = "green";
        errorElement.style.display = "none";
    }
};

const sacarPromedio = () => {
    const promedioElement = document.getElementById("promedio");
    const errorElement = document.getElementById("error-promedio");
    const estadoElement = document.getElementById("estado");

    if (Object.values(notas).every(val => val !== null)) {
        errorElement.style.display = "none";
        const promedio = Math.round(Object.values(notas).reduce((acc, val) => acc + val) / Object.values(notas).length * 10) / 10;
        promedioElement.innerText = promedio;

        if (promedio >= 6) {
            estadoElement.src = imagenes.feliz;
        } else {
            estadoElement.src = imagenes.llorando;
        }
    } else {
        errorElement.style.display = "block";
    }
};

const sacarMejorMateria = () => {
    const mejorMateriaElement = document.getElementById("mejorMateria");
    const errorElement = document.getElementById(`error-mejorMateria`);
    const inputs = document.querySelectorAll('input');

    if (Object.values(notas).every(val => val !== null)) {
        errorElement.style.display = "none";
        const mejorMateria = Object.keys(notas).reduce((acc, val) => {
            return (notas[acc] > notas[val]) ? acc : val;
        }, "matematica");
        inputs.forEach(input => {
            if (input.id === mejorMateria) {
                input.style.color = "blue";
            } else {
                // actualizar input
                onChange(input.id);
            }
        })
        mejorMateriaElement.innerText = mejorMateria;
        errorElement.style.display = "none";
    } else {
        errorElement.style.display = "block";
    }
};


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
    const nota = inputElement.value === "" ? null : parseInt(inputElement.value);

    notas[id] = nota;

    if (isNaN(nota) || inputElement.value.length !== nota.toString().length) {
        inputElement.style.color = "";
        errorElement.style.display = "block";
        errorElement.innerHTML = "La nota debe ser un numero";
    } else if (nota === null) {
        inputElement.style.color = "";
        errorElement.style.display = "none";
    } else if (nota < 1 || nota > 10) {
        inputElement.style.color = "";
        errorElement.style.display = "block";
        errorElement.innerHTML = "La nota debe estar entre 1 y 10";
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

    if (Object.values(notas).every(val => val !== null && !isNaN(val) && val > 0 && val <= 10)) {
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

    if (Object.values(notas).every(val => val !== null && !isNaN(val) && val > 0 && val <= 10)) {
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


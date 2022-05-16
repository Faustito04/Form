const notas = {
    matematica: null,
    lengua: null,
    efsi: null
};

const imagenes = {
    feliz: "data:image/jpeg;base64,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",
    llorando: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHHO8bLJrGGKXHIS6g-EG-aJRkKSaKh3c50nFrspJe4g&s"
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
        console.log(Object.values(notas));
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

    if (Object.values(notas).every(val => val !== null)) {
        errorElement.style.display = "none";
        const mejorMateria = Object.keys(notas).reduce((acc, val) => {
            return (notas[acc] > notas[val]) ? acc : val;
        }, "matematica");
        mejorMateriaElement.innerHTML = mejorMateria;
    } else {
        errorElement.style.display = "block";
    }
};


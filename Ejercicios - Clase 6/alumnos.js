var nombre = document.getElementById("nombre");
var email = document.getElementById("email");
var fecha = document.getElementById("fecha");
var dni = document.getElementById("dni");
var telefono = document.getElementById("telefono");
var legajo = document.getElementById("legajo");
var cursosSelect = document.getElementById("cursos");
var alerta = document.getElementById("alert");
var alerta2 = document.getElementById("alert2");
var asignatura = document.getElementById("asignaturasOption");
var nota1 = document.getElementById("nota1");
var nota2 = document.getElementById("nota2");
var nota3 = document.getElementById("nota3");
var pond1 = document.getElementById("pond1");
var pond2 = document.getElementById("pond2");
var pond3 = document.getElementById("pond3");


var errores = [];
var alumnos = [
    {
        dni: "123456",
        nombre: "Javier",
        telefono: "654321",
        email: "javier@email.com",
        fecha: "1998-29-05",
        curso: "CursoA",
        legajo: "ACursoA1234562021",
        promedios: [90,70,80,50,75,85,100,40]
    }
];

var cursos = [
    {
        id: 0,
        curso: "CursoA",
        rango: [18, 19]
    },
    {
        id: 1,
        curso: "CursoB",
        rango: [20, 21]
    },
    {
        id: 2,
        curso: "CursoC",
        rango: [22, 23]
    },
]

var asignaturas = [
    "Química",
    "Matemática",
    "Ciencias Sociales",
    "Física",
    "Historia",
    "Biología",
    "Informática",
    "Idiomas"
]

cursos.forEach(curso => {
    var option = document.createElement('option');
    option.value = curso.id;
    option.text = curso.curso;
    document.getElementById("cursos").appendChild(option);
});

var pos = 0;
asignaturas.forEach(asignatura => {
    var option = document.createElement('option');
    option.value = pos;
    option.text = asignatura;
    document.getElementById("asignaturasOption").appendChild(option);
    pos = pos + 1;
});


nombre.addEventListener("blur", function () {
    if (nombre.value == "") {
        alerta.classList.remove("d-none");
        if (errores.indexOf("Debe ingresar el nombre") == -1) {
            errores.push("Debe ingresar el nombre");
        }
        alerta.textContent = errores;
    } else {
        if (errores.indexOf("Debe ingresar el nombre") != -1) {
            errores.splice(errores.indexOf("Debe ingresar el nombre"), 1)
            if (errores.length == 0) {
                alerta.classList.add("d-none")
            }
            alerta.textContent = errores;
        }
    }

})

legajo.addEventListener("blur", function () {
    let correctoLegajo = "A" + cursos[cursosSelect.value].curso + dni.value + "2021"
    if (legajo.value == "") {
        alerta.classList.remove("d-none");
        if (errores.indexOf("Debe ingresar el legajo") == -1) {
            errores.push("Debe ingresar el legajo");
        }
        alerta.textContent = errores;
    } else {
        if (errores.indexOf("Debe ingresar el legajo") != -1) {
            errores.splice(errores.indexOf("Debe ingresar el legajo"), 1)
            if (errores.length == 0) {
                alerta.classList.add("d-none")
            }
            alerta.textContent = errores;
        }
    }
    if (legajo.value != correctoLegajo) {
        alerta.classList.remove("d-none");
        if (errores.indexOf("El alejo no es correcto") == -1) {
            errores.push("El alejo no es correcto");
        }
        alerta.textContent = errores;
    } else {
        if (errores.indexOf("El alejo no es correcto") != -1) {
            errores.splice(errores.indexOf("El alejo no es correcto"), 1)
            if (errores.length == 0) {
                alerta.classList.add("d-none")
            }
            alerta.textContent = errores;
        }
    }

})

cursosSelect.addEventListener("blur", function () {
    if (cursos[cursosSelect.value].rango.indexOf(parseInt(2021 - fecha.value.substring(0, 4))) == -1) {
        alerta.classList.remove("d-none");
        if (errores.indexOf("No pertenece al rango de edad del curso") == -1) {
            errores.push("No pertenece al rango de edad del curso");
        }
        alerta.textContent = errores;
    } else {
        if (errores.indexOf("No pertenece al rango de edad del curso") != -1) {
            errores.splice(errores.indexOf("No pertenece al rango de edad del curso"), 1)
            if (errores.length == 0) {
                alerta.classList.add("d-none")
            }
            alerta.textContent = errores;
        }
    }

})

telefono.addEventListener("blur", function () {
    if (telefono.value == "") {
        alerta.classList.remove("d-none");
        if (errores.indexOf("Debe ingresar el telefono") == -1) {
            errores.push("Debe ingresar el telefono");
        }
        alerta.textContent = errores;
    } else {
        if (errores.indexOf("Debe ingresar el telefono") != -1) {
            errores.splice(errores.indexOf("Debe ingresar el telefono"), 1)
            if (errores.length == 0) {
                alerta.classList.add("d-none")
            }
            alerta.textContent = errores;
        }
    }
    if (telefono.value.length != 10) {
        alerta.classList.remove("d-none");
        if (errores.indexOf("Debe ingresar 10 numeros") == -1) {
            errores.push("Debe ingresar 10 numeros");
        }
        alerta.textContent = errores;
    } else {
        if (errores.indexOf("Debe ingresar 10 numeros") != -1) {
            errores.splice(errores.indexOf("Debe ingresar 10 numeros"), 1)
            if (errores.length == 0) {
                alerta.classList.add("d-none")
            }
            alerta.textContent = errores;
        }
    }

})

dni.addEventListener("blur", function () {
    if (dni.value == "") {
        alerta.classList.remove("d-none");
        if (errores.indexOf("Debe ingresar el dni") == -1) {
            errores.push("Debe ingresar el dni");
        }
        alerta.textContent = errores;
    } else {
        if (errores.indexOf("Debe ingresar el dni") != -1) {
            errores.splice(errores.indexOf("Debe ingresar el dni"), 1)
            if (errores.length == 0) {
                alerta.classList.add("d-none")
            }
            alerta.textContent = errores;
        }

    }
})


fecha.addEventListener("blur", function () {
    if (fecha.value == "") {
        alerta.classList.remove("d-none");
        if (errores.indexOf("Debe ingresar el fecha") == -1) {
            errores.push("Debe ingresar el fecha");
        }
        alerta.textContent = errores;
    } else {
        if (errores.indexOf("Debe ingresar el fecha") != -1) {
            errores.splice(errores.indexOf("Debe ingresar el fecha"), 1)
            if (errores.length == 0) {
                alerta.classList.add("d-none")
            }
            alerta.textContent = errores;
        }

    }
    if (2021 - fecha.value.substring(0, 4) >= 18) {
        if (errores.indexOf("Debe ser mayor de edad") != -1) {
            errores.splice(errores.indexOf("Debe ser mayor de edad"), 1)
            if (errores.length == 0) {
                alerta.classList.add("d-none")
            }
            alerta.textContent = errores;
        }
    } else {
        alerta.classList.remove("d-none");
        if (errores.indexOf("Debe ser mayor de edad") == -1) {
            errores.push("Debe ser mayor de edad");
        }
        alerta.textContent = errores;
    }
})


email.addEventListener("blur", function () {
    if (email.value == "") {
        alerta.classList.remove("d-none");
        if (errores.indexOf("Debe ingresar el email") == -1) {
            errores.push("Debe ingresar el email");
        }
        alerta.textContent = errores;
    } else {
        if (errores.indexOf("Debe ingresar el email") != -1) {
            errores.splice(errores.indexOf("Debe ingresar el email"), 1)
            if (errores.length == 0) {
                alerta.classList.add("d-none")
            }
            alerta.textContent = errores;
        }
    }

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let correo = document.getElementById("email").value;
    if (!re.test(String(correo).toLowerCase())) {
        alerta.classList.remove("d-none");
        if (errores.indexOf("El email no es valido") == -1) {
            errores.push("El email no es valido");
        }
        alerta.textContent = errores;
    } else {
        if (errores.indexOf("El email no es valido") != -1) {
            errores.splice(errores.indexOf("El email no es valido"), 1)
            if (errores.length == 0) {
                alerta.classList.add("d-none")
            }
            alerta.textContent = errores;
        }
    }

    if (email.value.length > 50) {
        alerta.classList.remove("d-none");
        if (errores.indexOf("El email no debe superar los 50 caracteres") == -1) {
            errores.push("El email no debe superar los 50 caracteres");
        }
        alerta.textContent = errores;
    } else {
        if (errores.indexOf("El email no debe superar los 50 caracteres") != -1) {
            errores.splice(errores.indexOf("El email no debe superar los 50 caracteres"), 1)
            if (errores.length == 0) {
                alerta.classList.add("d-none")
            }
            alerta.textContent = errores;
        }
    }

})

function crear() {
    if (errores.length == 0) {
        var inputs = Array.from(document.getElementsByTagName('input'));
        let alumno = new Object();
        alumno.nombre = nombre.value;
        alumno.telefono = telefono.value;
        alumno.email = email.value;
        alumno.dni = dni.value;
        alumno.fecha = fecha.value;
        alumno.legajo = legajo.value;
        alumno.curso = cursos[cursosSelect.value].curso;
        alumnos.push(alumno);
        var inputs = Array.from(document.getElementsByTagName('input'));
        inputs.forEach(dato => {
            dato.value = ""
        });
    }
    let form = document.getElementById("form");
    form.classList.add("d-none");
    document.getElementById("asignaturas").classList.remove("d-none");
    document.getElementById("notas").classList.remove("d-none");

}

var promedios = [0, 0, 0, 0, 0, 0, 0, 0];

function agregarNotas() {
    let sumaPond = parseInt(pond1.value) + parseInt(pond2.value) + parseInt(pond3.value);
    let promedio = (parseInt(pond1.value) * parseInt(nota1.value)) / 100 + (parseInt(pond2.value) * parseInt(nota2.value)) / 100 + (parseInt(pond3.value) * parseInt(nota3.value)) / 100;
    if (sumaPond == 100) {
        if (errores.indexOf("La suma de las ponderaciones debe dar 100") != -1) {
            errores.splice(errores.indexOf("La suma de las ponderaciones debe dar 100"), 1)
            if (errores.length == 0) {
                alerta2.classList.add("d-none")
            }
            alerta2.textContent = errores;
        }
        promedios[asignatura.value] = Math.round(promedio);
        asignaturas[asignatura.value] = ""
        asignatura.innerHTML = ""
        pos = 0;
        asignaturas.forEach(asignatura => {
            if (asignatura != "") {
                var option = document.createElement('option');
                option.value = pos;
                option.text = asignatura;
                document.getElementById("asignaturasOption").appendChild(option);
            }
            pos = pos + 1;
        });
        var tag = true;
        asignaturas.forEach(asignatura => {
            if (asignatura != "") {
                tag = false;
            }
        });
        if (tag) {
            document.getElementById("asignaturas").classList.add("d-none");
            document.getElementById("notas").classList.add("d-none");
            form.classList.remove("d-none");
            asignaturas = [
                "Química",
                "Matemática",
                "Ciencias Sociales",
                "Física",
                "Historia",
                "Biología",
                "Informática",
                "Idiomas"
            ]
            asignatura.innerHTML = ""
            pos = 0;
            asignaturas.forEach(asignatura => {
                if (asignatura != "") {
                    var option = document.createElement('option');
                    option.value = pos;
                    option.text = asignatura;
                    document.getElementById("asignaturasOption").appendChild(option);
                }
                pos = pos + 1;
            });
        }
    } else {
        alerta2.classList.remove("d-none");
        if (errores.indexOf("La suma de las ponderaciones debe dar 100") == -1) {
            errores.push("La suma de las ponderaciones debe dar 100");
        }
        alerta2.textContent = errores;
    }
}

var menu = document.getElementById("menu");
var table = document.getElementById("lista");
var buscarU = document.getElementById("buscar");
var card = document.getElementById("card");

function lista() {
    actualizarTabla();
    table.classList.remove("d-none");
    menu.classList.add("d-none");
    card.classList.add("d-none");
}

function buscar(){
    menu.classList.add("d-none");
    buscarU.classList.remove("d-none")
    card.classList.add("d-none");
    form.classList.add("d-none")
    
}

function actualizarTabla(){
    document.getElementById("tablabody").innerHTML = "";

    alumnos.forEach(alumno => {
        document.getElementById("tablabody").insertRow(-1).innerHTML = '<td>' +alumno.dni + '</td>' + '<td>' +alumno.nombre + '</td>' + '<td>' +alumno.telefono + '</td>' +
        '<td>' +alumno.email + '</td>' + '<td>' +alumno.fecha + '</td>' + '<td>' +alumno.curso + '</td>' + '<td>' +alumno.legajo + '</td>';
    });
}

function volver() {
    menu.classList.remove("d-none");
    table.classList.add("d-none");
    form.classList.remove("d-none")
    card.classList.remove("d-none");
    buscarU.classList.add("d-none");
    titulo.textContent = "";
    id.textContent = "";
    telefono.textContent = "";
    email.textContent = "";
    input.value = ""
}

function buscarAlumno(){
    let select = document.getElementById("selectbuscar").value;
    let input = document.getElementById("inputbuscar").value;
    let flag = false;
    let elalumno;

    alumnos.forEach(alumno => {
        if (alumno[select] == input) {
            flag = true;
            elalumno = alumno;
        }
    });

    if(flag){
        document.getElementById("info").classList.remove("d-none");
        document.getElementById("nameCard").textContent =  elalumno.nombre;
        document.getElementById("dniCard").textContent = `DNI: ${elalumno.dni}`;
        document.getElementById("bDateCard").textContent = `Fecha de nacimiento: ${elalumno.fecha}`;
        document.getElementById("phoneCard").textContent = `Telefono: ${elalumno.telefono}`;
        document.getElementById("emailCard").textContent = `Email: ${elalumno.email}`;
        document.getElementById("legajoCard").textContent = `Legajo: ${elalumno.legajo}`;
        document.getElementById("courseCard").textContent = `Curso: ${elalumno.curso}`;
    }else{
        alert("Alumno no encontrado por el parametro");
    }
}
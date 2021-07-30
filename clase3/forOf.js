function addName() {
    return 'Christopher';
}

const students = ['Juan', 'Hector', 'Erika', 'Felipe'];
console.log(students.length);

// for (let i = 0; i < students.length; i++) {
//     let text = 'estudiante n°' ${i + 1} = ${students[i]};
//     console.log(text);
// }

for (let student of students) {
    console.log(student);
}
console.log("-------------------------------");

// students.push('Felipe');
// students.unshift('Darwin');
// console.log(students[3]);// viualizar estudiante en la posicion 3


// // const student = students.shift();
// // const student = students.pop();
// console.log('->', student);


// console.log("-------------------------------");

// const i = students.indexOf('Erika');
// console.log(i);
// const student = students.splice(i,1);
// console.log(students);


const studentToSearch = 'Erika';
const i = students.indexOf(studentToSearch);
if (i === -1) {
    console.log(`${studentToSearch} no se encuentra registrado`);
} else {
    console.log(`${studentToSearch} es el estudiante n° ${i+1}`);
};



//----------CREAR OBJETOS--------------
// y agregarlos al final con push 
function addStudentToList(id,name) {
    students2.push({
        id: id,
        name: name,
        isLoggeIn: false,
        requestConection() {
            console.log('deseo ingresar a clases');
        }
    });
}


const students2 = [
    {id: 1010101, nombre: 'Erika Hernandez'},
    {id: 72882882, nombre: 'Ambar Mendez'}
];

addStudentToList(6466838, 'Leticia Ortiz');

const studentSelected = students2.splice(0,1);
console.log(studentSelected);
// studentSelected.requestConection();

console.log(students2);


// -------------ejemplo de la tarea de input y contraseña

const text = 'hola';
console.log(text.includes('a'));// si texto incluye la letra "a", (es verdad)

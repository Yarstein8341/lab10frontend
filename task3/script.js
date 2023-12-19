class Student {
    constructor(lastName, firstName, grades) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.grades = grades;
    }
}

class ListOfStudents {
    constructor(students) {
        this.students = students;
    }

    getTableList() {
        let table = '<table><thead><tr><th>Last Name</th><th>First Name</th><th>Grades</th></tr></thead><tbody>';

        this.students.forEach(student => {
            table += `<tr><td>${student.lastName}</td><td>${student.firstName}</td><td>${student.grades.join(', ')}</td></tr>`;
        });

        table += '</tbody></table>';
        return table;
    }
}

class StylesTable extends ListOfStudents {
    constructor(students) {
        super(students);
    }

    getStyles() {
        return
        <style>

        </style>
            ;
    }


}


const students = [
    new Student('Doe', 'John', [80, 75, 90]),
    new Student('Smith', 'Alice', [85, 88, 92]),

];

const styledTable = new StylesTable(students);
document.getElementById('output').innerHTML = styledTable.getTableList();

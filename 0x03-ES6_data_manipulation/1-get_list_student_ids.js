function getListStudents(studentList) {
    if (!Array.isArray(studentList)){
        return [];
    } else {
        return studentList.map(student => student.id);
    }
}
function getStudentIdsSum (studentList) {
    if (!Array.isArray(studentList)) {
        return 0;
    } else {
        return studentList.reduce((accumulator, student) => accumulator + student.id, 0);
    }
}
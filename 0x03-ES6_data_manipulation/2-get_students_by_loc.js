function getStudentsByLocation (studentList, city) {
    if (!Array.isArray(studentList)) {
        return [];
    } else {
        return studentList.filter(student => student.location === city);
    }
}
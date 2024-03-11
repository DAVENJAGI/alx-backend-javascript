function updateStudentGradeByCity(studentList, city, newGrades) {
  if (!Array.isArray(studentList) || !Array.isArray(newGrades)) {
    return [];
  }
  const newGradesMap = newGrades.reduce((acc, grade) => {
    acc[grade.id] = grade.grade;
    return acc;
  }, {});

  return studentList.map(student => {
    if (student.location === city) {
        student.grade = newGradesMap[student.id] || student.grade
    }
    return student;
  });
}
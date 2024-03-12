/**
 * 
 * @param {
 * id: Number
 * firstName: string
 * location: String
 * } studentList 
 * @returns 
 */
export default function getListStudents(studentList) {
  if (!Array.isArray(studentList)){
        return [];
  } else {
    return studentList.map(student => student.id);
  }
}

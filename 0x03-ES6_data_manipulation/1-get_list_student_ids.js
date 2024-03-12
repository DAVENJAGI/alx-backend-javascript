/**
 * Fetches student's ids
 * @param {{
 * id: Number
 * firstName: string
 * location: String
 * } []}studentList - list of students
 * @returns 
 */
export default function getListStudentIds(studentList) {
  if (studentList instanceof Array) {
    return studentList.map((student) => student.id);
  }
  return [];
}
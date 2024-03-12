/**
 * Fetches ids from students list.
 * @param {{
*   id: Number,
*   firstName: String,
*   location: String
* }[]} students - The list of students.
* @returns
*/
export default function getListStudentIds(studentList) {
 if (studentList instanceof Array) {
   return students.map((student) => student.id);
 }
 return [];
}
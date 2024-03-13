/**
 * Fetches the sum of ids of list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The students List.
 * @returns
 */
export default function getStudentIdsSum(studentList) {
  if (studentList instanceof Array) {
    return studentList.reduce(
      (prevStudent, curStudent) => prevStudent.id || prevStudent + curStudent.id,
      0,
    );
  }
  return 0;
}

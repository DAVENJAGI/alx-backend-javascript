/**
 * Retuens sum of all IDs
 * @param {{
 * id: Number,
 * firstName: String,
 * location: String
 * } []} studentList - student list
 * @returns 
 */
export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (prevStudent, curStudent) => prevStudent.id || prevStudent + curStudent.id,
      0,
    );
  }
  return 0;
}


// variable to delclare students and scores in array of objects
const students = [
    { id: 1, name: 'Alice', score: 85 },
    { id: 2, name: 'Bob', score: 70 },
    { id: 3, name: 'Charlie', score: 90 },
  ];
  
  function HighScorers() {
    const highScorers = students
    //filter students with scores above 80, returns the object of those that are above 80
      .filter((student) => student.score > 80)
// maps through those students returned using the spread operator to create the new list and appends passed as true to the object
      .map((student) => ({ ...student, passed: true }));
  
 // returns the student using the unique id, and provides the name the score and appeneds with passed yes
 // bit illogical as we have already filtered out the fail students using the filter function     
    return (
      <ul>
        {highScorers.map((student) => (
          <li key={student.id}>
            {student.name} (Score: {student.score}) - Passed: {student.passed ? 'Yes' : 'No'}
          </li>
        ))}
      </ul>
    );
  }
  
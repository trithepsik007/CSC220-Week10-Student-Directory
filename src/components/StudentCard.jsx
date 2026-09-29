function StudentCard({ name, major, score }) {
  return (
    <div className="student-card">
      <h2>{name}</h2>
      <p>Major: {major}</p>
      <p>Score: {score}</p>
      <p>Status: {score >= 50 ? "Passed ✅" : "Failed ❌"}</p>
    </div>
  );
}

export default StudentCard;
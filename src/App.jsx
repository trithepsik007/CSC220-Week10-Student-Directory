import "./App.css";
import Header from "./components/Header";
import StudentCard from "./components/StudentCard";
import Footer from "./components/Footer";

function App() {
  const students = [
    { id: 1, name: "Ana", major: "IT", score: 82 },
    { id: 2, name: "Jimmy", major: "IT", score: 90 },
    { id: 3, name: "John", major: "Business", score: 45 },
    { id: 4, name: "Sarah", major: "Computer Science", score: 76 },
    { id: 5, name: "Mike", major: "Marketing", score: 38 },
  ];

  return (
    <div className="app">
      <Header />

      <main className="student-container">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            major={student.major}
            score={student.score}
          />
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default App;
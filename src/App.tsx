import CourseGoal from "./components/CourseGoal.tsx";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header.tsx";

export default function App() {
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goal</h1>
      </Header>
      <CourseGoal title="React + TypeScript">
        <p>Starting from ground up</p>
      </CourseGoal>
    </main>
  );
}

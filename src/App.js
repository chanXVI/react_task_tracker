import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
      id: 1,
    },
    {
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
      id: 2,
    },
    {
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
      id: 3,
    },
  ]);

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;

// // Using Class Based Component
// import React from "react";

// class App extends React.Component {
//   render() {
//     return <h1>Hello From a Class</h1>
//   }
// }

// export default App;

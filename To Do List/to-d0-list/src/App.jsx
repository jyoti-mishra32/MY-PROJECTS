// useState → state manage karne ke liye
// useEffect → side effects handle karne ke liye
import { useState, useEffect } from "react";

function App() {

  // Input field ki value store karta hai
  let [task, setTask] = useState("");

  // Saare tasks ko store karta hai
  // Local Storage se pehle se saved tasks milenge to unhe load karega
  // Agar saved tasks nahi hain to empty array [] se start karega
  let [tasks, setTasks] = useState(() => {
    let savedTasks = localStorage.getItem("tasks");

    return savedTasks ? JSON.parse(savedTasks) : [];
  });


  // Jab bhi tasks change honge,
  // updated tasks Local Storage me save honge
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  // ---------------- ADD TASK ----------------

  function addTask() {

    // Agar input empty hai ya sirf spaces hain,
    // to task add nahi hoga
    if (task.trim() === "") {
      return;
    }

    // Check karta hai ki same task pehle se exist karta hai ya nahi
    if (tasks.some((item) => item.text === task)) {
      alert("Task already exists!");
      return;
    }

    // Naya task ek object ke form me create kar rahe hain
    let newTask = {
      text: task,
      completed: false
    };

    // Purane tasks + new task
    setTasks([...tasks, newTask]);

    // Add hone ke baad input empty karna
    setTask("");
  }


  // ---------------- DELETE TASK ----------------

  function deleteTask(index) {

    // Selected task ko remove karke
    // baaki tasks ki new array banata hai
    let newTasks = tasks.filter((_, i) => i !== index);

    // Updated tasks ko state me save karta hai
    setTasks(newTasks);
  }


  // ---------------- COMPLETE / INCOMPLETE ----------------

  function toggleTask(index) {

    // Tasks ki copy banate hain
    let newTasks = [...tasks];

    // Completed ko toggle karta hai:
    // false → true
    // true → false
    newTasks[index].completed = !newTasks[index].completed;

    // Updated tasks save karta hai
    setTasks(newTasks);
  }


  // ---------------- EDIT TASK ----------------

  function editTask(index) {

    // User se new task name leta hai
    let newTask = prompt(
      "Edit your task",
      tasks[index].text
    );

    // Agar user ne Cancel nahi kiya
    // aur input empty nahi hai
    if (newTask !== null && newTask.trim() !== "") {

      // Tasks ki copy banate hain
      let newTasks = [...tasks];

      // Selected task ka text update karte hain
      newTasks[index].text = newTask;

      // Updated tasks save karte hain
      setTasks(newTasks);
    }
  }


  // ---------------- UI ----------------

  return (
    <div className="container">

      <h1>To-Do List</h1>

      {/* Input field */}
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter your task"
      />

      {/* Add button */}
      <button onClick={addTask}>
        Add
      </button>


      {/* Task list */}
      <ul>

        {tasks.map((item, index) => (

          <li key={index}>

            {/* Task par click karne se
                Complete / Incomplete hoga */}
            <span
              onClick={() => toggleTask(index)}
              style={{
                textDecoration: item.completed
                  ? "line-through"
                  : "none",

                cursor: "pointer"
              }}
            >
              {item.text}
            </span>


            {/* Edit button */}
            <button className="edit-btn" onClick={() => editTask(index)}>
              Edit
            </button>


            {/* Delete button */}
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              Delete
            </button>

          </li>

        ))}

      </ul>

    </div>
  );
}


// App component ko export kar rahe hain
export default App;
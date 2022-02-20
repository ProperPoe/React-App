import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from 'react';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'hey you',
        day: 'March 9th at 2:00pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'hip joint',
        day: 'March 10th at 2:00pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'yung won',
        day: 'March 11th at 2:00pm',
        reminder: true,
    },
    {
        id: 4,
        text: 'baby brub',
        day: 'March 12th at 2:00pm',
        reminder: false,
    }
])

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder : !task.reminder } : task))
}

  return(
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? 
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks To Show'}
    </div>
  )
}

export default App;
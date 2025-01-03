"use client";
import Image from "next/image";
import styles from "@/app/ui/styles/home.module.css";
import { useState } from "react";
import SubTask from "@/app/ui/planners/subtask";
import {
  PlusCircleIcon
} from '@heroicons/react/24/outline';
import { useDebouncedCallback } from 'use-debounce';

export default function Home() {
  //later when hook to backend use an id from there
  
  const [id, setId] = useState(1)
  const [goal, setGoal] = useState("");
  const [subtasks, setSubtasks] = useState([{ id: 0, text: "I want you to edit me!" }]);

  //For later stage add debounce to not trigger update on every key press just when user finishes typing
  // const handleUpdate = useDebouncedCallback((term) => {
    
  //   changeGoal(term)
    
  // }, 300)

  //update the current goal string (useful for later stage)
  function changeGoal(value: string) {
    setGoal(value);
  }
  
  //update a new empty subtask for the user to work on 
  function addTask(){
    setId((prevId) => prevId+1)
    let newTask = {id: id, text: goal }
    let newSubtasks = [...subtasks, newTask]
    setSubtasks(newSubtasks)
    changeGoal("")
  }

  function removeTask(id: number){
    setSubtasks((prevState) => prevState.filter((task) => task.id !== id));
  }

  function updateTask(id: number, text: string){
    setSubtasks((prevState) => 
      prevState.map((task) => 
          task.id === id ? { ...task, text} : task
      )
    )
  }

  let tasks = subtasks.map((task) => {
    return (
      <li key={task.id}>
        <SubTask key={task.id} subTaskNumber={task.id} text={task.text} update={updateTask} remove={removeTask}/>
      </li>
    );
  });
  return (
    <div className={styles.temp_style}>
      <label>Current Goal: {goal}</label>
      <br></br>
      <br></br>
      <div className="flex">
      <textarea
        value={goal}
        onChange={(e) => changeGoal(e.target.value)}
        name="goalPrompt"
        placeholder="I want to make..."
        className="pl-2 placeholder:text-slate-400 resize-none bg-black text-white rounded-md w-48"
      ></textarea>
      <button onClick={addTask} className="ml-4 bg-green-400 p-2 rounded-xl">Add task</button>
      </div>
      <br></br>
      <div className="ml-4 flex"><ol className="list-decimal">{tasks}</ol></div>
      
      {/* TODO: visual grey out the button instead of making it dissapear */}
      {/* <PlusCircleIcon />  TODO figure the pics out*/}
    </div>
  );
}

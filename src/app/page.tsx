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
  const [goal, setGoal] = useState("");
  const [subtasks, setSubtasks] = useState([{ id: 1, text: "" }]);

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
    let newTask = {id: subtasks[subtasks.length -1].id + 1, text: "" }
    let newSubtasks = [...subtasks, newTask]
    setSubtasks(newSubtasks)
  }
  let tasks = subtasks.map((task) => {
    return (
      <li key={task.id}>
        <SubTask key={task.id} subTaskNumber={task.id} text={task.text} />
      </li>
    );
  });
  return (
    <div className={styles.temp_style}>
      <label>Current Goal: {goal}</label>
      <br></br>
      <textarea
        onChange={(e) => changeGoal(e.target.value)}
        name="goalPrompt"
        placeholder="I want to make..."
        className="pl-2 placeholder:text-slate-400 resize-none bg-white text-black rounded-md w-48"
      ></textarea>
      <ol className="list-decimal">{tasks}</ol>
      {/* TODO: visual grey out the button instead of making it dissapear */}
      {subtasks.length < 10 && <button onClick={addTask} className="bg-green-400 p-2 rounded-xl">Add task</button>}
      {/* <PlusCircleIcon />  TODO figure the pics out*/}
    </div>
  );
}

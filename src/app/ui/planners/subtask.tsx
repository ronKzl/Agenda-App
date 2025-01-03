export default function SubTask({
  subTaskNumber,
  text,
  update,
  remove
}: {
  subTaskNumber: number;
  text: string;
  update: Function,
  remove: Function
}) {
  
  return (
    <>
      {/* FOR DEMO ONLY */}
      <p>Subtask id is: {subTaskNumber} </p>
      <div className="flex">
      <textarea
        onChange={(e) => update(subTaskNumber,e.target.value)}
        name="subTaskPrompt"
        placeholder="To achive my goal I need to..."
        className="pl-2 placeholder:text-zinc-400 resize-none bg-zinc-900 text-white rounded-md w-96"
        defaultValue={text}
      ></textarea>
      <button onClick={() => remove(subTaskNumber)} className="ml-4 bg-red-400 p-2 rounded-xl">Delete step</button>
      </div>
    </>
  );
}

export default function SubTask({
  subTaskNumber,
  text,
}: {
  subTaskNumber: number;
  text: string;
}) {
  return (
    <>
      <p>Subtask id is: {subTaskNumber} </p>
      <textarea
        name="subTaskPrompt"
        placeholder="To achive my goal I need to..."
        className="pl-2 placeholder:text-slate-400 resize-none bg-white text-black rounded-md w-96"
      ></textarea>
      <p> {text} </p>
    </>
  );
}

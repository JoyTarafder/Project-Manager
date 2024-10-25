import DoneTask from "./DoneTask";
import OnProgressTask from "./OnProgressTask";
import RevisedTask from "./RevisedTask";
import TaskAction from "./TaskAction";
import TodoTask from "./TodoTask";

export default function TaskBoard() {
  return (
    <>
      <div className="mx-auto max-w-7xl p-6">
        <TaskAction />
        <div className="-mx-2 mb-6 flex flex-wrap">
          <TodoTask />
          <OnProgressTask />
          <DoneTask />
          <RevisedTask />
        </div>
      </div>
    </>
  );
}

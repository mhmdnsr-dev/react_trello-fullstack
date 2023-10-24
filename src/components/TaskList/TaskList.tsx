import { Task } from '../../interfaces/Task';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({ tasks }: { tasks: Task[] }) => {
  return (
    <section className="wrapper">
      <div className="container">
        <div className="row">
          {tasks.map(task => (
            <TaskItem key={task._id} task={task} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TaskList;

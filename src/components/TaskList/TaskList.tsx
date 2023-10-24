import { Task } from '../../interfaces/Task';
import TaskItem from '../TaskItem/TaskItem';
import styled from './TaskList.module.css';

const TaskList = ({ tasks }: { tasks: Task[] }) => {
  return (
    <div>
      {/* // <section classname="wrapper">
    //   <div classname="container">
      //     <div classname="row">
        //       {'{'}tasks.map(task =&gt; (
        //         <taskitem key="{task._id}" task="{task}">
          //       )){'}'}
          //   </taskitem></div>
      // </div>
    // </section> */}
      <section className={styled['gradient-custom-2']}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-xl-10">
              <div
                className={
                  'card ' + styled['mask-custom'] + ' ' + styled['mask-custom']
                }>
                <div className="card-body p-4 text-white">
                  <div className="text-center pt-3 pb-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
                      alt="Check"
                      width={60}
                    />
                    <h2 className="my-4">Task List</h2>
                  </div>
                  <table className="table text-white mb-0">
                    <thead>
                      <tr>
                        <th scope="col">Team Member</th>
                        <th scope="col">From</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Status</th>
                        <th scope="col">Edit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tasks.map(task => (
                        <TaskItem task={task} key={task._id} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaskList;

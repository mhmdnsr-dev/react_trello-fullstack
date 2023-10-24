import { Task } from '../../interfaces/Task';
// import styled from './TaskItem.module.css';
const TaskItem = ({ task }: { task: Task }) => {
  return (
    <tr className="fw-normal">
      <th>
        <span>
          <i
            className="fa-solid fa-circle-user fa-2xl"
            style={{ color: '#f2f4f8' }}
          />
        </span>
        <span className="ms-2">{task.assignTo.name}</span>
      </th>
      <td className="align-middle">
        <span>{task.assignFrom.name}</span>
      </td>
      <td className="align-middle">
        <span>{task.title}</span>
      </td>
      <td className="align-middle">
        <h6 className="mb-0">
          <span className="badge bg-danger">{task.description}</span>
        </h6>
      </td>
      <td className="align-middle">
        <span>{task.status}</span>
        <span className=" ms-2">
          {task.status === 'done' && (
            <i className="fa-solid fa-circle-check fa-lg" />
          )}
          {task.status === 'doing' && <i className="fa-solid fa-gears" />}
          {task.status === 'todo' && (
            <i className="fa-regular fa-circle-check fa-lg" />
          )}
        </span>
      </td>
      <td className="align-middle">
        <a href="#!" data-mdb-toggle="tooltip" title="Remove">
          <i className="fa-solid fa-pen-to-square fa-lg text-warning" />
        </a>
      </td>
    </tr>
  );
};

export default TaskItem;

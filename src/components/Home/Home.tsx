// import { useLoaderData } from 'react-router-dom';
import { ApiResponse } from '../../interfaces/ApiResponse';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import TaskList from '../TaskList/TaskList';
import { Task } from '../../interfaces/Task';
import Alert from '../UI/Alert/Alert';

const DUMMY_TASK: Task[] = [
  {
    _id: 'kdkdk',
    title: 'task 1',
    status: 'To Do',
    deadline: '2023-05-05',
    assignFrom: {
      email: 'dd@dd.com',
      name: ' dd',
    },
    assignTo: {
      email: 'dd@dd.com',
      name: ' ddf',
    },
  },
];

const Home = () => {
  // const loaderData = useLoaderData() as ApiResponse;
  const [tasks, setTasks] = useState(DUMMY_TASK);

  const { data, error } = useQuery({
    queryKey: ['usre-data'],
    queryFn: () =>
      fetch('https://todo-api-dcld.onrender.com/api/user/get-data')
        .then(res => {
          if (res.status === 500) throw Error(res.statusText);
          return res.json();
        })
        .then((data: ApiResponse) => {
          console.log('in then', data);
          if (data.status === 'fail') throw Error(data.body?.message);
          if (data.status === 'error') throw Error(data.message);
          return data;
        }),
    retry: 0,
  });

  console.log('data', data);
  console.log('error', error?.message);

  useEffect(() => {
    console.log(data);
    data && setTasks(data.body!.tasks!);
  }, [data]);

  return (
    <>
      {error && <Alert message={error.message} />}
      {!error && <TaskList tasks={tasks!} />}
    </>
  );
};

export default Home;

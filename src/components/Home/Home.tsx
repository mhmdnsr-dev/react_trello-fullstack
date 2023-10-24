import { useLoaderData } from 'react-router-dom';
import { ApiResponse } from '../../interfaces/ApiResponse';
import { useQuery } from '@tanstack/react-query';
import { useContext, useEffect, useState } from 'react';
import TaskList from '../TaskList/TaskList';
import Alert from '../UI/Alert/Alert';
import { authContext } from '../../context/authContext';

const Home = () => {
  const auth = useContext(authContext);
  const loaderData = useLoaderData() as ApiResponse;
  const [tasks, setTasks] = useState(loaderData.body?.tasks);

  const { data, error } = useQuery({
    queryKey: ['usre-data'],
    queryFn: () =>
      fetch('https://todo-api-dcld.onrender.com/api/user/get-data', {
        credentials: 'include',
      })
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
    console.log('data in useeffect', data);
    auth.setWhoiam({
      isAuthenticated: true,
    });
    data && setTasks(data.body?.tasks);
  }, [data]);

  return (
    <>
      {!error && <TaskList tasks={tasks!} />}
      {error && <Alert message={error.message} />}
    </>
  );
};

export default Home;

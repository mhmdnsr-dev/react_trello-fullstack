import { useLoaderData } from 'react-router-dom';
import { ApiResponse } from '../../interfaces/ApiResponse';
import { useQuery } from '@tanstack/react-query';
import { useContext, useEffect } from 'react';
import TaskList from '../TaskList/TaskList';
import Alert from '../UI/Alert/Alert';
import { authContext } from '../../context/authContext';
import { useDispatch, useSelector } from 'react-redux';
import { setTasks } from '../../redux/tasksSlice';
import { Task } from '../../interfaces/Task';

const Home = () => {
  console.log('render');
  const auth = useContext(authContext);
  const dispatch = useDispatch();
  const loaderData = useLoaderData() as ApiResponse;

  const tasks = useSelector((state: { tasks: Task[] }) => state.tasks);

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

  useEffect(() => {
    auth.setWhoiam({
      isAuthenticated: true,
      user: loaderData.body!.user!,
    });

    dispatch(setTasks(loaderData.body?.tasks));
    if (data) {
      // setTasks(data.body?.tasks);
      dispatch(setTasks(data.body?.tasks));
    }
  }, [data]);

  return (
    <>
      {!error && <TaskList tasks={tasks!} />}
      {error && <Alert message={error.message} />}
    </>
  );
};

export default Home;

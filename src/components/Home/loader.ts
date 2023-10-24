import { redirect } from 'react-router-dom';
import { queryClient } from '../../utils/http';
import { ApiResponse } from '../../interfaces/ApiResponse';

export async function loader() {
  console.log('loder run ');

  const res: ApiResponse = await queryClient.fetchQuery({
    queryKey: ['user-data'],
    queryFn: () =>
      fetch('https://todo-api-dcld.onrender.com/api/user/get-data').then(res =>
        res.json()
      ),
  });

  // if (res.status === 'fail') return redirect('/signin');

  return res;
}
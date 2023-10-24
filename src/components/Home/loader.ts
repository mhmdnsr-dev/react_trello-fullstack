import { redirect } from 'react-router-dom';
import { queryClient } from '../../utils/http';
import { ApiResponse } from '../../interfaces/ApiResponse';

export async function loader() {
  try {
    const res: ApiResponse = await queryClient.fetchQuery({
      queryKey: ['user-data'],
      queryFn: () =>
        fetch('https://todo-api-dcld.onrender.com/api/user/get-data', {
          credentials: 'include',
        }).then(res => res.json()),
      retry: 0,
    });

    if (res.status === 'fail') return redirect('/signin');

    return res;
  } catch (error) {
    return redirect('/signin');
  }
}

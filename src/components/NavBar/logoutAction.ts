import { redirect } from 'react-router-dom';

export async function action() {
  const res = await fetch(
    'https://todo-api-dcld.onrender.com/api/user/logout',
    {
      method: 'DELETE',
      credentials: 'include',
    }
  );

  if (res.ok) {
    localStorage.setItem(
      'whoiam',
      JSON.stringify({
        isAuthenticated: false,
      })
    );
    return redirect('/signin');
  }
}

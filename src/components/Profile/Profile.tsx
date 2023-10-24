import { useContext } from 'react';
import { authContext } from '../../context/authContext';

const Profile = () => {
  const auth = useContext(authContext);

  const { whoiam } = auth;

  console.log(whoiam);
  return <>{whoiam.isAuthenticated && <div>{whoiam.user.name}</div>}</>;
};

export default Profile;

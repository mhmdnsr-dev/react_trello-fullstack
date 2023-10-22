import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

const Layout = () => {
  return (
    <>
      <main className="relative min-vh-100">
        <NavBar />
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default Layout;

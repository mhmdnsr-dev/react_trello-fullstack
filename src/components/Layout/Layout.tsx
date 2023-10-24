import { Outlet } from 'react-router-dom';
import styled from './Layout.module.css';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

const Layout = () => {
  return (
    <>
      <main className={`position-relative min-vh-100 ${styled.layout}`}>
        <NavBar />
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default Layout;

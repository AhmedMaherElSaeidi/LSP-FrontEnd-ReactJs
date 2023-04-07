import {ReactNode} from 'react'
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/NavBar';

interface LayoutProps {
    children : ReactNode;
}

const Layout = ({children}:LayoutProps) => {
  return (
    <>
    <NavBar/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout
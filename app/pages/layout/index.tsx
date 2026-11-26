import { lazy, Suspense } from 'react';
import { Outlet } from "react-router";
import { Wrapper} from "./layout.styled"
import Footer from './footer-section';
import Header from "./header_section";

const Layout = () => {
  
  return (
    <Wrapper>
        <Header />
        <Outlet />
        <Footer />
    </Wrapper>
  );
};

export default  Layout;
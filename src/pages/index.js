import React from 'react'
import { Link } from "gatsby";
import Layout from "../layout/Layout"
import { Nav } from '../components/Nav.js';
import { Header } from '../components/Header';
import AboutPage from './about';



const IndexPage = () => (
  <>
    <Header/> 
    <Layout>
      <AboutPage />
    </Layout>
  </>
  
);
export default IndexPage;





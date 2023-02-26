import React from 'react'
import { Link } from "gatsby";
import  Button  from "../components/Button"
import Layout from "../layout/Layout"



const IndexPage = () => (
    <Layout>
      <Button as={Link} to='/about'>Kliknij</Button>
      <h1>Witamy</h1>
    </Layout>
  
);
export default IndexPage;





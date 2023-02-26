import { Link } from 'gatsby'
import React from 'react'
import Button from '../components/Button'
import Layout from '../layout/Layout'

const AboutPage = () => (
    <Layout>
        <div>about</div>
        <Button as={Link} to='/'>Back</Button>
    </Layout>

);

export default AboutPage;

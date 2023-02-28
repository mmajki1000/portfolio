import { Link } from 'gatsby'
import styled from 'styled-components'
import React from 'react'
import Button from '../components/Button'
import Layout from '../layout/Layout'

const Section = styled.section`
`

const AboutPage = () => (
    <Layout>
        <div>
            <div>about</div>
            <Button as={Link} to='/'>Back</Button>
        </div>
    </Layout>

);

export default AboutPage;

import { Link } from 'gatsby'
import styled from 'styled-components'
import React from 'react'
import Wrapper from '../components/Wrapper'
import Layout from '../layout/Layout'
import H2 from '../components/h/H2'


const Section = styled.section`
`

const AboutPage = () => (
    <Layout>
        <section id='about'>
            <Wrapper> 
                <H2>Helloooooo</H2>
            </Wrapper>
        </section>

    </Layout>

);

export default AboutPage;

import * as React from "react"
import { Link } from "gatsby"
import Layout from "../layout/Layout"
import Button from '../components/Button'



const NotFoundPage = () => {
  return (
    <Layout>
      <main>
        <Button as={Link} to="/"></Button>
      </main>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>

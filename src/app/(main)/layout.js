import Footer from '@/components/footer'
import Header from '@/components/header'
import React from 'react'
import { Container } from 'react-bootstrap'

const Layout = ({children}) => {
  return (
    <>
        <Header/>
        <Container className="flex-grow-1">{children}</Container>
        <Footer/>
    </>
  )
}

export default Layout
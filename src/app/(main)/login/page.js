import LoginForm from '@/components/login-form';
import PageHeader from '@/components/page-header'
import Spacer from '@/components/spacer';
import React from 'react'

export const metadata = {
	title: "Login",
	description: "Our company supports ...",
};

const Page = () => {
  return (
    <>
      <PageHeader title="Login"/>
      <Spacer height={50}/>
      <LoginForm/>
      <Spacer/>
    </>
  )
}

export default Page
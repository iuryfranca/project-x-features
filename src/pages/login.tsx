import Head from 'next/head'

import { Layout } from '@/src/components/layout'
import LoginView from '../views/login-register-view'

const Login = () => {
  return (
    <Layout>
      <Head>
        <title>Project X | Login</title>
      </Head>
      <section className="container mt-20 flex items-center justify-center gap-6 pt-6 pb-8 md:py-10">
        <LoginView page="login" />
      </section>
    </Layout>
  )
}

export default Login

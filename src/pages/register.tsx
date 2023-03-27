import Head from 'next/head'
import { Layout } from '@/components/layout'

import LoginRegisterView from '../views/login-register-view'

const Login = () => {
  return (
    <Layout>
      <Head>
        <title>Project X | Registro</title>
      </Head>
      <section className="container mt-20 flex items-center justify-center gap-6 pt-6 pb-8 md:py-10">
        <LoginRegisterView pageType="register" />
      </section>
    </Layout>
  )
}

export default Login

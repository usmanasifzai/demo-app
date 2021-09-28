import Head from 'next/head'

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Todo App</title>
      <meta name="description" content="A simple application to create users" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="container">
      <main >{children}</main>
    </div>
  </>
)

export default Layout

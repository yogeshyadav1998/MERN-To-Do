import Head from 'next/head';

import Home from './../components/home/home';

export default function index() {
  return (
    <div className="container">
      <Head>
        <title>To-Do App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home/>
    </div>
    )
}

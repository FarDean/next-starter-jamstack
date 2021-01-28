import React from 'react'
import Head from 'next/head'

const Home = () => (
    <>
      <Head>
        <title>FarDean - A JavaScript Programmer!</title>
        <meta name="title" content="FarDean - A JavaScript Programmer!" />
        <meta name="description" content="My name is FarDean and I'm a Computer Science Hobbiest!" />


        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fardean.ir/" />
        <meta property="og:title" content="FarDean - A JavaScript Programmer!" />
        <meta property="og:description" content="My name is FarDean and I'm a Computer Science Hobbiest!" />
        {/* <meta property="og:image" content="https://fardean.ir/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" /> */}


        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://fardean.ir/" />
        <meta property="twitter:title" content="FarDean - A JavaScript Programmer!" />
        <meta property="twitter:description" content="My name is FarDean and I'm a Computer Science Hobbiest!" />
        {/* <meta property="twitter:image" content="https://fardean.ir/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" /> */}

      </Head>
      <div>
      <h1>HI, welcome to my website!</h1>

      <style jsx>{`
      :global(html,body) {
      margin: 0;
      padding: 0;
      height: 100%;
      }

      :global(body) {
      font-size: calc(10px + 1vmin);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      background-color: #282c34;
      color: white;
      }

      a {
      color: pink;
      text-decoration: none;
      }

      .content {
      padding: 0 32px;
      }
      `}</style>
      </div>
    </>
)

export default Home

import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import CategoryMenu from './CategoryMenu';

const Layout = ({ children }) => {

  return (
    <div className="layout">
      <Head>
        <title>
            PRO CRFH
        </title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link href="http://fonts.cdnfonts.com/css/roboto" rel="stylesheet"/>
      </Head>
        <header>
            <Navbar />
        </header>
        <main>
          {children}
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
  );
}

export default Layout;

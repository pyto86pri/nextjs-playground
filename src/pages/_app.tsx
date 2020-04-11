import * as React from 'react';
import NextApp, { AppContext } from 'next/app';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Layout, Content } from 'react-mdl';
import Header from '../containers/Header';
import Footer from '../containers/Footer';

interface Props {
  pageProps: any;
}

/**
 * メイン
 */
class App extends NextApp<Props> {
  /**
   * メイン
   * @return {JSX} メインページ
   */
  render() {
    const { pageProps, Component } = this.props;
    return (
      <Layout fixedHeader>
        <Header />
        <Content>
          <div style={{ width: '95%', margin: 'auto' }}>
            <Component {...pageProps} />
          </div>
        </Content>
        <Footer />
      </Layout>
    );
  }
}

export default App;

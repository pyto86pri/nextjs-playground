import * as React from 'react';
import NextApp, { AppContext } from 'next/app';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {
  Layout,
  Drawer,
  Header,
  Content,
  Navigation,
  Textfield,
} from 'react-mdl';

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
        <Header title="header">
          <Textfield
            value=""
            onChange={() => {}}
            label="Search"
            expandable
            expandableIcon="search"
          />
        </Header>
        <Drawer title="Title">
          <Navigation>
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
          </Navigation>
        </Drawer>
        <Content>
          <div style={{width: '95%', margin: 'auto'}}>
            <Component {...pageProps} />
          </div>
        </Content>
      </Layout>
    );
  }
}

export default App;

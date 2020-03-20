import * as React from 'react';
import NextApp, { AppContext, Container } from 'next/app';

interface Props {
    pageProps: any;
}

class App extends NextApp<Props> {
    render() {
        const { pageProps, Component } = this.props;
        return (
            <Container>
                <Component {...pageProps} />
            </Container>
        )
    }
}

export default App;
import React from "react";
import App, { Container } from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { initStore } from "redux/store";
import { appWithTranslation } from '../i18n';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import {Spin} from 'antd';
// import NextNProgress from '../utils/NextNProgress';
Router.events.on('routeChangeStart', url => {
    console.log(`Loading: ${url}`)
    NProgress.start()
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
class MyApp extends App {
    state = { loading: true };
 
   static async getInitialProps({ Component, ctx }) {
       const pageProps = Component.getInitialProps
           ? await Component.getInitialProps(ctx)
           : {};
            return { pageProps };
   }

   componentDidMount(){
        this.setState({ loading: false });
   }
   render() {
       const { Component, pageProps, store } = this.props;
       return (
           <Container>
               <Spin spinning={this.state.loading}> 
                    <Provider store={store}>
                        <Component {...pageProps} />
                    </Provider>
               </Spin>
           </Container>
       );
   }
}


export default withRedux(initStore)(appWithTranslation(MyApp));
import React,{Component}  from 'react';
import LoginLayout from 'layouts/login';
import  LoginForm  from 'components/login';
import {connect} from 'react-redux';
import {login} from 'actions'
import { Layout } from 'antd';
import Router from 'next/router';
import {auth} from 'utils/auth'
import { i18n, withNamespaces } from '../../i18n'
import ulog from 'ulog'

const { Content } = Layout;
const log = ulog('page/login')

export class Reset extends Component {
    static getInitialProps (ctx) {
        const token = auth(ctx,true); // TODO : add refresh_token/ expired_token logic here
        if(token) {
            ctx.res.writeHead(302, { Location: '/' })
            ctx.res.end()
            return
        } else {
            return {
                namespacesRequired: ['common'],
                query : ctx.query
              }
        }
    }
    constructor(props) {
        super(props);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.isLoggedIn === true){
            Router.push('/');
        }
    }
    handleLoginSubmit = (value) => {
        const {dispatch} = this.props;
        dispatch(login(value));
    };
    render() {
        return <LoginLayout>
                <LoginForm handleLoginSubmit={this.handleLoginSubmit}/>
            </LoginLayout>
        
        
    }
}

function mapStateToProps(state) {
    return {
        isLoggedIn: state.session.isLoggedIn
    };
 }

 export default connect(mapStateToProps)(withNamespaces('common')(Reset)) ;
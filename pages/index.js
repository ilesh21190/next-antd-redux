import React,{Component}  from 'react';
import Main from 'layouts/main'
import { Layout } from 'antd';
import { withAuthSync } from 'utils/auth'
import { i18n, withNamespaces } from '../i18n'

const { Content } = Layout;

class App extends Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    }
  }
  render() {
     return <Main>
            {this.props.t('title')};
            <button
              type='button'
              onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')}
            >
              Change Local
            </button>
        </Main>
      
    
  }
}
export default withAuthSync(withNamespaces('common')(App))
import HeaderComponent from '../components/header';
import SidebarComponent from '../components/sidebar';
// import stylesheet from 'antd/dist/antd.min.css'

import { Layout } from 'antd';
const {Content} = Layout;
function Main ({ children }) {
   return <Layout>
    {/* <style dangerouslySetInnerHTML={{ __html: stylesheet }} /> */}
    <style jsx>{`
      #components-layout-demo-top-side-2 .logo {
        width: 120px;
        height: 31px;
        background: #333;
        border-radius: 6px;
        margin: 16px 28px 16px 0;
        float: left;
      }
    `}</style>
    <HeaderComponent/>
    <Layout style={{marginTop:64}}>
      <SidebarComponent/>
      {/*<Layout style={{ marginLeft: 220,  marginRight:20, marginTop:20, minHeight:'100vh',overflow: 'auto' }}>*/}
        <Content style={{ background: '#fff', padding: 24,marginLeft: 220,  marginRight:20, marginTop:20,marginBottom:20,minHeight:'100vh' }}>
            {children}
        </Content>
      {/*</Layout>*/}
    </Layout>
    </Layout>
}
export default Main;
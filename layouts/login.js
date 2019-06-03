// import stylesheet from 'antd/dist/antd.min.css'

import { Layout } from 'antd';
const {Content} = Layout;
function LoginLayout ({ children }) {
   return <Layout>
    {/*  <style dangerouslySetInnerHTML={{ __html: stylesheet }} />*/}
    <Layout>
      {/*<Layout style={{ marginLeft: 220,  marginRight:20, marginTop:20, minHeight:'100vh',overflow: 'auto' }}>*/}
        <Content style={{ background: '#fff',minHeight:'100vh' }}>
            {children}
        </Content>
      {/*</Layout>*/}
    </Layout>
    </Layout>
}
export default LoginLayout;
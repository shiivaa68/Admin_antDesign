import  React from 'react';
import {Layout} from 'antd'
import {Route,Switch} from 'react-router-dom'
import SideBar from './component/generic/SideBar';
import Header from './component/generic/Header'
import Footer from './component/generic/Footer'
import NotFound from './component/generic/NotFound';
import Dashboard from './component/generic/Dashboard'
import 'antd/dist/antd.css'
import './assets/css/general.css'
import RouterPerson from './component/person/Router'
const { Header:AntHeader, Footer:AntFooter, Sider, Content } = Layout;



function App() {
  return (
    <Layout>
    <AntHeader>
    <Header/>
    </AntHeader>

    <Layout>
      <Sider><SideBar/></Sider>
      <Content style={{padding:'50px'}}>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/person" component={RouterPerson}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </Content>

    </Layout>
    <AntFooter><Footer/></AntFooter>
  </Layout>
  );
}

export default App;

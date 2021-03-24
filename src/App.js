import  React from 'react';
import {Layout} from 'antd'
import {Route,Switch} from 'react-router-dom'
import SideBar from './component/generic/SideBar';
import Header from './component/generic/Header'
import Footer from './component/generic/Footer'
import NotFound from './component/generic/NotFound';
import Dashboard from './component/generic/Dashboard'
import Login from './component/generic/Login'
import 'antd/dist/antd.css'
import './assets/css/general.css'
import RouterPerson from './component/person/Router'
import postRouter from './component/post/Router'
import {useSelector} from 'react-redux'



const { Header:AntHeader, Footer:AntFooter, Sider, Content } = Layout;



function App() {

const loading = useSelector(state => state.userIsLoading)
const isLoggedIn =useSelector(state => state.isLoggedIn)

// if(loading){
//   return 'loading....'
// }

if(!isLoggedIn){
  return <Login/>
}

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
          <Route path="/post" component={postRouter}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </Content>

    </Layout>
    <AntFooter><Footer/></AntFooter>
  </Layout>
  );
}

export default App;

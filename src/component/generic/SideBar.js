import React from 'react';
import {Link} from 'react-router-dom';
import {Menu} from 'antd'
import { AppstoreOutlined, HomeOutlined } from '@ant-design/icons';



const { SubMenu } = Menu;

const SideBar = ( ) => {

     const handleClick = e => {
          console.log('click',e);
      }


    return(
        <>
 <Menu
                onClick={handleClick}
                defaultSelectedKeys={['/']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <Menu.Item key='/'>
                    <HomeOutlined/>
                    <Link to='/'>
                        داشبورد
                    </Link>
                </Menu.Item>
                <SubMenu
                    key="sub1"
                    title={
                        <span>
              <AppstoreOutlined />
              <span>مدیریت موجودیت‌ها</span>
            </span>
                    }
                >
                    <Menu.ItemGroup key="g1" title="کاربران">
                        <Menu.Item key="1">
                            <Link to="/person">
                                لیست کاربران
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/person/new">
                                افزودن کاربر
                            </Link>
                        </Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="posts" title="مقالات">
                        <Menu.Item key="posts-1">
                            <Link to="/post">
                                لیست مقالات
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="posts-2">
                            <Link to="/post/new">
                                افزودن مقاله
                            </Link>
                        </Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
            </Menu>

        </>
    )
}

export default SideBar;


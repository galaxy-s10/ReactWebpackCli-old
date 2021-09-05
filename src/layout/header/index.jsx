import React, { memo } from 'react';
import { Breadcrumb, Menu, Dropdown } from 'antd';
import { MenuFoldOutlined, DownOutlined } from '@ant-design/icons';
import { HeaderWraper } from './style';

const Header = function (props) {
  const { history } = props;
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item disabled>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com">
          2nd menu item (disabled)
        </a>
      </Menu.Item>
      <Menu.Item danger>a danger item</Menu.Item>
    </Menu>
  );
  return (
    <HeaderWraper>
      <div>
        <div className="icon">
          <MenuFoldOutlined />
        </div>
        {/* <div className="icon"></div> */}
        <Breadcrumb className="new-breadcrumb">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application Center</a>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="user-info">
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            Hover me
            <DownOutlined />
          </a>
        </Dropdown>
        <img
          className="user-avatar"
          src="http://thirdqq.qlogo.cn/g?b=oidb&k=oYtOZYZxRicDmv3WsaGKXFQ&s=640&t=1618498456"
          alt=""
        />
      </div>
    </HeaderWraper>
  );
};
export default memo(Header);

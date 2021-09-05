import React, { memo } from 'react';
import Header from './header';
import SideBar from './sidebar';
import Content from './content';
import Footer from './footer';
import { LayoutWraper } from './style';

const Layout = function (props) {
  return (
    <LayoutWraper>
      <SideBar></SideBar>
      <div className="layout-right">
        <Header></Header>
        <Content></Content>
      </div>
    </LayoutWraper>
  );
};
export default memo(Layout);

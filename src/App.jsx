import React, { memo, useEffect, useState } from 'react';
import { renderRoutes } from 'react-router-config';
import { withRouter } from 'react-router-dom';
// import { Button } from 'antd';
import { Modal, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';
import { Provider } from 'react-redux';
import routes from './router';
import store from './store';
// import Login from './pages/login';
import Layout from './layout/index';
import 'antd-mobile/dist/antd-mobile.css'; // 引入antd-mobile全局样式

const App = function (props) {
  const { history } = props;
  const [hobby, setHobby] = useState([1, 2, 3]);
  useEffect(() => {
    // Modal.alert('Delete', 'Are you sure???', [
    //   { text: 'Cancel', onPress: () => console.log('cancel') },
    //   { text: 'Ok', onPress: () => console.log('ok') },
    // ]);
  });
  return (
    <Provider store={store}>
      {/* App组件外层已经在BrowserRouter里面了，这里就不能加BrowserRouter了，
      否则会导致浏览器url变了，但是页面没有跳转刷新 */}
      {/* <BrowserRouter> */}
      {/* {renderRoutes(routes)} */}
      <Layout></Layout>
      {/* </BrowserRouter> */}
    </Provider>
  );
};
export default memo(withRouter(App));

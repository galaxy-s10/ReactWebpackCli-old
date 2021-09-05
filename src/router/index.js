import React from 'react';
import { Redirect } from 'react-router-dom';

import Login from '../pages/login';
import Dashboard from '../pages/dashboard';
import Home from '../pages/home';
import Setting from '../pages/setting';
import Frontend from '../pages/setting/frontend';
import Backend from '../pages/setting/backend';
import Theme from '../pages/setting/theme';

const routes = [
  {
    path: '/',
    exact: true, // 精准匹配，否则/login会匹配/login也会匹配/
    component: Home,
    meta: { title: '主页' },
    render() {
      return <Redirect to="/dashboard"></Redirect>;
    },
  },
  {
    path: '/setting',
    meta: { title: '设置' },
    // exact: true,
    component: Setting,
    // render() {
    //   <Redirect to="/setting/frontend"></Redirect>;
    // },
    routes: [
      {
        path: '/setting/frontend',
        component: Frontend,
        meta: { title: '前台设置' },
      },
      {
        path: '/setting/backend',
        component: Backend,
        meta: { title: '后台设置' },
      },
      { path: '/setting/theme', component: Theme, meta: { title: '主题设置' } },
    ],
  },
  {
    path: '/login',
    component: Login,
    meta: { title: '登录' },

    // render: () => <Login></Login>,
  },
  {
    path: '/dashboard',
    component: Dashboard,
    meta: { title: '控制台' },
  },
];

export default routes;

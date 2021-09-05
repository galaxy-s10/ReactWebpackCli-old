import React, { memo } from 'react';
import { withRouter } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import { SideBarWraper } from './style';

import routes from '../../router/index';

console.log(routes);

const SideBar = function (props) {
  const { history } = props;
  function goPage(e, v) {
    e.stopPropagation();
    console.log(v);
    history.push(v.path, '======');
    console.log(props);
  }
  const SideItem = function (tree) {
    console.log(tree, 1111);
    if (!tree) return undefined;
    return tree.map((route, index) => {
      console.log(route, 88);
      return (
        <div
          className="side-bar-item"
          key={index}
          onClick={(e) => goPage(e, route)}>
          <span className="a-link">
            {route.meta && route.meta.title}{' '}
            {route.routes && (
              <span>
                <DownOutlined />
              </span>
            )}
          </span>
          {route.routes && route.routes.length && (
            <ul>{SideItem(route.routes)}</ul>
          )}
        </div>
      );
    });
  };
  return (
    <SideBarWraper>
      <div className="side-bar-title">React-antd-admin</div>
      {SideItem(routes)}
      {/* {routes.map((route, index) => (
        <div
          className="side-bar-item"
          key={index}
          onClick={(e) => goPage(e, route)}>
          <span className="a-link">{route.meta.title}</span>
        </div>
      ))} */}
    </SideBarWraper>
  );
};
export default memo(withRouter(SideBar));

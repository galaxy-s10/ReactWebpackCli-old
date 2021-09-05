import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter, withRouter } from 'react-router-dom';
import routes from './router';

import Login from './pages/login';

console.log(routes, 99);
const App = function (props) {
  console.log(props);
  const { history } = props;
  return (
    <BrowserRouter>
      {renderRoutes(routes)}
      <Login></Login>
    </BrowserRouter>
  );
};
export default memo(withRouter(App));

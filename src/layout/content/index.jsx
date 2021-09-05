import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import routes from '../../router';

const Content = function (props) {
  const { history } = props;

  return <div>{renderRoutes(routes)}</div>;
};
export default memo(Content);

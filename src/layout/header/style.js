import styled from 'styled-components';

export const HeaderWraper = styled.div`
  height: 60px;
  /* flex: 1; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  .icon {
    display: inline-block;
    /* width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: red;
    vertical-align: top; */
    margin: 0 20px;
  }
  .new-breadcrumb {
    display: inline-block;
  }
  .user-info {
    .user-avatar {
      width: 40px;
      height: 40px;
      border-radius: 4px;
      margin-left: 10px;
    }
  }
`;

import styled from 'styled-components';

export const SideBarWraper = styled.div`
  height: 100vh;
  width: 200px;
  background-color: #535a6c;
  .side-bar-title {
    text-align: center;
    font-size: 24px;
    color: white;
    height: 60px;
    line-height: 60px;
  }
  .side-bar-item {
    text-align: center;
    color: #cccdd3;
    min-height: 50px;
    line-height: 50px;
    .a-link {
      cursor: pointer;
    }
  }
`;

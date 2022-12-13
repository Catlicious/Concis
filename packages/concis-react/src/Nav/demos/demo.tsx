import styled from 'styled-components';

const NavDemoStyle = styled.div`
  .menu1,
  .menu2 {
    .title {
      font-size: 20px;
      font-weight: 500;
    }

    .menu-list {
      display: flex;
      flex-wrap: wrap;
      width: 800px;

      .menu1-item {
        width: 200px;
        margin: 15px 30px;
      }
    }
  }

  .menu2 {
    .menu-list {
      width: 300px;

      .menu2-item {
        width: 250px;
        margin: 15px 30px;
      }
    }
  }

  .left-bar {
    b {
      margin-right: 20px;
      font-size: 30px;
    }
  }
`;

export { NavDemoStyle };

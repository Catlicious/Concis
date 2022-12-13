import styled from 'styled-components';

const ListDemoStyle = styled.div`
  .list {
    display: flex;
    align-items: center;

    .text {
      display: flex;
      flex-direction: column;
      margin-left: 20px;

      .content {
        margin-top: 7px;
        color: #4e5969;
      }
    }
  }

  .size-change-bar {
    padding: 0 12px;
    font-size: 14px;
    cursor: pointer;
  }

  .active-size-bar {
    padding: 0 12px;
    color: #325dff;
    font-size: 14px;
    cursor: pointer;
  }
`;

export { ListDemoStyle };

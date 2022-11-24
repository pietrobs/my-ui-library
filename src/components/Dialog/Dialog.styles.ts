import styled from 'styled-components';

export const DialogWrapper = styled.div`
  .dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    z-index: 102;

    .dialog {
      display: flex;
      flex-direction: column;
      background-color: #fff;
      padding: 32px;
      width: 100%;
      max-height: 80%;

      .dialog-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

        h1 {
          font-weight: 500;
          font-size: 22px;
          line-height: 30px;
          letter-spacing: -0.032em;
        }

        button {
          background-color: transparent;
          border: none;
          cursor: pointer;
          outline: none;
        }
      }

      .dialog-content {
        overflow-y: auto;
        height: auto;

        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.028em;

        ::-webkit-scrollbar {
          display: none;
        }
      }
    }
  }
`;

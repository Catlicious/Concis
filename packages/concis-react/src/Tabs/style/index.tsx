import styled, { css } from 'styled-components';
import { commonStyle } from '../../styles/common';

const { concisPrimaryColor, concisDarkPrimaryColor } = commonStyle;

const darkTabsStyle = css`
  .concis-dark-tabs {
    &-header {
      &-line {
        border-bottom: 1px solid #484849;

        .header-option-active {
          border-bottom: 1px solid ${concisDarkPrimaryColor};
          color: ${concisDarkPrimaryColor};
        }
      }

      &-text {
        .header-option {
          position: relative;

          &:not(:last-of-type)::after {
            content: '';
            position: absolute;
            right: -16px;
            top: 50%;
            transform: translateY(-50%);
            height: 12px;
            width: 2px;
            background-color: #3e3e3f;
          }
        }
      }

      &-round {
        .header-option {
          border-radius: 32px;

          &:not(.header-option-disabled):hover {
            background-color: #343436;
          }
        }

        .header-option-active {
          background-color: #343436;
        }
      }

      &-card {
        .header-option {
          padding: 8px 16px;
          margin: 0;
          border: 1px solid #484849;

          &:not(:last-of-type) {
            border-right: none;
          }

          &:not(.header-option-disabled):hover {
            background-color: #343436;
          }
        }

        .header-option-active {
          background-color: #343436;
        }
      }

      &-line,
      &-text,
      &-round,
      &-card {
        .header-option-disabled {
          color: #ffffff4d;
          cursor: not-allowed;
        }
      }
    }

    &-bottom-header {
      &-line {
        border-top: 1px solid #484849;

        .header-option-active {
          border-top: 1px solid ${concisDarkPrimaryColor};
          color: ${concisDarkPrimaryColor};
        }
      }

      &-text {
        .header-option {
          position: relative;

          &:not(:last-of-type)::after {
            content: '';
            position: absolute;
            right: -16px;
            top: 50%;
            transform: translateY(-50%);
            height: 12px;
            width: 2px;
            background-color: #3e3e3f;
          }
        }
      }

      &-round {
        .header-option {
          border-radius: 32px;

          &:not(.header-option-disabled):hover {
            background-color: #343436;
          }
        }

        .header-option-active {
          background-color: #343436;
        }
      }

      &-card {
        .header-option {
          padding: 8px 16px;
          margin: 0;
          border: 1px solid #484849;

          &:not(:last-of-type) {
            border-right: none;
          }

          &:not(.header-option-disabled):hover {
            background-color: #343436;
          }
        }

        .header-option-active {
          background-color: #343436;
        }
      }

      &-line,
      &-text,
      &-round,
      &-card {
        .header-option-disabled {
          color: #ffffff4d;
          cursor: not-allowed;
        }
      }
    }

    &-header-position-vertical {
      &-line {
        border-right: 1px solid #484849;

        .header-option {
          border-right: 2px solid transparent;
        }

        .header-option-active {
          border-right: 2px solid ${concisPrimaryColor};
        }
      }

      &-text {
        .header-option {
          position: relative;

          &:not(:last-of-type)::after {
            content: '';
            position: absolute;
            left: 50%;
            top: 100%;
            transform: translateX(-50% - 16px);
            height: 2px;
            width: 24px;
            background-color: #3e3e3f;
          }
        }
      }

      &-round {
        .header-option {
          border-radius: 32px;

          &:not(.header-option-disabled):hover {
            background-color: #343436;
          }
        }

        .header-option-active {
          background-color: #343436;
        }
      }

      &-card {
        .header-option {
          padding: 8px;
          margin: 0;
          border: 1px solid #484849;

          &:not(:last-of-type) {
            border-bottom: none;
          }

          &:not(.header-option-disabled):hover {
            background-color: #343436;
          }
        }

        .header-option-active {
          background-color: #343436;
        }
      }

      &-line,
      &-text,
      &-round,
      &-card {
        .header-option-disabled {
          color: #ffffff4d;
          cursor: not-allowed;
        }
      }
    }
  }
`;

const TabsStyle = styled.div<{ alignway }>`
  .concis-tabs {
    display: ${({ alignway }) => alignway};

    &-header {
      &-line,
      &-text,
      &-round,
      &-card {
        font-size: 14px;

        .header-option {
          white-space: nowrap;
          transition: 0.1s linear;
          cursor: pointer;
        }

        .header-option-active {
          color: ${concisPrimaryColor};
          transition: 0.1s linear;
        }

        .header-option-disabled {
          color: #c9cdd4;
          cursor: not-allowed;
        }

        .header {
          display: flex;
          justify-content: space-between;

          &-list {
            overflow-x: auto;
            padding: 14px 0;

            &::-webkit-scrollbar {
              display: none;
            }
          }
        }

        .plus-icon {
          margin-left: 20px;
          cursor: pointer;
        }
      }

      &-line {
        border-bottom: 1px solid #e5e6eb;

        .header-option {
          border-bottom: 1px solid transparent;
        }

        .header-option-active {
          border-bottom: 1px solid ${concisPrimaryColor};
        }
      }

      &-round {
        .header-option {
          border-radius: 32px;
          padding: 8px 16px !important;
          margin: 0 !important;

          &:not(.header-option-disabled):hover {
            background-color: #e5e5eb;
          }
        }

        .header-option-active {
          background-color: #e5e5eb;
        }
      }

      &-card {
        .header-option {
          padding: 8px 16px !important;
          margin: 0 !important;
          border: 1px solid #e5e6eb;

          &:not(:last-of-type) > .header-option {
            border-right: none;
          }

          &:not(.header-option-disabled):hover {
            background-color: #e5e5eb;
          }

          .close-icon {
            margin-left: 10px;
            cursor: pointer;
          }
        }

        .header-option-active {
          background-color: #e5e5eb;
        }
      }

      &-mini {
        padding: 4px 0;

        .header-option {
          padding: 4px 0;
          margin: 0 16px;
          font-size: 12px;
        }
      }

      &-small {
        padding: 6px 0;

        .header-option {
          padding: 6px 0;
          margin: 0 16px;
        }
      }

      &-default {
        padding: 8px 0;

        .header-option {
          padding: 8px 0;
          margin: 0 16px;
        }
      }

      &-large {
        padding: 12px 0;

        .header-option {
          padding: 12px 0;
          margin: 0 16px;
        }
      }
    }

    &-bottom-header {
      &-line,
      &-text,
      &-round,
      &-card {
        font-size: 14px;

        .header-option {
          white-space: nowrap;
          transition: 0.1s linear;
          cursor: pointer;
        }

        .header-option-active {
          color: ${concisPrimaryColor};
          transition: 0.1s linear;
        }

        .header-option-disabled {
          color: #c9cdd4;
          cursor: not-allowed;
        }

        .header {
          display: flex;
          justify-content: space-between;

          &-list {
            overflow-x: auto;
            padding: 14px 0;

            &::-webkit-scrollbar {
              display: none;
            }
          }
        }
      }

      &-line {
        border-top: 1px solid #e5e6eb;

        .header-option {
          border-top: 1px solid transparent;
        }

        .header-option-active {
          border-top: 1px solid ${concisPrimaryColor};
        }
      }

      &-round {
        .header-option {
          border-radius: 32px;
          padding: 8px 16px !important;
          margin: 0 !important;

          &:not(.header-option-disabled):hover {
            background-color: #e5e5eb;
          }
        }

        .header-option-active {
          background-color: #e5e5eb;
        }
      }

      &-card {
        .header-option {
          padding: 8px 16px;
          margin: 0;
          border: 1px solid #e5e6eb;

          &:not(:last-of-type) {
            border-right: none;
          }

          &:not(.header-option-disabled):hover {
            background-color: #e5e5eb;
          }
        }

        .header-option-active {
          background-color: #e5e5eb;
        }
      }

      &-mini {
        padding: 4px 0;

        .header-option {
          padding: 4px 0;
          margin: 0 16px;
          font-size: 12px;
        }
      }

      &-small {
        padding: 6px 0;

        .header-option {
          padding: 6px 0;
          margin: 0 16px;
        }
      }

      &-default {
        padding: 8px 0;

        .header-option {
          padding: 8px 0;
          margin: 0 16px;
        }
      }

      &-large {
        padding: 12px 0;

        .header-option {
          padding: 12px 0;
          margin: 0 16px;
        }
      }
    }

    &-header-position-vertical {
      &-line {
        border-right: 1px solid #e5e6eb;

        .header-option {
          border-right: 2px solid transparent;
        }

        .header-option-active {
          border-right: 2px solid ${concisPrimaryColor};
        }
      }

      &-round {
        .header-option {
          border-radius: 32px;
          padding: 8px 16px;
          margin: 0;

          &:not(.header-option-disabled):hover {
            background-color: #e5e5eb;
          }
        }

        .header-option-active {
          background-color: #e5e5eb;
        }
      }

      &-card {
        .header-option {
          padding: 8px 16px;
          margin: 0;
          border: 1px solid #e5e6eb;
          display: flex;
          align-items: center;

          &:not(:last-of-type) {
            border-bottom: none;
          }

          &:not(.header-option-disabled):hover {
            background-color: #e5e5eb;
          }

          .close-icon {
            margin-left: 10px;
            cursor: pointer;
          }
        }

        .header-option-active {
          background-color: #e5e5eb;
        }
      }

      &-mini {
        padding: 4px 0;

        .header-option {
          padding: 4px 0;
          margin: 0 0 0 16px !important;
          font-size: 12px;
        }
      }

      &-small {
        padding: 6px 0;

        .header-option {
          padding: 6px 0;
          margin: 0 0 0 16px;
        }
      }

      &-default {
        padding: 8px 0;

        .header-option {
          padding: 8px 16px !important;
          margin: 0 !important;
        }
      }

      &-large {
        padding: 12px 0;

        .header-option {
          padding: 12px 0;
          margin: 0 0 0 16px;
        }
      }

      &-line,
      &-text,
      &-round,
      &-card {
        padding: 8px 0;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        min-width: 90px;
        height: 200px;
        overflow-y: auto;

        &::-webkit-scrollbar {
          display: none;
        }

        .header-option {
          // padding: 10px 16px;
          transition: 0.1s linear;
          cursor: pointer;
        }

        .header-option-active {
          color: ${concisPrimaryColor};
          transition: 0.1s linear;
        }

        .header-option-disabled {
          color: #c9cdd4;
          cursor: not-allowed;
        }

        .plus-icon {
          margin-top: 20px;
          cursor: pointer;
        }
      }
    }

    &-content {
      width: 100%;
    }
  }

  ${darkTabsStyle}
`;

export { TabsStyle };

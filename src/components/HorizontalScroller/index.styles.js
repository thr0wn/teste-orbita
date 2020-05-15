import styled, { css } from "styled-components";

export const HorizontalScroller = styled.div`
  overflow: auto;
  display: flex;
  flex: 1 0 auto;
  padding-top: 46px;

  & > * {
    margin-left: 24px;
  }
`;

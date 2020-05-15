import styled, { css } from "styled-components";

export const Tag = styled.div`
  ${({ theme, backgroundColor }) => css`
    font-family: ${theme.fontFamilies.regular};
    font-size: ${theme.fontSizes.xsmall};
    line-height: ${theme.lineHeights.xsmall};
    background-color: ${theme.colors[backgroundColor] || theme.colors.green};
    color: ${theme.colors.white};
    padding: 4px;
    border-radius: 4px;
    display: inline-flex;
    align-items: center;
  `}
`;

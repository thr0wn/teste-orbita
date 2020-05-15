import styled, { css } from "styled-components";

export const Text = styled.span`
  ${({ theme, fontFamily, fontSize, lineHeight, color }) => css`
    font-family: ${theme.fontFamilies[fontFamily] ||
    theme.fontFamilies.regular};
    font-size: ${theme.fontSizes[fontSize] || theme.fontSizes.xsmall};
    line-height: ${theme.lineHeights[lineHeight || fontSize] ||
    theme.lineHeights.small};
    color: ${theme.colors[color] || theme.colors.black};
    margin: 0;
    display: block;

    & > & {
      display: inline-block;
    }
  `}
`;

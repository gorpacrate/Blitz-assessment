import { styled } from "goober";

export const Gap = styled<{
  width?: number;
  height?: number;
  inline?: boolean;
}>("div")`
  ${({ width }) => (width ? `width: ${width}px;` : "")}
  ${({ height }) => (height ? `height: ${height}px;` : "")}
  ${({ inline }) => (inline ? `display: inline-block;` : "")}
`;

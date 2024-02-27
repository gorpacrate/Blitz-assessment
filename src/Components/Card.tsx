import { styled } from "goober";

export const CardGroup = styled("div")`
  background-color: var(--color-black);
  display: inline-flex;
  flex-direction: column;
  gap: 60px;
  padding: 22px 17px 14px;
`;

export const Card = styled("div")`
  background-color: var(--color-gray);
  width: 302px;
  padding: 18px;
  border-radius: 8px;
  border: 1px solid var(--color-cardBorderTopBottom);
  border-left-color: var(--color-cardBorderLeft);
  border-right-color: var(--color-cardBorderRight);
  box-shadow: 0 0 2px var(--color-cardBorderTopBottom);
`;

export const CardHeader = styled("div")`
  display: flex;
  justify-content: space-between;
`;

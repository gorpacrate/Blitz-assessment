import { styled } from "goober";

export const PercentageText = styled<{ yellow?: boolean }>("span")`
  color: ${({ yellow }) =>
    yellow ? `var(--color-lightYellow)` : `var(--color-lightGreen)`};
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 0.1px;
  text-shadow: 0 0 1px var(--color-lightGreen);
`;

export const WeaponText = styled("span")`
  color: var(--color-textDark);
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
`;

export const TitleText = styled("div")`
  color: var(--color-textDark);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: -0.3px;
`;

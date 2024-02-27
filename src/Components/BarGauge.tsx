import { styled } from "goober";
import { mapRange } from "../utils/mapRange";
import useThrottledValue from "../utils/useThrottledValue";

const totalBars = 14;
const bars = new Array(totalBars).fill(undefined);

const Bar = styled("div")`
  display: flex;
  height: 29px;
  gap: 2px;
`;

const BarItem = styled<{ active?: boolean }>("div")`
  flex-basis: 100%;
  &:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  &:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  background-color: ${({ active }) =>
    active ? `var(--color-lightGreen)` : `var(--color-gaugeBarBg)`};
  box-shadow: ${({ active }) =>
    active ? `none` : `inset 0 0 1px .3px var(--color-barGrayVal)`};

  will-change: background-color, box-hadow;
  transition: background-color linear var(--transitionLength);
`;

export const BarGauge: React.FC<{
  percentage: number;
}> = ({ percentage }) => {
  const active = useThrottledValue({
    value: mapRange(percentage, 0, 75, 0, totalBars),
    throttleMs: 50,
  });

  return (
    <Bar>
      {bars.map((_, index) => (
        <BarItem key={index} active={index + 1 <= active} />
      ))}
    </Bar>
  );
};

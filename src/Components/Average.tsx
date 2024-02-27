import { styled } from "goober";
import { PercentageText } from "./Text";
import { useSnapshot } from "valtio";
import { headshotState } from "../state/headshot";
import useThrottledValue from "../utils/useThrottledValue";

const history = [20, 5, 15, 6, 30, 15, 13, 9, 11, 8, 10, 7, 20, 11];

const AverageDelta = styled("div")`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: -0.07px;
  margin-top: 11px;
  margin-bottom: 5px;
  color: var(--color-textDark);
  text-align: center;
  span {
    font-size: inherit;
    font-weight: inherit;
  }
`;

const Graph = styled<{ average: number }>("div")`
  margin: 0 3px;
  display: flex;
  align-items: flex-end;
  position: relative;
  gap: 5px;
  height: 69px;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    bottom: ${({ average }) => `${average}%`};
    border-bottom: 1px dashed var(--color-barMedian);
    will-change: bottom;
    transition: bottom linear var(--transitionLength);
  }
`;

const Bar = styled<{ value: number; last?: boolean; lower?: boolean }>("div")`
  flex-basis: 100%;
  background-color: ${({ last, lower }) =>
    last
      ? lower
        ? `var(--color-barYellow)`
        : `var(--color-barGreen)`
      : `var(--color-barGray)`};
  border-top-width: 2px;
  border-top-style: solid;
  border-top-color: ${({ last, lower }) =>
    last
      ? lower
        ? `var(--color-barYellowVal)`
        : `var(--color-barGreenVal)`
      : `var(--color-barGrayVal)`};
  height: ${({ value }) => `${value}%`};
  will-change: height, background-color, border-top-color;
  transition: all linear var(--transitionLength);
`;

const getParams = (headshotRate: number, history: number[]) => {
  const average =
    [...history, headshotRate].reduce((res, item) => res + item, 0) /
    (history.length + 1);
  const coefficient = 100 / Math.max(...history, headshotRate);
  return {
    headshotRate,
    average,
    coefficient,
  };
};

export const Average = () => {
  const snap = useSnapshot(headshotState);

  const { headshotRate, coefficient, average } = useThrottledValue({
    value: getParams(snap.headshotRate, history),
    throttleMs: 100,
  });

  const averageDelta = headshotRate - average;

  return (
    <div>
      <AverageDelta>
        <PercentageText yellow={averageDelta < 0}>
          {Math.abs(Math.floor(averageDelta))}%
        </PercentageText>{" "}
        {averageDelta > 0 ? "higher" : "lower"} than your last{" "}
        {history.length + 1} average
      </AverageDelta>
      <Graph average={average * coefficient}>
        {history.map((item, index) => (
          <Bar key={index} value={item * coefficient} />
        ))}
        <Bar last lower={averageDelta < 0} value={headshotRate * coefficient} />
      </Graph>
    </div>
  );
};

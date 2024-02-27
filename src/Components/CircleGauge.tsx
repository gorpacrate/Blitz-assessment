import { styled } from "goober";
import { PercentageText } from "./Text";
import { useSnapshot } from "valtio";
import { headshotState } from "../state/headshot";
import useThrottledValue from "../utils/useThrottledValue";

const radius = 58;

const Wrapper = styled("div")`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${radius * 2}px;
  height: ${radius * 1.6}px;
`;

const LargePercentageText = styled(PercentageText)`
  font-size: 29px;
  margin-top: 17px;
  font-weight: 600;
  letter-spacing: 0.3px;
`;

export const CircleGauge = () => {
  const { headshotRate } = useSnapshot(headshotState);
  const percentage = useThrottledValue({ value: headshotRate, throttleMs: 50 });
  return (
    <Wrapper>
      <Gauge percentage={percentage} />
      <LargePercentageText>{Math.floor(headshotRate)}%</LargePercentageText>
    </Wrapper>
  );
};

const Gauge: React.FC<{ percentage: number }> = ({ percentage }) => {
  const strokeWidth = 6.5;
  const innerRadius = radius - strokeWidth;
  const circumference = innerRadius * 2 * Math.PI;
  const arc = (circumference * 2) / 3;
  const dashArray = `${arc} ${circumference}`;
  const transform = `rotate(150, ${radius}, ${radius})`;
  const offset = arc - (percentage / 100) * arc;

  return (
    <svg
      height={radius * 1.6}
      width={radius * 2}
      style={{ display: "block", position: "absolute" }}
    >
      <circle
        cx={radius}
        cy={radius}
        fill="transparent"
        r={innerRadius}
        style={{
          stroke: "var(--color-gaugeCircleBg)",
        }}
        strokeDasharray={dashArray}
        strokeWidth={strokeWidth}
        transform={transform}
      />
      <circle
        className="percent"
        cx={radius}
        cy={radius}
        fill="transparent"
        r={innerRadius}
        strokeDasharray={dashArray}
        strokeWidth={strokeWidth}
        style={{
          strokeDashoffset: offset,
          transition: "stroke-dashoffset linear var(--transitionLength)",
          stroke: "var(--color-gaugeCircleVal)",
          willChange: "stroke-dashoffset",
        }}
        transform={transform}
      />
    </svg>
  );
};

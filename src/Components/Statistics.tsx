import { styled } from "goober";

const Bar = styled("div")`
  width: 100%;
  height: 7px;
  position: relative;
`;

const BarMark = styled<{ mark: number }>("div")`
  position: absolute;
  z-index: 1;
  height: 11px;
  margin-top: -2px;
  margin-left: -1px;
  left: ${({ mark }) => `${mark}%`};
  border-left: 2px solid var(--color-statisticsOrange);
`;

const BarLine = styled("div")`
  position: absolute;
  border-radius: 2px;
  overflow: hidden;
  height: 100%;
  width: 100%;
  background: var(--color-statisticsGray);
`;

const BarValue = styled<{ val: number }>("div")`
  position: absolute;
  background-color: var(--color-barGreen);
  left: 0%;
  height: 100%;
  width: ${({ val }) => `${val}%`};
  max-width: 100%;
  border-radius: 2px 0 0 2px;

  &::after {
    content: "";
    display: block;
    position: absolute;
    height: 7px;
    left: calc(100% - 1px);
    z-index: 2;
    border-right: 2px solid var(--color-statisticsGreen);
  }
`;

const Wrapper = styled("div")`
  margin: 0 3px 10px;
  &:last-of-type {
    margin-bottom: 7px;
  }
`;
const TextsWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-bottom: 7px;
`;
const Label = styled("div")`
  font-size: 11px;
  font-weight: 500;
  color: var(--color-statisticsLabel);
`;
const Value = styled("div")`
  font-size: 11px;
  font-weight: 500;
  color: var(--color-statisticsValue);
`;

export const Statistics: React.FC<{
  total: number;
  mark: number;
  value: number;
}> = ({ total, mark, value }) => {
  return (
    <Wrapper>
      <TextsWrapper>
        <Label>Statistics</Label>
        <Value>{value}</Value>
      </TextsWrapper>
      <Bar>
        <BarLine>
          <BarValue val={(value / total) * 100} />
        </BarLine>
        <BarMark mark={(mark / total) * 100} />
      </Bar>
    </Wrapper>
  );
};

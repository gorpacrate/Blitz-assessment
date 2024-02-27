import { Card } from "../Components/Card";
import { CircleGauge } from "../Components/CircleGauge";

import { Centered } from "../Components/Centered";
import { TitleText } from "../Components/Text";
import { styled } from "goober";
import { Gap } from "../Components/Gap";
import { Average } from "../Components/Average";
import { Statistics } from "../Components/Statistics";

const LargerTitleText = styled(TitleText)`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-textLight);
  letter-spacing: 0.3px;
`;

const CardFixTop = styled(Card)`
  margin-top: -2px;
`;

export const HeadshotStats = () => {
  return (
    <CardFixTop>
      <Centered>
        <Gap height={11} />
        <CircleGauge />
        <Gap height={7} />
        <LargerTitleText>Headshot</LargerTitleText>
      </Centered>
      <Average />
      <Gap height={21} />
      <Statistics total={1000} mark={860} value={864} />
      <Statistics total={1000} mark={860} value={990} />
      <Statistics total={1000} mark={860} value={999} />
    </CardFixTop>
  );
};

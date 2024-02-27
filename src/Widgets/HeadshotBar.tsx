import { useSnapshot } from "valtio";
import { Card, CardHeader } from "../Components/Card";
import { headshotState } from "../state/headshot";
import { PercentageText, TitleText, WeaponText } from "../Components/Text";
import { BarGauge } from "../Components/BarGauge";
import { Gap } from "../Components/Gap";

export const HeadshotBar = () => {
  const { headshotRate } = useSnapshot(headshotState);
  return (
    <Card>
      <CardHeader>
        <PercentageText>{headshotRate}%</PercentageText>
        <WeaponText>AK-47</WeaponText>
      </CardHeader>
      <Gap height={7} />
      <TitleText>Headshot</TitleText>
      <Gap height={26} />
      <BarGauge percentage={headshotRate} />
      <Gap height={3} />
    </Card>
  );
};

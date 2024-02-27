import { useSnapshot } from "valtio";
import { Card, CardHeader } from "../Components/Card";
import { Slider } from "../Components/Slider";
import { headshotState } from "../state/headshot";
import { PercentageText, TitleText, WeaponText } from "../Components/Text";
import { Gap } from "../Components/Gap";

export const HeadshotSlider = () => {
  const { headshotRate } = useSnapshot(headshotState);
  const updateHeadshotRate = (e: React.ChangeEvent<HTMLInputElement>) =>
    (headshotState.headshotRate = parseInt(e.target.value) / 10);

  return (
    <Card>
      <CardHeader>
        <PercentageText>{headshotRate}%</PercentageText>
        <WeaponText>AK-47</WeaponText>
      </CardHeader>
      <Gap height={7} />
      <TitleText>Headshot</TitleText>
      <Gap height={13} />
      <Slider defaultValue={headshotRate} onChange={updateHeadshotRate} />
    </Card>
  );
};

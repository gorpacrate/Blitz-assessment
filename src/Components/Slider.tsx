import { styled } from "goober";

const SliderInput = styled("input")`
  width: 100%;
  height: 32px;
  cursor: pointer;
  appearance: none;
  background-color: transparent;
  &::-webkit-slider-runnable-track,
  &::-webkit-slider-thumb {
    appearance: none;
  }
  &::-webkit-slider-runnable-track {
    width: calc(100% - 20px);
    height: 7px;
    background: linear-gradient(
      to right,
      var(--color-sliderGradientFrom),
      var(--color-sliderGradientTo)
    );
    box-shadow: 0 0 3px 0 var(--color-sliderGradientBorder),
      inset 0 0 2px -0.5px var(--color-sliderGradientBorder);
    border-radius: 2px;
  }
  &::-webkit-slider-thumb {
    position: relative;
    height: 30px;
    width: 30px;
    margin-top: -11px;
    background: var(--color-sliderThumb);
    box-shadow: 0 0 1px 2px var(--color-sliderThumb);
    border-radius: 50%;
  }
`;

export const Slider: React.FC<{
  defaultValue: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ defaultValue, onChange }) => {
  return (
    <SliderInput
      type="range"
      min={0}
      max={1000}
      defaultValue={defaultValue * 10}
      onChange={onChange}
    />
  );
};

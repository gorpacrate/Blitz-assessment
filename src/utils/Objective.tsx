import { styled } from "goober";
import { proxy, useSnapshot } from "valtio";
import objectiveImgUrl from "../assets/objective.png";

const objective = proxy({ display: false, moveX: 50, opacity: 100 });

const Controls = styled("div")`
  position: fixed;
  width: 200px;
  z-index: 1001;
  top: 2em;
  right: 2em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  font-size: 14px;
  color: white;
  input {
    display: block;
  }
`;

const Toggle = styled("span")`
  cursor: pointer;
  text-decoration: underline;
  margin-bottom: 14px;
  &:hover {
    color: #0975ff;
  }
`;

const ObjectiveControl = () => {
  const state = useSnapshot(objective);
  const setOpacity = (e: React.ChangeEvent<HTMLInputElement>) =>
    (objective.opacity = parseInt(e.target.value));
  const setMoveX = (e: React.ChangeEvent<HTMLInputElement>) =>
    (objective.moveX = parseInt(e.target.value));
  const toggleObjective = () => (objective.display = !objective.display);
  return (
    <Controls>
      <Toggle onClick={toggleObjective}>
        {state.display ? "Hide Objective" : "Show Objective"}
      </Toggle>
      {state.display && (
        <>
          <label>
            Objective Opacity
            <input
              type="range"
              min="0"
              max="100"
              value={state.opacity}
              onChange={setOpacity}
            />
          </label>
          <label>
            Objective MoveX
            <input
              type="range"
              min="0"
              max="60"
              value={state.moveX}
              onChange={setMoveX}
            />
          </label>
        </>
      )}
    </Controls>
  );
};

const Image = styled("img")`
  position: absolute;
  z-index: 1000;
  pointer-events: none;
`;

const ObjectiveImage = () => {
  const state = useSnapshot(objective);
  return (
    state.display && (
      <Image
        style={{
          opacity: state.opacity / 100,
          transform: `translateX(${state.moveX * 10}px)`,
        }}
        src={objectiveImgUrl}
      />
    )
  );
};

export const Objective = () => (
  <>
    <ObjectiveControl />
    <ObjectiveImage />
  </>
);

import { CardGroup } from "./Components/Card";
import { Objective } from "./utils/Objective";
import { HeadshotBar } from "./Widgets/HeadshotBar";
import { HeadshotSlider } from "./Widgets/HeadshotSlider";
import { HeadshotStats } from "./Widgets/HeadshotStats";
import "./main.css";

function App() {
  console.warn("For the smoothest animations possible, please close DevTools.");
  return (
    <>
      <Objective />
      <CardGroup>
        <HeadshotBar />
        <HeadshotSlider />
        <HeadshotStats />
      </CardGroup>
    </>
  );
}

export default App;

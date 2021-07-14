import SettingCommonProps from "./components/SettingCommonProps/Index";
import "./App.css";
import CompoundComponent from "./components/CompoundComponent";
import CheckBox from "./components/CompoundComponent/CheckBox";
import Lable from "./components/CompoundComponent/Lable";

function App() {
  return (
    <div className="App">
      <SettingCommonProps />
      <hr />

      <CompoundComponent>
        <CheckBox />
        <Lable>This is the lable</Lable>
      </CompoundComponent>
    </div>
  );
}

export default App;


import MyFirstComponent from "./Components/01-intro/MyFirstComponent";
import MySecondComponent from "./Components/01-intro/MySecondComponent";
import MyMain from "./Components/02-Parent-Child/MyMain";
import Parent from "./Components/03-Props/01-Simple/Parent";
import PropsWithDifferentTypes from "./Components/03-Props/02-Intermediate/PropsWithDifferentTypes";
import FirstContactCard from "./Components/03-Props/03-ContactCard/FirstContactCard";

const App =()=> {
  return (
    <div>
      {/* <MyFirstComponent/> */}
      {/* <MySecondComponent/> */}
      {/* <MyMain/> */}
      {/* <Parent/> */}
      {/* <PropsWithDifferentTypes/> */}
      <FirstContactCard/>
     
    </div>
  );
}

export default App;

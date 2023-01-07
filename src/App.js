import Header from "./Header";
import Content from "./Content";
import SearchColor from "./SearchColor";
import { useState } from "react";
function App() {
  const [colorValue, setColorValue] = useState('')
  return (
    <div className="App bg-white dark:bg-slate-800 mx-auto min-h-screen">
      <Header title={"Color Changer"} />
      <Content colorValue={colorValue}/>
      <SearchColor 
        colorValue={colorValue}
        setColorValue={setColorValue}/>
    </div>
  );
}

export default App;

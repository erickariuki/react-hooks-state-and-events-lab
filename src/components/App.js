import React ,{useState}from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items,setItems]=useState(itemData);
  const[isDarkMode, setIsDarkMode]=useState(false);
  function HandleDarkMode(){
    setIsDarkMode((isDarkMode)=>!isDarkMode);
  }

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  //const appClass = false ? "App dark" : "App light"
  const appClass = isDarkMode? "App dark" : "App light"


  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={HandleDarkMode}>{isDarkMode ? "Dark" : "Light"} Mode</button>
      </header>
      <ShoppingList items={itemData} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
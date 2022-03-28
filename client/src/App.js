import Registration from "./components/Registration.jsx";
import Login from "./components/Login.jsx";
import Admin from "./components/Admin.jsx";
import { useState } from "react";

function App() {
  const [intf, setIntf] = useState("login");

  const changeInterface = (intfs) => {
    setIntf(intfs);
    swtitchInterface();
  };

  function swtitchInterface() {
    //intf stands for interface
    if (intf === "registration")
      return <Registration changeIntf={(e) => changeInterface(e)} />;
    if (intf === "login")
      return <Login changeIntf={(e) => changeInterface(e)} />;
    if (intf === "admin")
      return <Admin changeIntf={(e) => changeInterface(e)} />;
  }

  return <div>{swtitchInterface()}</div>;
}
export default App;

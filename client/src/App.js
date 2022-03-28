import Registration from "./components/Registration.jsx";
import Login from "./components/Login.jsx";
import Admin from "./components/Admin.jsx";
import { useState } from "react";

function App() {
  const [intf, setIntf] = useState("admin");

  const changeInterface = (intfs) => {
    setIntf(intfs);
    swtitchInterface();
  };

  function swtitchInterface() {
    //intf stands for interface
    if (intf === "registration")
      return <Registration changeIntf={() => changeInterface("login")} />;
    if (intf === "login")
      return <Login changeIntf={() => changeInterface("registration")} />;
    if (intf === "admin")
      return <Admin changeIntf={() => changeInterface("login")} />;
  }

  return <div>{swtitchInterface()}</div>;
}
export default App;

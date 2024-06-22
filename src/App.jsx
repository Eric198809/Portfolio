import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import "./style/setting.scss";

function App() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;

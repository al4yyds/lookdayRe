import { Outlet } from "react-router-dom";
import Titlebar from "./Titlebar";
import Footer from "./Footer";
// import "./RootLayout.scss"; // 確保引入了 CSS 文件

const RootLayout = () => {
  return (
    <div className="root-layout">
      <Titlebar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;

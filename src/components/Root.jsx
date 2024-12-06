import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Alphabet from "./Alphabet";
import Number from "./Number";
import Days from "./Days";
import Months from "./Months";
import Date from "./Date";
// import TranslateApp from "./Translate";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-base-200">
        {/* <TranslateApp></TranslateApp> */}
        <Days></Days>
        <Months></Months>
        <Date></Date>
        <Alphabet></Alphabet>
        <Number></Number>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;

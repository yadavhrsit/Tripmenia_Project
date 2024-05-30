import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Explore from "./Pages/Explore";
import PackagePage from "./Pages/PackagePage";
import Layout from "./Layout";
import Success from "./Pages/Success";
import Failure from "./Pages/Failure";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/package/:id" element={<PackagePage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/success/:id" element={<Success/>} />
        <Route path="/failure" element={<Failure/>} />
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
}
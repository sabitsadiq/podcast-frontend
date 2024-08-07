import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex">
      <BrowserRouter>
        <Menu />
        <main className="flex-[7] bg-[#1c1e27]">
          <Navbar />
          <div className="w-11/12 mx-auto">
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                {/* <Route path="signin" element={<SignIn />} /> */}
                {/* <Route path="video"> */}
                {/* <Route path=":id" element={<Video />} /> */}
                {/* </Route> */}
              </Route>
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

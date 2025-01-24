import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import RicetteSalvate from "./pages/RicetteSalvate";
import PostDetail from "./pages/PostDetail";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/chi-siamo" Component={About} />
            <Route path="/ricette-salvate" Component={RicetteSalvate} />
            <Route path="/ricette-salvate/:id" Component={PostDetail} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App

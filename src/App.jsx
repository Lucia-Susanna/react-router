import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Blog from "./pages/Blog";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/chi-siamo" Component={About} />
            <Route path="/blog" Component={Blog} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App

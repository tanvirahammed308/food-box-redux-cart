import { Route, Routes } from "react-router"
import Root from "../layouts/Root"
import Home from "../pages/Home"
import About from "../pages/About"
import Success from "../pages/Success"

const router = () => {
  return (
    <div>
        <Routes>
     
      <Route path="/" element={<Root/>}>
       
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/success" element={<Success/>} />
      </Route>
    </Routes>
    </div>
  )
}

export default router
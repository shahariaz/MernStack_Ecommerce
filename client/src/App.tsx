import { BrowserRouter as Router , Routes, Route } from "react-router-dom"
import { Suspense} from "react"
import { Home ,Cart,Search, Loder} from "./routes"
const App = () => {
  return <Router>
    <Suspense fallback={<Loder/>}>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/search" element={<Search/>} />
    </Routes>
    </Suspense>
  </Router>
}

export default App

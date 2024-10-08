import React from "react"
import { Routes, Route } from "react-router-dom"
import AuthRoute from "./components/routes/AuthRoute"
import PrivateRoute from "./components/routes/PrivateRoute"
import { Outlet } from "react-router-dom"
import Loading from "./pages/Loading"
import SearchWrapper from "./components/context/SearchContext"
// pages
const Home = React.lazy(() => wait(1000).then(() => import("./pages/Home")))
const Search = React.lazy(() => wait(1000).then(() => import("./pages/Search")))
const Login = React.lazy(() => wait(1000).then(() => import("./pages/Login")))
const WatchList = React.lazy(() => wait(1000).then(() => import("./pages/WatchList")))

function App() {
  return (
    <div className="App">
      <SearchWrapper>
        <Routes>
          <Route element={<SuspenseWrapper />}>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route element={<PrivateRoute />}>
              <Route path="/watch-list" element={<WatchList />} />
            </Route>
            <Route element={<AuthRoute />}>
              <Route path="/login" element={<Login />} />
            </Route>
          </Route>
        </Routes>
      </SearchWrapper>
    </div>
  )
}

const SuspenseWrapper = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Outlet />
    </React.Suspense>
  )
}

const wait = (time: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  })
}

export default App

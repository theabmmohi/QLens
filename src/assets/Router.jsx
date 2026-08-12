import { Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"

const Home = lazy(() => import("@page/Home"))

export default function Router() {
  return <Suspense>
    <Routes>
      <Route path="/*" element={<Home/>}/>
    </Routes>
  </Suspense>
}
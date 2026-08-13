import { Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"

const Home = lazy(() => import("@page/Home"))
const Settings = lazy(() => import("@page/Settings"))

export default function Router () {
  return <Suspense>
    <Routes>
      <Route path="/*" element={<Home/>}/>
      <Route path="settings/*" element={<Settings/>}/>
    </Routes>
  </Suspense>
}
import { ThemeProvider, CssBaseline, Stack, AppBar, Divider, Snackbar, Slide } from "@mui/material"
import { useNavigate, useLocation } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import { useState, useEffect } from "react"
import { App as Cap } from "@capacitor/app"
import { Toaster, toast } from "sonner"
import Context from "@js/Context"

import { ThemeL, ThemeD } from "@js/Theme"
import Topbar from "@asset/Topbar"
import Router from "@asset/Router"

function BackButton () {
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    const listener = Cap.addListener("backButton", () => location.pathname === "/" ? Cap.exitApp() : navigate(-1))
    return () => listener.remove()
  }, [location])
  return null
}

import { NodeJS } from "capacitor-nodejs"
export default function App () {



useEffect(() => {
  let listenerHandle
  NodeJS.whenReady().then(() => {
    NodeJS.addListener("fromNode", (event) => {
      toast(`from node: ${JSON.stringify(event.args)}`)
    }).then((handle) => { listenerHandle = handle })
    NodeJS.send({
      eventName: "fromReact",
      args: ["Hello from Capacitor!"]
    })
  })
  return () => { listenerHandle?.remove() }
}, [])



  const [theme, setTheme] = useState(() => localStorage.getItem("AppTheme") || "system")
  const [systemPrefersDark, setSystemPrefersDark] = useState(() => window.matchMedia("(prefers-color-scheme: dark)").matches)
  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = (e) => setSystemPrefersDark(e.matches)
    mql.addEventListener("change", handleChange)
    mql.addListener?.(handleChange)
    return () => {
      mql.removeEventListener("change", handleChange)
      mql.removeListener?.(handleChange)
    }
  }, [])
  const isDark = theme === "dark" || (theme === "system" && systemPrefersDark)
  const applyTheme = (newTheme) => {
    localStorage.setItem("AppTheme", newTheme)
    setTheme(newTheme)
  }
  return <Context.Provider value={{ theme, applyTheme, toast }}>
    <ThemeProvider theme={isDark ? ThemeD : ThemeL}>
      <CssBaseline/>
      <BrowserRouter>
        <Stack sx={{ height: "100svh", width: "100svw" }}>
          <AppBar position="sticky" elevation={0} color="default">
            <Topbar/>
          </AppBar>
          <Divider/>
          <Stack sx={{ overflowY: "auto", width: "100%", flex: 1, gap: 5, p: 5 }}>
            <Router/>
          </Stack>
        </Stack>
        <Toaster theme={theme} richColors={!isDark} position="bottom-center" swipeDirections={["top", "bottom"]} toastOptions={{ duration: 5000 }}/>
        <BackButton/>
      </BrowserRouter>
    </ThemeProvider>
  </Context.Provider>
}
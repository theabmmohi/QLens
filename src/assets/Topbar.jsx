import { Toolbar, Stack, IconButton, Menu, Divider, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import { IoMenu, IoClose } from "react-icons/io5"
import { useState, useContext } from "react"
import { GoDotFill } from "react-icons/go"
import { LuTrash2 } from "react-icons/lu"
import Button from "@component/Button"
import Context from "@js/Context"

export default function Topbar() {
  const { theme, applyTheme } = useContext(Context)
  const [anchorEl, setAnchorEl] = useState(null)
  const [diaOpen, setDiaOpen] = useState(false)
  const menuOpen = Boolean(anchorEl)
  const clearApp = () => {
    window.location.reload()
  }
  return <Toolbar sx={{ justifyContent: "space-between" }}>
    <img src="/iconR.png" style={{ height: 40, width: "auto" }}/>
    <Stack sx={{ flexDirection: "row"}}>
      <IconButton onClick={(event) => menuOpen ? setAnchorEl(null) : setAnchorEl(event.currentTarget)}>
        {menuOpen?<IoClose/>:<IoMenu/>}
      </IconButton>
    </Stack>
    <Menu anchorEl={anchorEl} open={menuOpen} onClose={() => setAnchorEl(null)} slotProps={{ paper: { elevation: 0, sx: { border: "1px solid", borderColor: "divider", borderRadius: 0.5, minWidth: 200 } } }}>
      <Stack sx={{ my: -1 }}>
        <Stack sx={{ p: 1, gap: 0.5 }}>
          <Typography variant="caption">Theme</Typography>
          {["system", "light", "dark"].map((option) => <Stack onClick={() => applyTheme(option)} sx={{ flexDirection: "row", alignItems: "center", gap: 1 }}>
            <GoDotFill style={{ opacity: theme === option ? 1 : 0, transition: "opacity 250ms" }}/>
            <Typography>{option.charAt(0).toUpperCase() + option.slice(1)}</Typography>
          </Stack>)}
        </Stack>
        <Divider/>
        <Stack>
          <Button variant="text" size="small" color="error" startIcon={<LuTrash2/>} sx={{ justifyContent: "flex-start", borderColor: "divider", borderRadius: 0.5, borderTopRightRadius: 0, borderTopLeftRadius: 0, px: 1 }} onClick={() => {setAnchorEl(null), setDiaOpen(true)}}>Clear app data</Button>
        </Stack>
      </Stack>
    </Menu>
    <Dialog open={diaOpen} onClose={() => setDiaOpen(false)}>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ textAlign: "justify" }}>
          This will clear saved connections, theme preference, and any other
          data QLens has stored in this browser. Your actual databases and
          their data will not be affected — this only clears local app data.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="text" size="small" onClick={() => setDiaOpen(false)}>Cancel</Button>
        <Button variant="text" size="small" onClick={clearApp} color="error">Clear</Button>
      </DialogActions>
    </Dialog>
  </Toolbar>
}
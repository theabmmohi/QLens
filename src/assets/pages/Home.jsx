import { Stack, Tooltip, Fab } from "@mui/material"
import { IoAdd } from "react-icons/io5"

export default function Home () {
  return <Stack sx={{ flex: 1 }}>
    <Tooltip title="Add database" placement="top">
      <Fab sx={{ position: "fixed", bottom: 20, right: 20 }}><IoAdd size={25}/></Fab>
    </Tooltip>
  </Stack>
}
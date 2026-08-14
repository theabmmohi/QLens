import { Stack, Fab } from "@mui/material"
import { IoAdd } from "react-icons/io5"
import Hint from "@component/Hint"

export default function Home () {
  return <Stack sx={{ flex: 1 }}>
    <p>Home</p>
    <Hint title="Add database">
      <Fab sx={{ position: "fixed", bottom: 20, right: 20 }}><IoAdd size={25}/></Fab>
    </Hint>
  </Stack>
}
import { DrawerRoot, DrawerTrigger, DrawerContent } from "@component/Drawer"
import { Stack, Fab } from "@mui/material"
import { IoAdd } from "react-icons/io5"

export default function Home () {
  return <Stack sx={{ flex: 1 }}>
    Home
    <DrawerRoot>
      <DrawerTrigger asChild>
        <Fab sx={{ position: "fixed", bottom: 20, right: 20 }}><IoAdd size={25}/></Fab>
      </DrawerTrigger>
      <DrawerContent>
        sunt est voluptate dolor nostrud eu labore duis excepteur dolor duis tempor eu ullamco et excepteur velit non nostrud deserunt consequat velit reprehenderit aliquip consectetur in excepteur reprehenderit ipsum eiusmod elit laborum cillum ullamco in in ad aliquip sint do ipsum Lorem non adipisicing nulla elit ea adipisicing elit irure ut nostrud excepteur Lorem officia consequat consectetur enim reprehenderit consequat sunt commodo irure nostrud pariatur fugiat ullamco laboris duis magna commodo adipisicing occaecat incididunt irure fugiat velit ipsum exercitation sit culpa non sunt qui irure aute culpa nostrud laborum proident ea nisi pariatur nostrud ad mollit labore eu nostrud quis
      </DrawerContent>
    </DrawerRoot>
  </Stack>
}
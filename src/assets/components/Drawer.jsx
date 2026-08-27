import { Drawer as Vaul } from "vaul"
import { Stack, useTheme } from "@mui/material"

export const DrawerRoot = Vaul.Root
export const DrawerTrigger = Vaul.Trigger
export const DrawerContent = ({ children }) => {
  const theme = useTheme()
  return <Vaul.Portal>
    <Vaul.Overlay style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 1350 }}/>
    <Vaul.Content
      style={{
        position: "fixed", bottom: 0, left: 0, right: 0,
        maxHeight: "90svh", display: "flex", flexDirection: "column",
        background: theme.palette.background.paper,
        borderTopLeftRadius: theme.shape.borderRadius,
        borderTopRightRadius: theme.shape.borderRadius,
        outline: "none", zIndex: 9999
      }}>
      <Vaul.Handle style={{ background: theme.palette.divider, width: 128, marginTop: 16, marginBottom: 16 }}/>
      <Stack sx={{ overflowY: "auto", p: 5, pt: 0, gap: 2.5 }}>
        {children}
      </Stack>
    </Vaul.Content>
  </Vaul.Portal>
}
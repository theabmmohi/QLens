import { Tooltip, Fade } from "@mui/material"
const Hint = ({ children = null, ...rest }) =>
<Tooltip
  placement="left"
  slots={{ transition: Fade }}
  slotProps={{
    transition: { timeout: 500 },
    tooltip: { sx: { borderRadius: 0.25 } },
    popper: { modifiers: [{
      name: "offset",
      options: { offset: [0, -10] }
    }] }
  }}
  {...rest}>
  {children}
</Tooltip>
export default Hint
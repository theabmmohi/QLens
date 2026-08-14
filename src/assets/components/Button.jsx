import { CircularProgress, Button as Base } from "@mui/material"
const Button = ({ loading = false, startIcon= null, children = null, ...rest }) =>
<Base
  startIcon={loading ? <CircularProgress size={20}/> : startIcon}
  variant={loading ? "outlined" : "contained"}
  disabled={loading}
  {...rest}>
  {children}
</Base>
export default Button
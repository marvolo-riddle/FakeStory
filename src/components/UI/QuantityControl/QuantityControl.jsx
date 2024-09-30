import {styles} from './styles.js'
import {Box, Button, Typography} from "@mui/material";

const QuantityControl = ({quantity, clickPlus, clickMinus})=>{

  return(
      <Box sx={styles.container}>

        <Button onClick={clickMinus} sx={styles.btn}>-</Button>
        <Typography sx={styles.text}>{quantity}</Typography>
        <Button onClick={clickPlus} sx={styles.btn}>+</Button>

      </Box>
  )
}
export default QuantityControl
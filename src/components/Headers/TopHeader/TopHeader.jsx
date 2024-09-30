import {Box, Typography} from '@mui/material'
import {styles} from './styles.js'

const TopHeader = () => {

  return (
      <Box sx={styles.container}>
        <Box sx={styles.flexBox}>


          <Box sx={styles.flexItemLeft}>
            <Typography sx={styles.text}> 100% original products!</Typography>
          </Box>

          <Box sx={styles.flexItemCenter}>
          <Typography sx={styles.text}>Actions</Typography>
            <Typography sx={styles.text}>Delivery and Payment</Typography>
            <Typography sx={styles.text}>About the store</Typography>
          </Box>

          <Box sx={styles.flexItemRight}>
            <Typography sx={styles.text}>Eng  Ua</Typography>
            <Typography sx={styles.text}>★ BULGARI Club</Typography>
          </Box>

        </Box>
      </Box>
  )
}

export default TopHeader;
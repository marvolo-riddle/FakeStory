import {Box, Typography} from '@mui/material';
import {styles} from './styles.js'
import banner from '../../../../assets/banner.jpeg';

const Banner = () => {
  return(
      <Box>
        <Box sx={styles.imgContainer}>
          <img style={styles.image} src={banner} alt='banner-img' />
        </Box>

        <Box sx={styles.txtContainer}>
          <Typography sx={styles.text}>Classic for Eternity.</Typography>
        </Box>
      </Box>

  )
}

export default Banner;


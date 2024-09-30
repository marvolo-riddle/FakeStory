import {Box, Typography} from '@mui/material';
import {styles} from './styles.js'
import bannerCategoryPage from '../../../../assets/bannerCategoryPage.png';

const BannerCategory = ({category}) => {
  return(
      <Box>

        <Box sx={styles.imgContainer}>
          <img style={styles.image} src={bannerCategoryPage} alt='banner-img' />
        </Box>

        <Box sx={styles.categoryBanner}>
          <Typography sx={styles.categoryText}> {category}</Typography>
        </Box>
      </Box>
  )
}

export default BannerCategory;


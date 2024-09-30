import {Box} from '@mui/material';
import {styles} from './styles.js'
import {Link} from 'react-router-dom'
import routeNames from "../../router/routeNames.js";
import {useGetAllCategoriesQuery} from "../../redux/slices/productsSlice.js";

const CategoriesList = () => {
  const {data: categories, isLoading, isError, error} = useGetAllCategoriesQuery();

  if (isLoading) return <Box>Loading...</Box>;
  if (isError) return <Box>Error: {error.message}</Box>;

  return (
      <Box sx={styles.container}>
        {categories && categories.map(category => (
            <Box sx={styles.item} key={category}>
              <Link style={styles.link}
                to={routeNames.categoryPage.replace(':categoryName', category)}> {category}
              </Link>
            </Box>
        ))}
      </Box>
  )

}

export default CategoriesList
import {useState} from "react";
import {Box, IconButton, TextField} from "@mui/material";
import {styles} from './styles.js';
import {CiSearch} from "react-icons/ci";
import {Link, useParams} from "react-router-dom";
import routeNames from "../../../router/routeNames.js";

const SearchBar = ({products}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const {id} = useParams();

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const filteredProducts = products?.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (

      <Box>

        <Box sx={styles.searchContainer}>

          <IconButton sx={styles.icon}>
            <CiSearch></CiSearch>
          </IconButton>

          <TextField
              label="Search..."
              variant="standard"
              value={searchQuery}
              onChange={handleInputChange}
              fullWidth
              color='black'
          />
        </Box>

        {searchQuery.length > 0 ? (

            <Box sx={styles.listContainer}>

              <ul style={{listStyleType: 'none'}}>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <Link style={styles.link}
                            to={routeNames.productDetailPage.replace(':id', product.id)}>
                          <li style={{padding: '0.5rem'}} key={product.id}>{product.title}</li>
                        </Link>

                    ))
                ) : (
                    <li>No products found</li>
                )
                }
              </ul>

            </Box>
        ) : null}
      </Box>

  )
}

export default SearchBar;



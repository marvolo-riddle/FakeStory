import {Box, Button, Typography} from "@mui/material";
import {styles} from './styles.js'
import { BsBox } from "react-icons/bs";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { BsQuestionCircleFill } from "react-icons/bs";


const ProductDetail = ({product, clickBuy}) => {

  return (

      <Box sx={styles.container}>

        <Box sx={styles.detailsWrap}>

          <Typography sx={styles.deal}>DEAL</Typography>

          <Typography sx={styles.text}>BULGARI / {product.category}</Typography>

          <Typography sx={styles.title}>{product.title}</Typography>

          <Typography sx={styles.grayText}>{product.description}</Typography>

          <Typography
              sx={styles.text}>{'★'.repeat(product.rating.rate)}{'☆'.repeat(5 - product.rating.rate)}
          </Typography>

          <Typography sx={styles.grayText}>46 reviews</Typography>
        </Box>

        <Box sx={styles.imgWrap}>
          <img style={styles.img} src={product.image} alt='img'/>
        </Box>

        <Box sx={styles.orderWrap}>

          <Typography sx={styles.price}>{product.price}$</Typography>

          <Typography sx={styles.text}>product code: {product.id}</Typography>

          <Button onClick={clickBuy} sx={styles.btn}>BUY</Button>

          <Typography sx={styles.orderText}>
            <HiOutlinePlusCircle/> Subscribe to product <BsQuestionCircleFill/>
          </Typography>

          <Typography sx={styles.orderText}> <BsBox/> Cost-free delivery!</Typography>
        </Box>
      </Box>
  )
}
export default ProductDetail
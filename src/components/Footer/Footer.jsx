import {Box, Typography, TextField, Button, List, ListItem} from '@mui/material';
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import {styles} from './styles.js'


const Footer = () => {

  return (
      <Box>

        <Box sx={styles.topContainer}>

          <Typography sx={styles.textUnderForm}>
            Be the first to know about sales and new products!
          </Typography>

          <Box sx={styles.formBox}>
            <TextField
                sx={styles.input}
                type="email"
                label="Email"
                required
                autoComplete="email"
                variant="standard"
                color="black"
            />
            <Button style={styles.btn}>SUBSCRIBE</Button>
          </Box>

          <Box sx={styles.iconsBox}>
            <FaFacebook style={styles.iconItem}></FaFacebook>
            <FaYoutube style={styles.iconItem}></FaYoutube>
            <FaTwitter style={styles.iconItem}></FaTwitter>
            <FaInstagram style={styles.iconItem}></FaInstagram>
          </Box>

        </Box>

        <Box sx={styles.middleContainer}>

          <Box sx={styles.wrapperBox}>

            <Box>
              <List sx={styles.list}>
                <ListItem>About delivery</ListItem>
                <ListItem>Payment methods</ListItem>
                <ListItem>About products</ListItem>
              </List>
            </Box>

            <Box>
              <List sx={styles.list}>
                <ListItem>Articles</ListItem>
                <ListItem>News</ListItem>
              </List>
            </Box>

            <Box>
              <List sx={styles.list}>
                <ListItem>Beauty Club</ListItem>
                <ListItem>Terms of use</ListItem>
                <ListItem>Returns and Exchanges</ListItem>
              </List>
            </Box>

            <Box>
              <List sx={styles.list}>
                <ListItem>About us</ListItem>
                <ListItem>Contacts</ListItem>
                <ListItem>Addition</ListItem>
                <ListItem>Partner program</ListItem>
              </List>
            </Box>

          </Box>

          <Box sx={styles.wrapperBox}>

            <Box sx={styles.infoBox}>

              <Box sx={styles.numberBox}>
                <Typography sx={styles.number}>(044) 374 03 83</Typography>
                <Typography sx={styles.number}>0(800) 50 77 40</Typography>
              </Box>

              <Typography sx={styles.text}>
                You can <span style={styles.span}>write us a letter</span> or
                <span style={styles.span}>chat</span>, as well as call the numbers <br/>
                Daily from 7:55 to 20:05
              </Typography>

              <Typography sx={styles.text}>
                <span style={styles.span}>Call back</span>
              </Typography>

              <Typography sx={styles.text}>
                <span style={styles.span}>Cooperation with us</span>
              </Typography>

            </Box>

            <Box sx={styles.languageBox}>
              <Typography>Ua</Typography>
              <Typography>Eng</Typography>
            </Box>
          </Box>

        </Box>

        <Box sx={styles.bottomContainer}>

          <Typography sx={styles.text}>
            <span style={styles.span}>BULGARI .FASHION WITHOUT LIMITS</span>
          </Typography>

          <Typography sx={styles.text}>© BULGARI 2009-2024</Typography>
        </Box>

      </Box>

  )
}


export default Footer;



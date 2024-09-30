import 'typeface-raleway';
import 'typeface-jura';
import 'typeface-rajdhani';

export const styles = {

  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '1rem 0',
    borderBottom: '0.5px solid #55545460',
    justifyContent: 'space-between',
  },

  productDetails: {
    width: '70%',
    display: 'flex',
    gap: '3rem',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  product: {
    display: 'flex',
    alignItems: 'center',
  },

  imgWrap: {
    minHeight: '150px',
    display: 'flex',
    alignItems: 'center',
  },

  img: {
    width: '100px',
    padding: 'auto',
  },

  descriptionWrap: {
    display: 'flex',
    flexDirection: 'column',
  },

  title: {
    fontFamily: 'Jura, sans-serif',
  },

  titleSmall: {
    fontSize: '1rem'
  },

  description: {
    fontFamily: 'Jura, sans-serif',
    fontSize: '1.1rem',
    color: 'rgba(127,124,124,0.81)',
  },

  total: {
    display: 'flex',
    alignItems: 'center',
  },

  price: {
    fontFamily: 'Rajdhani, sans-serif',
    fontSize: '1.3rem',
    fontWeight: '600',
    letterSpacing: '0.1rem',
    padding: '0 1rem',
  },

  icon: {
    fontSize: '1.1rem',
    margin: '0 2rem',
    cursor: 'pointer',
    color: 'rgba(85,84,84,0.6)',
  },

  link: {
    color: 'black',
    textDecoration: 'none',
  }
}
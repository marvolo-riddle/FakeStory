import 'typeface-raleway';
import 'typeface-jura';
import 'typeface-rajdhani';


export const styles = {

  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(242,241,241,0.55)',
  },

  wrapper: {
    display: 'flex',
    width: '90%',
    margin: '0 auto',
    padding: '0.8rem 0',
    justifyContent: 'space-between',

    '&:first-of-type': {
      paddingTop: '1.5rem',
    },

    '&:last-of-type': {
      borderTop: '0.5px solid #55545460',
      padding: '1.3rem 0',
    }
  },

  text: {
    fontFamily: 'Jura, sans-serif',
    letterSpacing: '0.05rem',
    fontSize: '1.2rem',
  },

  discount: {
    fontSize: '1rem',
  },

  total: {
    fontSize: '1.3rem',
    fontWeight: '600'
  },

  btn: {
    width: '90%',
    margin: '0 auto',
    backgroundColor: 'black',
    color: 'white',
    fontFamily: 'Jura, sans-serif',
    fontSize: '1.2rem',
  }

}
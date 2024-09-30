import 'typeface-raleway';
import 'typeface-jura';
import 'typeface-rajdhani';

export const styles = {

  checkoutWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '95%',
    margin: '0 auto',
    padding: '2rem',
  },

  orderWrap: {
    width: '50%',
  },

  listWrap: {
    display: 'flex',
    flexDirection: 'column',
    width: '45%',
    gap: '1rem',
    paddingBottom: '2rem',
    border: '0.5px solid #55545460',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },

  list: {
    width: '90%',
    margin: '0 auto',
  },

  textWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '85%',
    margin: '0 auto',
    '&:first-of-type': {
      paddingTop: '1.5rem',
      borderTop: '0.5px solid #55545460',
    },
    '&:last-of-type': {
      padding: '1.3rem 0',
      borderTop: '0.5px solid #55545460',
    }
  },

  text: {
    fontFamily: 'Jura, sans-serif',
    fontSize: '1.1rem',
    fontWeight: '500',
    paddingBottom: '0.5rem',
  },

  textSmall: {
    fontSize: '1rem',
    color: '#7d21c6',
  },

  textLarge: {
    fontSize: '1.5rem',
    fontWeight: '700',
  },

  afterOrderText: {
    fontFamily: 'Jura, sans-serif',
    fontSize: '2.5rem',
    textAlign: 'center',
    padding: '9rem 0',
  }

}

import 'typeface-raleway';
import 'typeface-jura';
import 'typeface-rajdhani';

export const styles = {
  topContainer: {
    width: '95%',
    margin: '0 auto',
    backgroundColor: '#f8f7f7',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '3rem',
    padding: '6rem',
  },

  textUnderForm: {
    fontFamily: 'Jura, sans-serif',
    letterSpacing: '0,2rem',
    fontSize: '1.8rem',
    fontWeight: '600',
  },

  formBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'center',
    width: '36%',
  },

  input: {
    width: '90%',
    border: 'none',
    backgroundColor: 'transparent',
    fontSize: '3rem',
  },

  btn: {
    color: 'black',
    fontFamily: 'Jura, sans-serif',
    letterSpacing: '0.2rem',
  },

  iconsBox: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '16%',
    fontSize: '1.6rem'
  },

  iconItem: {
    border: '0.1px solid #cccbcb',
    borderRadius: '50%',
    padding: '0.8rem',
  },

  middleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '95%',
    margin: '0 auto',
  },

  wrapperBox: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem',
    padding: '5rem 0',
  },

  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '1.1rem',
    fontFamily: 'Jura, sans-serif',
    fontWeight: '500',
    fontSize: '1.1rem',
    listStyle: 'none',

    '& > :first-of-type': {
      fontSize: '1.2rem',
      fontWeight: '900'
    }
  },

  infoBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingRight: '3rem',
    gap: '1.3rem',
  },

  numberBox: {
    display: 'flex',
    gap: '1.1rem',
  },

  number: {
    fontFamily: 'Rajdhani, sans-serif',
    fontSize: '1.6rem',
    fontWeight: '600',
  },

  text: {
    fontFamily: 'Jura, sans-serif',
    fontSize: '1.1rem',
    fontWeight: '500',
  },

  span: {
    color: '#7d21c6',
    fontWeight: '600',
  },

  languageBox: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    fontFamily: 'Jura, sans-serif',
    fontSize: '25px',
    fontWeight: '600',

    '& > :first-of-type': {
      color: 'rgba(85,84,84,0.6)',
      fontSize: '1.2rem',
    },

    '& > :last-child': {
      color: 'black',
      fontSize: '1.2rem',
    },

  },

  bottomContainer: {
    width: '95%',
    padding: '4rem 0 1rem ',
    borderTop: '0.25px solid #B7B7B7',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'center',
  }

}
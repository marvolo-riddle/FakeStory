import 'typeface-raleway';
import 'typeface-jura';

export const styles = {

  container: {
    width: '100%',
  },

  flexBox: {
    display: 'flex',
    alignItems: 'center',
    width: '95%',
    margin: '0 auto',
    padding: '1rem 0',
    borderBottom: '0.25px solid #B7B7B7',
  },

  flexItemLeft: {
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '1.5rem',
    fontFamily: 'Raleway, sans-serif',
    width: '33%',
  },

  flexItemCenter: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    fontFamily: 'Jura, sans-serif',
    width: '33%',
  },

  flexItemRight: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '2rem',
    fontFamily: 'Raleway, sans-serif',
    width: '33%',
  },

  text: {
    fontFamily: 'Raleway, sans-serif',
  }
}


import 'typeface-raleway';
import 'typeface-jura';
import 'typeface-rajdhani';

export const styles = {

  container: {
    width: '85%',
    margin: '0 auto',
  },

  contactsWrap: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    padding: '2rem',
    margin: '0 auto',
    backgroundColor: '#fffefe',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },

  title: {
    fontFamily: 'Jura, sans-serif',
    fontSize: '2rem',
    fontWeight: '700',
    paddingBottom: '3rem',
  },

  text: {
    fontFamily: 'Jura, sans-serif',
    fontSize: '1.8rem',
    fontWeight: '600',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    padding: '2rem 0'
  },

  btn: {
    width: '90%',
    margin: '0 auto',
    backgroundColor: '#000',
    color: 'white',
    fontFamily: 'Jura, sans-serif',
    fontSize: '1.2rem',
    fontWeight: '700',
    letterSpacing: '0.15rem',
  },

  btnBack: {
    width: '30%',
    margin: '0 auto',
    fontFamily: 'Jura, sans-serif',
    fontSize: '1.2rem',
  }
}
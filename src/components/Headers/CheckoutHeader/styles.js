export const styles = {
  container: {
    width: '100%',
    backgroundColor: 'white',
    borderBottom: '1px  #B7B7B7',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },

  flexBox: {
    display: 'flex',
    alignItems: 'center',
    width: '95%',
    margin: '0 auto',
    padding: '1.2rem 0 0.4rem',
  },

  linkBox: {
    width: '33%',
    display: 'flex',
    alignItems: 'center',
  },

  link:{
    textDecoration: 'none',
    color: '#7d21c6',
    fontFamily: 'Jura, sans-serif',
    fontSize: '1.5rem',
  },

  logoBox: {
    width: '33%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    maxHeight: '30px',
    height: 'auto',
    width: 'auto',
  },

  iconBox: {
    width: '33%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: '2rem',
    gap: '1rem',
  },

  logOut: {
    color: '#000',
    fontSize: '3rem',
    '&:hover':{
      cursor: 'pointer',
    }
  },

}

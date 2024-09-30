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

  searchBox: {
    width: '33%',
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

  iconsBox: {
    width: '33%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: '2rem',
    gap: '1rem',
  },

  user: {
    fontSize: '2rem',
    color: '#000',
    minWidth: '15px',
    '&:hover': {
      cursor: 'pointer',
    }
  },

  heart: {
    color: '#000',
    fontSize: '2.1rem',
  },

  cart: {
    fontSize: '2.1rem',
  },

  badge: {
    cursor: 'pointer',
    '& .MuiBadge-dot': {
      backgroundColor: 'black',

    },
    '& .MuiBadge-colorSecondary': {
      backgroundColor: 'black',
    },
  },
}

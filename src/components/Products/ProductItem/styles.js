import 'typeface-raleway';

export const styles = {

  boxContainer: {
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '&:hover .hoverButton': {
      opacity: 1,
      visibility: 'visible',
      transition: 'opacity 0.3s, visibility 0.3s'
    },
  },

  imgBox: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 2rem',
    position: 'relative',
    height: '350px',
  },

  img: {
    maxWidth: '150px',
    padding: 'auto',
  },

  icon: {
    color: 'white',
    backgroundColor: 'rgba(85,84,84,0.16)',
    position: 'absolute',
    top: '01px',
    right: '1px',
    '&:hover': {
      backgroundColor: 'rgba(85,84,84,0.08)',
    }
  },

  title: {
    textAlign: 'center',
    fontFamily: 'Raleway, sans-serif',
    fontWeight: '400',
    fontSize: '1.5rem',
    paddingBottom: '1rem',
  },

  description: {
    fontFamily: 'Raleway, sans-serif',
    fontWeight: '300',
    fontSize: '1.1rem',
    color: 'rgba(27,25,25,0.7)',
    paddingBottom: '2rem',
    textAlign: 'center'
  },

  rating: {
    fontSize: '0.8rem',
    letterSpacing: '0.2rem',
  },

  price: {
    fontFamily: 'Lato, sans-serif',
    fontWeight: '400',
    fontSize: '1.6rem',
    letterSpacing: '0.1rem',
    padding: '1rem',
    paddingBottom: '2rem',
  },

  button: {
    opacity: 0,
    visibility: 'hidden',
    transition: 'opacity 0.2s, visibility 0.2s',
    width: '100%',
    height: '3rem',
    color: 'white',
    backgroundColor: 'black',
    fontFamily: 'Inter',
    fontSize: '1.3rem',
    fontWeight: 'bold',
    letterSpacing: '0.2rem',
  },

  link: {
    color: 'black',
    textDecoration: 'none',
  }

};


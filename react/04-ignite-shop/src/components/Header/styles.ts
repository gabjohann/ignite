import { styled } from '../../styles';

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  button: {
    padding: '0.75rem',
    backgroundColor: '$gray800',
    border: 0,
    borderRadius: 6,

    display: 'flex',
    position: 'relative',
    cursor: 'pointer',
  },
});

export const ProductCounter = styled('div', {
  padding: '3px',

  backgroundColor: '$gray900',
  borderRadius: '50%',
  position: 'absolute',
  bottom: '1.75rem',
  left: '2rem',

  span: {
    width: '24px',
    height: '24px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '$green500',
    borderRadius: '50%',
    bottom: '31px',
    left: '34px',
    color: '$white',
  },
});

import { styled, gradient } from '..';

export const ShoppingCartContainer = styled('div', {
  width: '30rem',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',

  position: 'absolute',
  right: 0,
  top: 0,
  zIndex: '999',

  backgroundColor: '$gray800',
});

export const IconButton = styled('button', {
  display: 'flex',
  color: '$gray500',
  margin: '1.5rem 1.5rem 1.5rem auto',
});

export const ShoppingCartList = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  padding: '0 3rem',

  h1: {
    fontSize: '$lg',
    fontWeight: 'bold',
    color: '$gray100',
  },

  ul: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',

    listStyle: 'none',
    marginTop: '2rem',
    height: '94px',
  },

  li: {
    display: 'flex',
    alignItems: 'center',
  },
});

export const ImageCard = styled('div', {
  background: gradient,
  borderRadius: 8,
  marginRight: '1.25rem',
});

export const ProdctInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  height: '94px',

  p: {
    fontSize: '$md',
    fontWeight: 'normal',
    color: '$gray300',
  },

  strong: {
    fontSize: '$md',
    fontWeight: 'bold',
    color: '$gray100',
    marginTop: '-1.5rem',
  },

  button: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',

    border: 0,
    padding: 0,

    fontSize: '1rem',
    fontWeight: 'bold',
    color: '$green500',
  },
});

export const OrderSummary = styled('div', {
  width: '23rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  position: 'absolute',
  bottom: 48,

  '> div': {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },

  button: {
    width: '100%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$green500',

    padding: '1.25rem 0',
    marginTop: '3.6rem',

    color: '$white',
    fontWeight: 'bold',
    fontSize: '1.125rem',
  },
});

export const QuantityLabel = styled('p', {
  color: '$gray100',
  fontWeight: 'normal',
  fontSize: '1rem',
});

export const QuantityNumber = styled('p', {
  color: '$gray300',
  fontWeight: 'normal',
  fontSize: '1.125rem',
});

export const AmountLabel = styled('p', {
  color: '$gray100',
  fontWeight: 'bold',
  fontSize: '1.125rem',
});

export const AmountNumber = styled('strong', {
  color: '$gray100',
  fontWeight: 'bold',
  fontSize: '1.5rem',
});

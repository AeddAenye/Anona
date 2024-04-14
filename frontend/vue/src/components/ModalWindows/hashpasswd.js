import sha256 from 'crypto-js/sha256';

const hashPassword = (password) => {
  const salt = '5c19a69b028a2dec42bf1da313170728725f400ea16e5235442b71ff42554232dda38e70881f5384445ab6063781e5f5ee8686c473ab9cdcb1af4248c06a570d'
  const hash = sha256(password + salt).toString();
  return hash
}

export default hashPassword;
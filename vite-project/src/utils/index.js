export const token = () => {
  const token = localStorage.getItem('tokenId') || '';
  return token;
}
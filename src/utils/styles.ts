export const getFormElementStyle = (
  background1: string,
  background2: string,
  border: string,
) => {
  return `background-image:
      linear-gradient(${background1}, ${background2}),
      linear-gradient(
   to bottom right, ${border} 30%, transparent, ${border} 70%);
      background-clip: padding-box, border-box;
      background-size: cover;`;
};

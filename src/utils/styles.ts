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

export const getImage = (images: string[]) => {
  const random = Math.floor(Math.random() * images.length);

  return images[random];
};

export const getBlockBackground = (color1: string, color2: string) =>
  `background-image: linear-gradient(175.70deg, ${color1}bd 12.226%,${color2}b5 113.851%)`;

export const getNavBackground = (color1: string, color2: string) =>
  `background-image: linear-gradient(157.20deg, ${color1}f0 31.883%, ${color2}00 100%);`;

export const getDividerBackground = (color: string, isVertical = false) =>
  `background-image: linear-gradient(${isVertical ? "to bottom" : "to right"}, transparent, ${color}, transparent);`;

export const iconNameToKebab = (name: string) =>
  name
    .split("")
    .map((char, i) => {
      if (char === char.toLowerCase()) return char;

      return `${i === 0 ? "" : "-"}${char.toLowerCase()}`;
    })
    .join("");

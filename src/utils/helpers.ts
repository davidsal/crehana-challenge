// Converts a string of Unicode code points to an emoji
export const convertToEmoji = (emojiU: string) => {
  const codes = emojiU.split(' ').map((code) => {
    return parseInt(code.replace('U+', ''), 16);
  });
  return String.fromCodePoint(...codes);
};

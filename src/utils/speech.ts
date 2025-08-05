export const formatPunctuation = (text: string): string => {
  // Replace comands
  const replaced = text
    .replace(/\s*\bcomma\b/gi, ",")
    .replace(/\s*\bperiod\b/gi, ".")
    .replace(/\s*\bquestion mark\b/gi, "?")
    .replace(/\s*\bexclamation mark\b/gi, "!");

  // Make the first letter uppercase
  let result = replaced.trimStart();
  if (result.length > 0) {
    result = result[0].toUpperCase() + result.slice(1);
  }

  // Capital letter after punctuation marks
  result = result.replace(
    /([.?!\n]\s*)([a-z])/g,
    (_, sep, char) => sep + char.toUpperCase()
  );

  return result;
};

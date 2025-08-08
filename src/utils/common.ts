export const getFormattedDate = (date: Date) => {
  const formatter = new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return formatter.format(date);
};

export const getIsoGlobalDate = (date?: Date) => {
  const dateObj = date ? new Date(date) : new Date();

  return dateObj.toISOString(); // Example: "2025-07-30T16:23:00.000Z"
};

export const showError = (text: string) => {
  alert(`Error: ${text}`);
};

export const splitTextBySelection = (
  text: string,
  selectionStart: number,
  selectionEnd: number
): [string, string, string] => {
  const before = text.slice(0, selectionStart);
  const selected = text.slice(selectionStart, selectionEnd);
  const after = text.slice(selectionEnd);
  return [before, selected, after];
};

export const lowercaseFirstChar = (str: string): string => {
  // empty string
  if (!str) {
    return str;
  }

  return str[0].toLowerCase() + str.slice(1);
};

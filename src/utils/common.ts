export const getFormatedDate = (date: Date) => {
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

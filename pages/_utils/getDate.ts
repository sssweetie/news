export const getDate = (created_at: string) => {
  return new Intl.DateTimeFormat('ru').format(new Date(created_at));
};

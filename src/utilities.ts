export const formatDate = (date: Date) => {
  let dateObject = new Date(date).toLocaleDateString();
  return dateObject;
};

export const titleToRoute = (title: string) => {
  return title.toLowerCase().split(" ").join("-");
};

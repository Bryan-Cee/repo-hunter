export const User = {
  userId: (parent) => {
    return parent.userId;
  },
  username: (parent) => {
    return parent.username;
  },
  firstName: (parent) => {
    return parent.firstName;
  },
  lastName: async (parent) => {
    return parent.lastName;
  },
};

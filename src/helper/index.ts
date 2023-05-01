export const passwordCriteriaStatus = (password: string) => {
  if (password.length < 6 || !/\d/.test(password)) {
    return "weak";
  }
  if (password.length >= 6 && /\d/.test(password)) {
    return "normal";
  }
  if (password.length >= 8) {
    return "strong";
  }
};

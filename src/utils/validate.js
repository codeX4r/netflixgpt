export const validate = (email, password) => {
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password);

  if (!validEmail) return "enter a valid e mail address !";
  if (!validPassword) return "enter valid password !";

  return null;
};

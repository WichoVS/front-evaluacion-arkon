export const ValidateNumber = (input: string) => {
  let reg = /^\d{0,3}$/;
  if (!reg.test(input)) return false;
};

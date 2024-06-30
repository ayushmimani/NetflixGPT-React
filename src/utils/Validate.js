export const validatedata = (email, password, fullname) => {
  //this regex for email validation and test return true otr false
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  //this regex for password validation and test return true otr false
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  //this regex for full name validation and test return true otr false
  const isFullNameValid =
    /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(
      fullname
    );
  if (!isFullNameValid) return "Full Name is not valid";
  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password is not valid";
  return null;
};

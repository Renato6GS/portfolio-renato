export const getDataForm = ({ form }) => {
  const formData = new FormData(form);

  const data = [];
  for (const [, value] of formData) {
    data.push(value.trim());
  }

  const [name, email, message] = data;
  const userObj = {
    name,
    email,
    message,
  };

  return { userObj };
};

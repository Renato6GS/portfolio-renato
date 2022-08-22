export const sendEmail = async ({ name, email, message }) => {
  let sendCorrectly = true;
  try {
    const res = await fetch('/api/sendEmailApi', {
      body: JSON.stringify({
        name,
        email,
        message,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    if (!res.ok) throw new Error('Error sending email');
  } catch (error) {
    sendCorrectly = false;
    console.log(error);
  }

  return sendCorrectly;
};

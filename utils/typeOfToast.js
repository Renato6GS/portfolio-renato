import { toast } from 'react-toastify';

export const notifySuccess = () =>
  toast.success('Email send correctly! 😊', {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
  });

export const notifyError = () =>
  toast.error('The email could not be sent 😢', {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
  });

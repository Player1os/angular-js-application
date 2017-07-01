/* @flow */
import authErrorMessages from '../auth/errorMessages';
import { ValidationError } from '../lib/validation';


const validationErrorToMessage = error => ({
  message: authErrorMessages[error.name],
  values: error.params,
});

// Map promiseMiddleware rejected error to UI message.
// Unknown errors are reported so the developer can check what is wrong.
const errorToMessage = (error: Object) => {

  // Note all app validation errors are mapped to UI messages here.
  // With such design the app can have a lot of various different components,
  // and it's not a component responsibility to project an error to UI.
  if (error instanceof ValidationError) {
    return validationErrorToMessage(error);
  }

  // Return null for unknown error so it will be reported.
  return null;
};

export default errorToMessage;

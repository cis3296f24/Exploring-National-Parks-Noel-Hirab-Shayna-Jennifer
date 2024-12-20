/**
 * Validates form data and returns an object with error messages.
 * @param {Object} formData - The form data to validate.
 * @returns {Object} - An object containing validation error messages.
 */
export const validateProfile = (formData) => {
    const errors = {};
  
    if (!formData.userEmail) {
      errors.userEmailError = 'Email is required';
    }
    if (!formData.userPassword) {
      errors.userPasswordError = 'Password is required';
    }
    if (formData.userPassword !== formData.userPassword2) {
      errors.userPassword2Error = 'Passwords do not match';
    }
  
    return errors;
  };
  
  /**
   * Handles the save operation after form validation.
   * @param {Object} formData - The form data to save.
   */
  export const handleSave = (formData) => {
    console.log('Form data submitted:', formData);
    // Save data logic here, such as sending the data to an API
  };
  
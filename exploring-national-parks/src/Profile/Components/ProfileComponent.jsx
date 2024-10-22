/**
 * @module ProfileComponent
 * @memberof Profile
 * @returns {JSX.Element}
 */
import React, { useState } from 'react';
import { validateProfile, handleSave } from '../Functionality/Validation'; // Import functions from formValidation.js

const ProfileComponent = () => {
  // State for form fields and error messages
  const [formData, setFormData] = useState({
    userEmail: '',
    userPassword: '',
    userPassword2: '',
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission
  const insertSave = () => {
    const newErrors = validateProfile(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      handleSave(formData);
    }
  };

  return (
    <div className="insertArea">
      <table>
        <tbody>
          <tr>
            <td>Email Address</td>
            <td>
              <input
                type="text"
                id="userEmail"
                value={formData.userEmail}
                onChange={handleChange}
              />
            </td>
            <td className="error">{errors.userEmailError}</td>
          </tr>
          <tr>
            <td>Password</td>
            <td>
              <input
                type="password"
                id="userPassword"
                value={formData.userPassword}
                onChange={handleChange}
              />
            </td>
            <td className="error">{errors.userPasswordError}</td>
          </tr>
          <tr>
            <td>Retype Your Password</td>
            <td>
              <input
                type="password"
                id="userPassword2"
                value={formData.userPassword2}
                onChange={handleChange}
              />
            </td>
            <td className="error">{errors.userPassword2Error}</td>
          </tr>
          <tr>
            <td>
              <button onClick={insertSave}>Save</button>
            </td>
            <td className="error">{errors.recordError}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProfileComponent;
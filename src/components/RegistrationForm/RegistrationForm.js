import React, { useReducer } from 'react';
import { formReducer, initialState } from './formReducer';

const RegistrationForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { step, formData, isSubmitted } = state;

  // Validation Logic (Bonus Requirement)
  const isStep1Valid = formData.name && formData.email;
  const isStep2Valid = formData.username && formData.password;

  const handleChange = (e) => {
    dispatch({
      type: 'UPDATE_FIELD',
      field: e.target.name,
      value: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <div className="form-container">
        <h2>Registration Successful!</h2>
        <button onClick={() => dispatch({ type: 'RESET_FORM' })}>Register Again</button>
      </div>
    );
  }

  return (
    <div className="form-container">
      {/* Progress Indicator (Bonus) */}
      <p>Step {step} / 3</p>
      <div className="progress-bar" style={{ width: `${(step / 3) * 100}%`, height: '5px', background: 'blue' }} />

      <hr />

      {/* Step 1: Personal Details */}
      {step === 1 && (
        <section>
          <h3>Step 1: Personal Details</h3>
          <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
          <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <button 
            disabled={!isStep1Valid} 
            onClick={() => dispatch({ type: 'NEXT_STEP' })}
          >
            Next
          </button>
        </section>
      )}

      {/* Step 2: Account Details */}
      {step === 2 && (
        <section>
          <h3>Step 2: Account Details</h3>
          <input name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
          <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} />
          <button onClick={() => dispatch({ type: 'PREVIOUS_STEP' })}>Back</button>
          <button 
            disabled={!isStep2Valid} 
            onClick={() => dispatch({ type: 'NEXT_STEP' })}
          >
            Next
          </button>
        </section>
      )}

      {/* Step 3: Review & Submit */}
      {step === 3 && (
        <section>
          <h3>Step 3: Review & Submit</h3>
          <div className="review-box">
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Username:</strong> {formData.username}</p>
          </div>
          <button onClick={() => dispatch({ type: 'PREVIOUS_STEP' })}>Back</button>
          <button onClick={() => dispatch({ type: 'SUBMIT_FORM' })}>Submit</button>
        </section>
      )}
    </div>
  );
};

export default RegistrationForm;
import React, { useState } from 'react';

function CreateAccountPage() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: ''
  });

  // function to handle form input changes
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  }

  // function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    // validate form input
    // show success message
    // show add another account button
    // clear form input
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Create Account</h5>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" className="form-control" id="email" name="email" value={formValues.email} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" name="password" value={formValues.password} onChange={handleInputChange} />
                </div>
                <button type="submit" className="btn btn-primary">Create Account</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccountPage;

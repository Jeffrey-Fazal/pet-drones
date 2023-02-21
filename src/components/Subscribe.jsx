import React, { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // assemble the form data
    const formData = new FormData();
    formData.append('EMAIL', email);
    formData.append('MERGE1', firstName);
    formData.append('MERGE2', lastName);

    // submit the form data to Mailchimp
    const response = await fetch('https://gmail.us8.list-manage.com/subscribe/post?u=a062e96fae17da3a6604394b2&id=10a22853b8', {
      method: 'POST',
      body: formData,
      mode: 'no-cors'
    });

    // handle the response
    const responseBody = await response.text();
    console.log(responseBody);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3 className="form-title">Join our email list for future updates.</h3>
      <div className="container">
        <div className="form-field">
          <label className="label" htmlFor="first-name-input">
            First Name
          </label>
          <input
            id="first-name-input"
            className="form-input"
            type="text"
            placeholder="Jane"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label className="label" htmlFor="last-name-input">
            Last Name
          </label>
          <input
            id="last-name-input"
            className="form-input"
            type="text"
            placeholder="Doe"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label className="label" htmlFor="email-input">
            Email
          </label>
          <input
            id="email-input"
            className="form-input"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>

      <button className="submit-button" type="submit">
        Subscribe
      </button>
    </form>
  );
};

export default Subscribe;

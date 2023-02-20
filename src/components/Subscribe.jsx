import React, { Component } from 'react';
import { Button, TextField, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const FormContainer = styled('form')({
  width: '100%',
  marginTop: 8,
});

const SubmitButton = styled(Button)({
  margin: '24px 0px 16px',
});

class SubscriptionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      emailError: false,
      errors: {}
    };
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = (event) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(event.target.value);
    this.setState({ email: event.target.value, emailError: !isValidEmail });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const errors = this.validateForm();
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    }

    console.log(this.state.name, this.state.email);

    // TODO: Integrate with Mailchimp API
  };

  validateForm = () => {
    const errors = {};
    const { name, email } = this.state;

    if (!name) {
      errors.name = 'Please enter your preferred name.';
    }

    if (!email) {
      errors.email = 'Please enter your email address.';
    } else if (!this.isValidEmail(email)) {
      errors.email = 'Please enter a valid email address.';
    }

    return errors;
  };

  isValidEmail = (email) => {
    // This is a simple email validation regex. It does not catch all edge cases.
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  render() {
    const { name, email, errors } = this.state;

    return (
      <FormContainer onSubmit={this.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="name"
              label="Preferred Name"
              name="name"
              value={name}
              onChange={this.handleNameChange}
              error={errors.name ? true : false}
              helperText={errors.name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              onChange={this.handleEmailChange}
              error={this.state.emailError || errors.email ? true : false}
              helperText={
                this.state.emailError ? 'Please enter a valid email address.' : errors.email
              }
            />
          </Grid>
        </Grid>
        <SubmitButton type="submit" fullWidth variant="contained" color="primary">
          Subscribe
        </SubmitButton>
      </FormContainer>
    );
  }
}

export default SubscriptionForm;

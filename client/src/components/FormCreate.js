import React from 'react';
import { Field, reduxForm } from 'redux-form';

class FormCreate extends React.Component {
  renderError = ({ error, touched }) => {
    if (error && touched) {
      return <div className="d-block invalid-feedback">{error}</div>;
    }

    return <div>&nbsp;</div>;
  };

  renderInput = ({ input, label, meta }) => {
    return (
      <div className="mb-3">
        <label htmlFor="">{label}</label>
        <input className="form-control" {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
        <Field
          name="title"
          component={this.renderInput}
          label="Enter a title"
        />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter a description"
        />
        <button className="btn btn-success" type="submit">
          Send
        </button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'Please enter a title';
  }

  if (!formValues.description) {
    errors.description = "Please enter a description'";
  }

  return errors;
};

export default reduxForm({
  form: 'formCreate',
  validate,
})(FormCreate);

import React from 'react';
import { connect } from 'react-redux';
import FormCreate from '../FormCreate';

import { createStream } from '../../actions';

class StreamCreate extends React.Component {
  onFormSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a stream</h3>
        <FormCreate onSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);

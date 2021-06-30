import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, updateStream } from '../../actions';

import FormCreate from '../FormCreate';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onFormSubmit = (formValues) => {
    this.props.updateStream(this.props.stream.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading..</div>;
    }

    return (
      <div>
        <h3>Edit Stream</h3>
        <FormCreate
          onSubmit={this.onFormSubmit}
          initialValues={this.props.stream}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, updateStream })(
  StreamEdit
);

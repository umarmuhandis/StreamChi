import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteStream, fetchStream } from '../../actions';
import history from '../../history';
import Modal from '../Modal';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderContent = () => {
    if (!this.props.stream) {
      return 'Do you wanna delete a stream?';
    }

    return `Do you wanna delete a stream with a title of ${this.props.stream.title}`;
  };

  renderButtons = () => (
    <React.Fragment>
      <button
        onClick={() => this.props.deleteStream(this.props.match.params.id)}
        type="button"
        className="btn btn-danger"
        data-bs-dismiss="modal"
      >
        Delete
      </button>
      <Link to="/streams" type="button" className="btn btn-primary">
        Cancel
      </Link>
    </React.Fragment>
  );
  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        renderAction={this.renderButtons()}
        onDismiss={() => history.push('/streams')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(userId, streamId) {
    if (this.props.currentUserId === userId) {
      return (
        <div>
          <Link
            to={`/streams/edit/${streamId}`}
            className="btn btn-info text-white me-1"
          >
            Edit Stream
          </Link>
          <Link to={`/streams/delete/${streamId}`} className="btn btn-danger">
            Delete Stream
          </Link>
        </div>
      );
    }

    return null;
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div className="mt-5 text-end">
          <Link className="btn btn-info text-white" to="/streams/create">
            Create stream
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return (
      <div className="list-group">
        {this.props.streams.map((stream) => {
          return (
            <button
              href="."
              className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              aria-current="true"
              key={stream.id}
            >
              <div>
                <i className="bi bi-camera-video"></i>
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">
                    <Link
                      className="text-decoration-none text-dark"
                      to={`/streams/${stream.id}`}
                    >
                      {stream.title}
                    </Link>
                  </h5>
                </div>
                <p className="mb-1">{stream.description}</p>
              </div>
              {this.renderAdmin(stream.userId, stream.id)}
            </button>
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div className="stream-list">
        <h2 className="display-3">Streams</h2>
        {this.renderList()}
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);

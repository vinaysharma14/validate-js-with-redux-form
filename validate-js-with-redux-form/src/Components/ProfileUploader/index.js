import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';

import './style.scss';

class ProfileUploader extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      uploadedProfile: '',
    }
  }

  getBase64 = (file, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(file);
  }

  handleProfileUpload = (event) => {
    const { input, showToastr, } = this.props;
    const file = event.target.files[0];

    if (!file.type) {
      showToastr('Invalid Profile', 'Formats allowed: JPEG');

      return;
    }

    const fileType = file.type.split('/');
    if (fileType[0] !== 'image' || fileType[1] !== 'jpeg') {
      showToastr('Invalid Profile', 'Formats allowed: JPEG');

      return;
    }

    input.onChange(event);
    this.getBase64(file, base64 => {
      this.setState({
        uploadedProfile: base64,
      });
    });
  }

  removeProfile = () => {
    this.inputRef.current.value = '';
    this.setState({
      uploadedProfile: '',
    });
  }

  render() {
    const {
      customClass,
    } = this.props;

    const {
      uploadedProfile,
    } = this.state;

    return (
      <div className={`profile-uploader-container ${customClass}`}>
        <div
          className="profile-container"
          style={{ backgroundImage: `url(${uploadedProfile})`, }}
        >
          {
            !uploadedProfile &&
            <FontAwesomeIcon
              icon={faUser}
              size="7x"
              transform="down-1.3"
            />
          }
        </div>
        <div className="profile-actions">
          <label htmlFor="profile-uploader">
            <FontAwesomeIcon
              className="snippet-icon"
              icon={faPen}
            />

            <input
              id="profile-uploader"
              type="file"
              ref={this.inputRef}
              onChange={this.handleProfileUpload}
              accept="image/jpeg"
            />
          </label>

          {
            uploadedProfile &&
            <span>
              <FontAwesomeIcon
                className="snippet-icon"
                icon={faTimes}
                onClick={this.removeProfile}
              />
            </span>
          }
        </div>
      </div>
    )
  }
}

ProfileUploader.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  input: PropTypes.object.isRequired,
  customClass: PropTypes.string,
  showToastr: PropTypes.func.isRequired,
}

ProfileUploader.defaultProps = {
  customClass: '',
}

export default ProfileUploader;

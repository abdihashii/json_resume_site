import React, { useContext } from 'react';
import PropTypes from 'prop-types';

// External components
import { IKImage } from 'imagekitio-react';

// Contexts
import { ResumeContext } from '../../../Contexts/ResumeContext';

// CSS
import './avatar.scss';

const Avatar = ({ imgPath }) => {
  const { urlEndpoint } = useContext(ResumeContext);

  return (
    <div className="avatar">
      <IKImage
        {...{ urlEndpoint }}
        path={imgPath}
        lqip={{
          active: true,
          quality: 5,
        }}
        transformation={[
          {
            h: 160,
            w: 160,
            fo: 'face',
          },
          {
            radius: 'max',
          },
        ]}
      />
    </div>
  );
};

export default Avatar;

Avatar.propTypes = {
  imgPath: PropTypes.string.isRequired,
};

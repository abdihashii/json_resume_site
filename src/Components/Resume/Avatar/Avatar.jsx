import React, { useContext } from 'react';

// External components
import { IKImage } from 'imagekitio-react';

// Contexts
import { ResumeContext } from '../../../Contexts/ResumeContext';

// CSS
import './avatar.scss';

const Avatar = () => {
  const { urlEndpoint } = useContext(ResumeContext);

  return (
    <div className="avatar">
      <IKImage
        {...{ urlEndpoint }}
        path="IMG_2432_ZFrcBTWZ2j.jpeg"
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

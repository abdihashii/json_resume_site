import React, { useContext } from 'react';

// External components
import { IKImage } from 'imagekitio-react';

// Contexts
import { ResumeContext } from '../../../Contexts/ResumeContext';

// CSS
import './avatar.scss';

// Images
// import abdirahman from '../../../img/haji_yosemite.png';

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

      {/* <img
        src="https://ik.imagekit.io/haji/abdirahmanhaji_com/IMG_2432_ZFrcBTWZ2j.jpeg"
        alt="it me"
      /> */}
    </div>
  );
};

export default Avatar;

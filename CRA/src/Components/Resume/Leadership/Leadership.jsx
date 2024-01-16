import React, { useContext } from 'react';

// External components
import { Element } from 'react-scroll';

// Contexts
import { ResumeContext } from '../../../Contexts/ResumeContext';

const Leadership = () => {
  const { leadership } = useContext(ResumeContext);

  return (
    <Element className="resume-section" name="leadership">
      <div className="resume-content">
        <h2 className="mb-5">Leadership &amp; Volunteering</h2>

        <ul className="fa-ul mb-0">
          {leadership.map((leadershipItem, key) => {
            const { type, title, highlights } = leadershipItem;

            return (
              <li>
                {type === 'leadership' ? (
                  <i class="fa-li far fa-lightbulb"></i>
                ) : (
                  <i class="fa-li fa fa-heart text-info"></i>
                )}
                {title}
                <ul {...{ key }} style={{ paddingInlineStart: '2.5rem' }}>
                  {highlights.map((highlight, key) => {
                    return <li {...{ key }}>{highlight}</li>;
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </Element>
  );
};

export default Leadership;

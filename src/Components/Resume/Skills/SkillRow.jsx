import React from 'react';

const SkillRow = ({ skill }) => {
  const { title, keywords } = skill;
  return (
    <div className="skill-row">
      <p className="skill-title">{title}</p>
      {keywords.map((keyword, key) => {
        return (
          <p className="skill-keyword" {...{ key }}>
            {keyword}
          </p>
        );
      })}
    </div>
  );
};

export default SkillRow;

import React from 'react';

const Definitions = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <dl>
      {data.map((item) => (
        <React.Fragment key={item.id}>
          <dt>{item.dt}</dt>
          <dd>{item.dd}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
};

export default Definitions;

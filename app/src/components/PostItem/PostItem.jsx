import React from 'react';

const PostItem = ({ id, title, body }) => {
  return (
    <li className="list-group-item mb-3 shadow-sm rounded">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1 text-primary text-capitalize">{title}</h5>
        <small className="text-muted">ID: {id}</small>
      </div>
      <p className="mb-1 mt-2">{body}</p>
    </li>
  );
};

export default PostItem;

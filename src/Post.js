import React from 'react';
import moment from 'moment';

const Post = props => {
  const data = props.location.state;
  return (
    <div className="post">
      <h1>{data.title}</h1>
      <hr />
      <div className="author">
        <img src={data.author.profile_image} alt="Author" />
        <div>
          Published by <strong>{data.author.first_name} {data.author.last_name}</strong>
          {' '} on {' '}
          {moment(data.published).format("MMMM Do, YYYY")}
        </div>
      </div>
      <hr />
      <div dangerouslySetInnerHTML={{__html: data.body}} />
    </div>
  );
}

export default Post;
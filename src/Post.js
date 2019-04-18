import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

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
      <hr />
      <Link to="/blog">&larr; Back to the posts list</Link>
    </div>
  );
}

export default Post;
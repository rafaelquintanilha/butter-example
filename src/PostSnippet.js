import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const PostSnippet = props => {
  return (
    <div className="post-snippet">
      <h3><Link to={{
        pathname: `/blog/${props.slug}`,
        state: props
      }}>{props.title}</Link></h3>
      <p>
        {props.summary}
      </p>
      <div>
        <div>By <strong>{props.author.first_name} {props.author.last_name}</strong></div>
        <span className="publi-date">Published on {moment(props.published).format("MMMM Do, YYYY")}</span>
      </div>
    </div>
  );
}

export default PostSnippet;
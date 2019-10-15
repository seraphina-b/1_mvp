import React from 'react';
import moment from 'moment';

const FullArticle = ({ article }) => {

  // extreaer datos
  const { urlToImage, title, author, source, publishedAt, content } = article;

  // show image only if available - use ternary operator

  const image = urlToImage ? (
    <div>
      <img src={urlToImage} alt={title} className="img-responsive fit-image" />

    </div>
  ) : null;

  // show author only if available - use ternary operator

  const showAuthor = author ? (
    <h6 className="source-name"><i class="fas fa-user"></i> Written by {author} -</h6>

  ) : null;

  return (
    <div className='container bg-white news-container'>

      {image}
      <h1 className="font-weight-bold m3 mt-3 mb-3">{title}</h1>
      <div className="written-date">
        {showAuthor}<h6 className="source-name">{source.name}</h6><span>
          - {moment(publishedAt).format('MMMM Do YYYY, H:mm')}h
        </span>
      </div>

      <p >{content}</p>

    </div>
  );
}

export default FullArticle;
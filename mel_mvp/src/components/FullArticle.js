import React from 'react';

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
    <h6 className="source-name">{author},</h6>

  ) : null;

  return (
    <div className='container bg-white news-container'>

      {image}
      {showAuthor}<h6 className="source-name">{source.name}</h6><span>
        {publishedAt}
      </span>



      <h1 className="font-weight-bold">{title}</h1>
      <p >{content}</p>

    </div>
  );
}

export default FullArticle;
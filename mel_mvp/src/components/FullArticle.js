import React from 'react';

const FullArticle = ({ article }) => {

  // extreaer datos
  const { urlToImage, title, author, source, publishedAt, content } = article;

  // show image only if available - use ternary operator

  const image = urlToImage ? (
    <div>
      <img src={urlToImage} alt={title} />

    </div>
  ) : null;

  return (
    <div className='container bg-white news-container'>

      {image}
      <h6 className="source-name">{author}, {source.name}.</h6>
      <p>{publishedAt}</p>

      <h1 className="font-weight-bold">{title}</h1>
      <p >{content}</p>

    </div>
  );

}

export default FullArticle;
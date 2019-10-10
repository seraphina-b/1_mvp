import React from 'react';

const Article = ({ article }) => {

  // extreaer datos
  const { urlToImage, url, title, description, source } = article;

  // show image only if available - use ternary operator

  const image = urlToImage ? (
    <div>
      <img src={urlToImage} alt={title} className='card-img-top' />
      <h6 className="source-name">{source.name}</h6>

    </div>
  ) : null;

  return (
    <div className='col-12 col-md-6 col-lg-4'>
      <div className='card'>
        {image}
        <div className="card-body">
          <h5 className="card-title font-weight-bold">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={url} target='_blank' rel='noopener noreferrer' className="btn btn-primary">Read Article</a>
        </div>
      </div>
    </div>
  );

}

export default Article;
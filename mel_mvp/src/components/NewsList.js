import React from 'react';
import Article from './Article';

const NewsList = ({ news }) => { //news es el prop que se pasa dsd app.js
  return (
    <div className='row'>
      {news.map(article =>
        <Article
          key={article.url} // url as key bc is unique
          article={article} />)}
    </div>
  );

}

export default NewsList;

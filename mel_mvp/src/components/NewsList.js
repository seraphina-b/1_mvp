import React from 'react';
import New from './New';

const NewsList = ({ news }) => { //news es el prop que se pasa dsd app.js
  return (
    <div className='row'>
      {news.map(x => (
        <New /> //acabar esto, no funciona!
      ))}
    </div>
  );

}

export default NewsList;

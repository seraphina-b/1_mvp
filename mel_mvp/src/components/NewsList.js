import React, { Component } from 'react';
import Article from './Article';
import FullArticle from './FullArticle';

// const NewsList = ({ news }) => { //news es el prop que se pasa dsd app.js
//   return (
//     <div className='row'>
//       {news.map(article =>

//         <Article
//           key={article.url} // url as key bc is unique
//           article={article}
//         />
//       )}

//     </div>
//   );
// }

// export default NewsList;


class NewsList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      defaultView: true
    }
  }

  render() {
    return (
      <div >

        {this.state.defaultView ? (
          <div className='row'>
            {this.props.news.map(article =>

              <Article
                key={article.url} // url as key bc is unique
                article={article}
              />
            )}
          </div>

        ) : (
            null //aquí irá FullArticle ??, cuando defaultView sea false? tengo q pasarle las props. Las props que tengo que pasar son las mismass que les paso al componente "Article", debo pasar el resultado de map, es decir: article.
            //<FullArticle
            // />
          )
        }
      </div>

    )
  }
}

export default NewsList;

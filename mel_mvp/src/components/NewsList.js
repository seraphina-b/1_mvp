import React, { Component } from 'react';
import Article from './Article';
import FullArticle from './FullArticle';

class NewsList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      defaultView: true,
      selectedArticle: {}
    }
  }

  selectArticle(article) { //selectArticle acepta un argumento "article", y lo usa para cambiar el estado de selectedArticle
    this.setState({
      defaultView: false,
      selectedArticle: article
    })
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
                handleRead={(selected) => this.selectArticle(selected)} //handleRead en Article.js envía al padre NewsList.js el artículo seleccionado para renderizar en grande, aquí lo he llamado selected. Le paso "selected" al método selectedArticle()
              />
            )}
          </div>

        ) : (

            <FullArticle article={this.state.selectedArticle} /> //a FullArticle.js le pasamos "article" como prop, que es el estado de selectedArticle, que a su vez (y resumiendo) es el artículo que nos llega de Article.js
          )
        }
      </div>

    )
  }
}

export default NewsList;

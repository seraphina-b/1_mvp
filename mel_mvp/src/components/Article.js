import React, { Component } from 'react';
import FullArticle from './FullArticle'

// const Article = ({ article }) => {

//   // extreaer datos
//   const { urlToImage, url, title, description, source } = article;

//   // openFullArticle(){
//   //   let fullArticle = <FullArticle article={article} />;
//   //   window.open(fullArticle, '_blank');
//   // }

//   // show image only if available - use ternary operator

//   const image = urlToImage ? (
//     <div>
//       <img src={urlToImage} alt={title} className='card-img-top' />
//       <h6 className="source-name">{source.name}</h6>

//     </div>
//   ) : null;

//   return (
//     <div className='col-12 col-md-6 col-lg-4'>
//       <div className='card'>
//         {image}
//         <div className="card-body">
//           <h5 className="card-title font-weight-bold">{title}</h5>
//           <p className="card-text">{description}</p>
//           <a
//             href={url}
//             target='_blank'
//             rel='noopener noreferrer'
//             className="btn btn-primary text-white"
//           // onClick={this.openFullArticle()}
//           >Read Article</a>
//           <a
//             className="btn btn-primary text-white"
//           // onClick={}
//           >Add</a>

//         </div>
//       </div>
//     </div>
//   );

// }

// export default Article;


class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  handleRead() {

  }

  render() {
    const image = this.props.article.urlToImage ? (
      <div>
        <img src={this.props.article.urlToImage} alt={this.props.article.title} className='card-img-top' />
        <h6 className="source-name">{this.props.article.source.name}</h6>

      </div>
    ) : null;

    return (
      <div className='col-12 col-md-6 col-lg-4'>
        <div className='card'>
          {image}
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{this.props.article.title}</h5>
            <p className="card-text">{this.props.article.description}</p>
            <button
              // target='_blank'
              // rel='noopener noreferrer'
              className="btn btn-primary text-white"
            // onClick={}  la función que se invoque en onclick (handleRead()) tiene que ...????
            >Read Article</button>
            <button
              className="btn btn-primary text-white"
            // onClick={}
            >Add</button>

          </div>
        </div>
      </div>
    )
  }
}

export default Article;




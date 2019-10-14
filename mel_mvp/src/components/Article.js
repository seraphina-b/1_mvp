import React, { Component } from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon
} from 'react-share';

class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
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
              className="btn btn-primary text-white"
              onClick={() => this.props.handleRead(this.props.article)}
            // handleRead está enviando a su padre NewsList.js las props ARTICLE que le llegan del padre 
            >Read Article</button>
            <div className="social-media">
              <FacebookShareButton url={this.props.article.url}>
                <FacebookIcon size={26} round={true} />
              </FacebookShareButton>
              <TwitterShareButton url={this.props.article.url}>
                <TwitterIcon size={26} round={true} />
              </TwitterShareButton>
              <WhatsappShareButton url={this.props.article.url}>
                <WhatsappIcon size={26} round={true} />
              </WhatsappShareButton>
              <LinkedinShareButton url={this.props.article.url}>
                <LinkedinIcon size={26} round={true} />
              </LinkedinShareButton>
            </div>

            {/* <button
              className="btn btn-primary text-white"
            // onClick={}
            >Add</button>*/}

          </div>
        </div>
      </div>
    )
  }
}

export default Article;




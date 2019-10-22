import React, { Component } from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
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

  saveArticle = () => {
    fetch("/api/news", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
        urlToImage: this.props.article.urlToImage,
        url: this.props.article.url,
        title: this.props.article.title,
        author: this.props.article.author,
        source: this.props.article.source,
        publishedAt: this.props.article.publishedAt,
        description: this.props.article.description
      })
    })
    .catch(error => {
      console.log(error);
    });
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
            <div className="read-share">
              <button
                className="btn btn-primary text-white"
                onClick={() => this.props.handleRead(this.props.article)}
              // handleRead está enviando a su padre NewsList.js las props ARTICLE que le llegan del padre 
              >Read</button>
              <div className="social-media">
                <FacebookShareButton url={this.props.article.url}>
                  <FacebookIcon className="sm-icon" size={26} round={true} />
                </FacebookShareButton>
                <TwitterShareButton url={this.props.article.url}>
                  <TwitterIcon className="sm-icon" size={26} round={true} />
                </TwitterShareButton>
                <WhatsappShareButton url={this.props.article.url}>
                  <WhatsappIcon className="sm-icon" size={26} round={true} />
                </WhatsappShareButton>
                <LinkedinShareButton url={this.props.article.url}>
                  <LinkedinIcon className="sm-icon" size={26} round={true} />
                </LinkedinShareButton>
                {/*<RedditShareButton url={"https://google.com"}>
                  <LinkedinIcon className="sm-icon" size={26} round={true}/>
    </RedditShareButton>*/}
                <button className="btn btn-light" onClick={this.saveArticle}>Save me</button>
                

              </div>
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




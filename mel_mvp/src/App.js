import React, { Component } from 'react';
import Header from './components/Header';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

// import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      news: [],
    }
  }

  componentDidMount() {
    this.getNews();
  }

  getNews = async (category = 'general') => { //general is the default value for category
    const key = '3e11a22e58cd4a75bfbcb6a7b432027a'
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${key}`;

    const answer = await fetch(url);
    const news = await answer.json();

    this.setState({
      news: news.articles,
    })
    console.log(news.articles);
  }


  render() {
    return (
      <div>
        <Header
          title='News API'
        />

        <div className='container bg-white news-container'> {/*need bootsrap class CONTAINER, dentro ROW (NewsList.js) y luego COL (Article.js)*/}
          <Categories
            getNews={this.getNews}
          />
          <NewsList
            news={this.state.news}
          />
        </div>
      </div>
    )
  }
}


export default App;

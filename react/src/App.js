import React, { Component } from 'react';
import Navbar from './components/Navbar';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import Footer from './components/Footer';

// import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      defaultView: true,
      news: [],
      filteredNews: [],
      search: '',
      loading: false,
    }
  }

  componentDidMount() {
    this.getNews();
  }

  getNews = async (category = 'general') => { //general is the default value for category
    const key = '3e11a22e58cd4a75bfbcb6a7b432027a'
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${key}`;

    this.setState({
      loading: true,
    })

    const answer = await fetch(url);
    const news = await answer.json();

    this.setState({
      news: news.articles,
      filteredNews: news.articles.filter(item => {
        if (item.title.toLowerCase().includes(this.state.search.toLowerCase())) {
          return true
        }
        return false
      }),
      loading: false,
    })
    console.log(news.articles);
    console.log(this.state.filteredNews);
  }

  updateView(newView) {
    this.setState({
      defaultView: newView,
    })
  }

  updateSearch(newSearch) {
    this.setState({
      search: newSearch,
      filteredNews: this.state.news.filter(item => {
        if (item.title.toLowerCase().includes(newSearch.toLowerCase())) {
          return true
        }
        return false
      })
    })
  }

  render() {
    return (
      <div>
        <Navbar
          title='News US'
          search={this.state.search}
          updateSearch={(newSearch) => this.updateSearch(newSearch)}
        />

        <div className='container bg-light news-container'> {/*need bootsrap class CONTAINER, dentro ROW (NewsList.js) y luego COL (Article.js)*/}
          <Categories
            getNews={this.getNews}
            updateView={(newView) => this.updateView(newView)}
          />
          {/*I it's NOT loading show NewsList, otherwise show spinner*/}
          {!this.state.loading ? (
            <NewsList
              news={this.state.filteredNews}
              defaultView={this.state.defaultView}
              updateView={(newView) => this.updateView(newView)}
            />
          ) : (
              <div className="d-flex justify-content-center">
                <div className="spinner-border text-success" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )}


        </div>

        <Footer className='container' />

      </div>
    )
  }
}
export default App;

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
      search: ''
    }
  }

  componentDidMount() {
    this.getNews();
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      filteredNews: this.state.news.filter(item => {
        if (item.title.includes(this.state.search)) {
          return true
        }
        return false
      })
    });
    console.log(this.state.search);
  }

  getNews = async (category = 'general') => { //general is the default value for category
    const key = '3e11a22e58cd4a75bfbcb6a7b432027a'
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${key}`;

    const answer = await fetch(url);
    const news = await answer.json();

    this.setState({
      news: news.articles,
      filteredNews: news.articles.filter(item => {
        if (item.title.includes(this.state.search)) {
          return true
        }
        return false
      })
    })
    console.log(news.articles);
    console.log(this.state.filteredNews);

  }

  updateView(newView) {
    this.setState({
      defaultView: newView,
    })
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value

      //'name' corresponde a cada KEY dentro del objeto 'state'. Este 'name' tiene que coincidir con el valor del ATRIBUTO 'name' de cada input. Es decir, 'event.target.name' debe ser los mismo/refierir al atributo name que pones en cada input.
    });
    console.log(this.state.search);
  }

  render() {
    return (
      <div>
        <Navbar
          title='News US'
        />

        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2"
            name="search"
            type="text"
            placeholder="Search"
            onChange={e => this.handleInputChange(e)}
          />
          <button className="btn btn-success my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button>
        </form>

        <div className='container bg-light news-container'> {/*need bootsrap class CONTAINER, dentro ROW (NewsList.js) y luego COL (Article.js)*/}
          <Categories
            getNews={this.getNews}
            updateView={(newView) => this.updateView(newView)}
          />
          <NewsList
            news={this.state.filteredNews}
            defaultView={this.state.defaultView}
            updateView={(newView) => this.updateView(newView)}
          />
        </div>

        <Footer className='container' />

      </div>
    )
  }
}

export default App;

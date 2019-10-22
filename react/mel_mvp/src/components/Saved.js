import React from "react";

class Saved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    }
    componentDidMount = () => {
        fetch("/api/news")
          .then(res => res.json())
          .then(json => {
              this.setState({
                  articles: json
              });
          });
    }

    render() {
        return <div>
            Testing Testing 123
        </div>
    }
}

export default Saved;
'use strict';

const e = React.createElement;

class ClaimLink extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: '',
    }
  }

  componentDidMount() {
    fetch('/login-status')
      .then(response => response.json())
      .then((loginStatus) => {
        if (loginStatus.isLoggedIn) {
          this.setState({ hits: '/feed.html'}, () => {console.log("state updated:", this.state.hits)});
        }
        else {
          this.setState({ hits: '/login'});
        }
      })   
  }
  
  render() {
    return(
    <a href={this.state.hits}>Claim Requests</a>);
  }
}

const domContainer = document.querySelector('#claim-button');
ReactDOM.render(e(ClaimLink), domContainer);
'use strict';

const e = React.createElement;

class ClaimLink extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: '',
      isLoading: false,
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    fetch('/login-status')
      .then(response => response.json())
      .then((loginStatus) => {
        if (loginStatus.isLoggedIn) {
          this.setState({ hits: '/feed.html', isLoading: false });
        }
        else {
          this.setState({ hits: '/login', isLoading: false });
        }
      })   
  }
  
  render() {
    if(this.state.isLoading)
    {
      return <p> </p>;
    }
    return(
    <a href={this.state.hits}>Claim Requests</a>);
  }
}

const domContainer = document.querySelector('#claim-button');
ReactDOM.render(e(ClaimLink), domContainer);
'use strict';

const e = React.createElement;

class RequestLink extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: '',
    }
  }
 
  /**
 * Creates an anchor element.
 * @param {string} url
 * @return {string} Anchor element
 */
  createLink = (url) => {
    const link = url;
    return link;
  }

  componentDidMount() {
    fetch('/login-status')
      .then(response => response.json())
      .then((loginStatus) => {
        if (loginStatus.isLoggedIn) {
          this.setState({ hits: createLink('/user-page.jsp?user=' + loginStatus.username)}, () => {console.log("state updated:", this.state.hits)});
        }
        else {
          this.setState({ hits: '/login'});
        }
      })   
  }

  render() {
    return(
    <a href={this.state.hits}>Request Service</a>);
  }
}

const domContainer = document.querySelector('#request-button');
ReactDOM.render(e(RequestLink), domContainer);
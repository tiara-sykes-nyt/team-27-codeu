'use strict';

const e = React.createElement;

class NavigationBar extends React.Component{
  render() {
    return (
      <nav>
      <ul id="navigation">

        <li><a className="nav-link" href="/">Home</a></li>
        <li><a className="nav-link" href="/aboutus.html">About Us</a></li>
        <li><a className="nav-link" href="/feed.html">Requests</a></li>

      </ul>
    </nav>
    );
  }
}

const domContainer = document.querySelector('#navigation-bar');
ReactDOM.render(e(NavigationBar), domContainer);

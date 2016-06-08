import {default as React, Component} from 'react';
import classNames from 'classnames';
import {Link} from 'react-router';

import mark from './mark.svg';
import './styles';

class Navigation extends Component {

  constructor(props, context) {
    super(props, context);
    this.navItems = ['index', 'about', 'resume', 'portfolio']; // @todo: generate links based off of these.
    this.state = {
      path: this.getPath(props.location.pathname),
      pageTitle: this.getPageTitle(this.props),
      showNav: false
    };

    console.log(this.state.pageTitle);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handlePortfolioClick = this.handlePortfolioClick.bind(this);
  }

  handleCloseClick() {
    this.setState({showNav: false});
  }

  // @todo: make this generic.
  handlePortfolioClick(e) {
    if (!this.state.showNav && this.state.path === 'portfolio') {
      e.preventDefault();
      this.setState({showNav: true});
    }
  }

  componentWillReceiveProps(nextProps) {
    let locationChanged = nextProps.location.pathname !== this.props.location.pathname;
    this.setState({
      path: this.getPath(nextProps.location.pathname),
      pageTitle: this.getPageTitle(nextProps),
      showNav: !!(!this.state.showNav && !locationChanged)
    });

    console.log(this.state.pageTitle);
    if (locationChanged) {
      window.analytics.page();
    }
  }

  componentDidMount() {
    // Page load
    window.analytics.page();
  }

  getPath(path) {
    return (path === '/') ? 'index' : path.split('/')[1].replace(/\//g, ' ');
  }

  getPageTitle(props) {
    console.log(props);
    var test = props.route.pages
      .filter(page => page.path === props.location.pathname);
    console.log(test);
    let titleArray = props.route.pages
      .filter(page => page.path === props.location.pathname)
      .map(stuff => stuff.data.title);
    return titleArray[0];
  }

  render() {
    return (
      <nav className={classNames('main-nav', {[`${this.state.path}`]: this.state.path}, {'show-nav': this.state.showNav} )}>
        <span className='nav-logo'>
          <span className='nav-logo-container' dangerouslySetInnerHTML={{__html: mark}} />
        </span>
        <Link to='/portfolio/' onClick={this.handlePortfolioClick} activeClassName='active' className={classNames('nav-item', {'active': this.state.path === 'portfolio'})}><span className='text'>{'Portfolio'}</span></Link>
        <Link to='/about/' activeClassName='active' className='nav-item'><span className='text'>{'About'}</span></Link>
        <Link to='/resume/' activeClassName='active' className='nav-item'><span className='text'>{'Resume'}</span></Link>
        <span className='nav-item close' onClick={this.handleCloseClick}>
            <span className='close-btn'></span>
        </span>
      </nav>
    );
  }
}

Navigation.defaultProps = {
  location: {}
};

Navigation.propTypes = {
  location: React.PropTypes.object.isRequired,
  route: React.PropTypes.object.isRequired
};

Navigation.contextTypes = {
  router: function () {
    return React.PropTypes.func.isRequired;
  }
};

export default Navigation;

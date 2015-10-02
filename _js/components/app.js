import React from 'react/addons';
import { Link } from 'react-router';
// import ContactStore from '../stores/contacts';
// import { Contacts } from './contacts';
// import Loader from './loading-screen';
import Navigation from './navigation';
import Pages from './pages';

let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

let App = React.createClass({

    // Load initial state
    // getInitialState: function () {
    //     return {
    //         pages: JSON.parse(document.getElementById('data').innerHTML),
    //         loading: true
    //     };
    // },

    // Called before initial rendering.
    componentWillMount: function () {
        console.log('hi?');
        //ContactStore.init();
    },

    // Called after initial rendering.
    componentDidMount: function () {
        // if (!this.isMounted()) {
        //     return;
        // }
        // var initialProps = JSON.parse(document.getElementById('data').innerHTML);
        // console.log(initialProps);
    },

    // Called before a component is unmounted from the DOM.
    componentWillUnmount: function () {
        //ContactStore.removeChangeListener(this.updateContacts);
    },

    render: function () {
        return (
            <div>
                <Navigation {...this.props} />
                <div className="content">
                    <Pages {...this.props} />
                </div>
            </div>
        );
    }
});

export default App;

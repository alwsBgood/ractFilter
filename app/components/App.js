import React from 'react';

import CONTACTS from '../data/contacts.js'

let Contact = React.createClass({
    render: function() {
        return (
            <li className="contact">
                <img className="contact-image" src={this.props.image} width="60px" height="60px"/>
                <div className="contact-info">
                    <div className="contact-name" >{this.props.name} </div>
                    <div className="contact-number">{this.props.phoneNumber} </div>
                </div>
            </li>
        );
    }
})

let ContactsList = React.createClass({
    getInitialState() {
        return {
            displayedContacts: CONTACTS
        };
    },

    handleSearch: function(event) {
        let searchQuery = event.target.value.toLowerCase();
        let displayedContacts = CONTACTS.filter(function(el) {
            let searchValue = el.name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });

        this.setState({
            displayedContacts: displayedContacts
        })
    },

    render: function() {
        return (
            <div className="contacts">
                <input type="text" className="search-field" onChange={this.handleSearch}/>
                <ul className="contacts-list">
                    {
                        this.state.displayedContacts.map(function(el) {
                        return <Contact
                            key={el.id}
                            name = {el.name}
                            phoneNumber = {el.phoneNumber}
                            image = {el.image}
                            />;
                    })
                }
                </ul>
            </div>
        )
    }
})

let App = React.createClass({
    render: function() {
        return <ContactsList />;
    }
})

export default App;
import React from 'react';
import HeaderLI from './headerLoggedin'
import HeaderNLI from './headerNotLoggedin'

class Header extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                {localStorage.token ? <HeaderLI/> : <HeaderNLI/>}
            </div>
        );
    }
}

export default Header;
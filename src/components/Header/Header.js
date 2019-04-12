import React, {Component} from "react"
import shelfie_logo from "../../shelfie_logo.png"

class Header extends Component {
    render() {
        return (
        <header>
            <div>
                <img src={shelfie_logo}></img>
                <h1>SHELFIE</h1>
            </div>
        </header>
        )
    }
}

export default Header;
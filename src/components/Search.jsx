import React, {Component} from "react";

class Search extends Component {
    state = {
        search: ''
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search)
        }
    }

    render() {

        return (
            <div className="rew">
                <div className="col s12">
                    <div className="input-field">
                        <input
                            type="search"
                            className="validate"
                            placeholder="search"
                            value={this.state.search}
                            onChange={(event) => this.setState({search: event.target.value})}
                            onKeyDown={this.handleKey}
                        />
                        <button className="btn search-btn"
                                onClick={() => this.props.searchMovies(this.state.search)}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export {Search}
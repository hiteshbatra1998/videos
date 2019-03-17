import React from 'react';

class SearchBar extends React.Component{
    state={term :''};
    onInputChange= (event) =>{
        this.setState({term: event.target.value});
    }
    onFormSubmit(event){
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }
    render(){ 
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit.bind(this)} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.term} onChange={this.onInputChange.bind(this)} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;

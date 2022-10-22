import React, { Component } from 'react'

export class SearchBar extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <div className='col-12 text-center mb-5'>
                    <div className="row justify-content-center">
                        <div className="col-5  d-flex">
                            <input type="text" placeholder='Search Here...' onChange={this.props.onChange} className='form-control rounded-0' id="searchValue"/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default SearchBar

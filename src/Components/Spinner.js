import React, { Component } from 'react'
export class Spinner extends Component {
    render() {
        return (
            <div className='col-12 text-center'>
                <div className="spinner-border text-primary" role="status">
                </div>
            </div>
        )
    }
}

export default Spinner

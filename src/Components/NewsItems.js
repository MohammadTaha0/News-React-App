import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
        return (
            <div className='col-12 col-md-6 mb-4'>
                <div className="card w-100 h-100" style={{'width': "18rem"}}>
                    <img src={this.props.imageUrl} className="card-img-top" alt="..." style={{height: "400px",objectFit:"cover"}}/>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title?this.props.title.slice(0,50)+'...':"No Title"}</h5>
                            <p className="card-text">{this.props.description?this.props.description.slice(0,100)+'...':"Description Not provided"}</p>
                            <a href={this.props.url} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItems

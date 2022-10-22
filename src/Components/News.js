import React, { Component } from 'react'
import NewsItems from './NewsItems'
import SearchBar from './SearchBar';
import Spinner from './Spinner';

export class News extends Component {
    handleNextPage = async () => {
        let nextPage = this.state.page + 1
        let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=6baa9bae4240452ead8878a138c7147d' + "&page=" + nextPage + "&pagesize=" + this.state.pageSize;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles: parseData.articles,
            loading: false,
            page: nextPage,
        })
    }
    handlePrevPage = async () => {
        let prevPage = this.state.page - 1;
        let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=6baa9bae4240452ead8878a138c7147d' + "&page=" + prevPage + "&pagesize=" + this.state.pageSize;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles: parseData.articles,
            loading: false,
            page: prevPage
        })
    }
    constructor() {
        super();

        this.state = {
            articles: [],
            loading: false,
            page: 1,
            pageSize: 20,
            searchValue: ''
        }

    }
    async componentDidMount() {
        let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=6baa9bae4240452ead8878a138c7147d' + "&page=" + this.state.page + "&pagesize=" + this.state.pageSize;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false,
            page: 1
        })

    }
    search = async () => {
        let value = document.getElementById("searchValue").value;
        console.log(value)
        this.setState({ searchValue: value })
        let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=6baa9bae4240452ead8878a138c7147d' + "&page=" + this.state.page + "&pagesize=" + this.state.pageSize + "&q=" + value;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false,

        })
    }
    render() {
        return (
            <div className='container'>
                <div className="row justify-content-center my-5">
                    <h1 className="mb-5 text-xl-center fw-bold bg-secondary py-4 text-light">Top Headlines - NewsApp</h1>
                    <SearchBar onChange={this.search} />

                    {this.state.totalResults === 0 ? <div className="bg-dark fw-bold text-light text-center p-4 mb-5">No Result Found</div> : this.state.loading === true ? <Spinner /> :
                        this.state.articles.map((e) => {
                            return <NewsItems key={e.url} title={!e.title ? "News Title" : e.title} imageUrl={!e.urlToImage ? "https://community.spotify.com/t5/image/serverpage/image-id/106208i2C0401950E6463A4/image-size/medium?v=v2&px=400" : e.urlToImage} url={e.url} description={e.description} />
                        })}
                    <div className="col">
                        <button disabled={this.state.page <= 1} onClick={this.handlePrevPage} className="btn btn-primary">
                            &larr; previous
                        </button>
                    </div>
                    <div className="col text-end">
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize)} className="btn btn-primary" onClick={this.handleNextPage}>
                            Next &rarr;
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default News

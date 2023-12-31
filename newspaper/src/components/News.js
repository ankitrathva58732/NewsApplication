import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize:8,
    category:'general'
  }
   static propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
   }


   capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
 
constructor(props) {
  super(props);
  console.log("hello I am a constructor");
  this.state = {
    articles: [], // Initialize with an empty array
    loading: true,
    page: 1, // You can initialize the page if needed
    totalResults: 0
  };
  document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
}


  async updateNews(){
    this.props.setProgress(10);

  //let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e9fb276616b54542a3c4bb166f077de8&page=${this.state.page}&pagesize=${this.props.pageSize}`; 
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json()
    this.props.setProgress(75);
    this.setState({ articles: parsedData.articles, loading:false,  totalResults: parsedData.to })
    this.props.setProgress(100);
  }
  
  
  async componentDidMount(){
    // console.log("cdm");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=1&pagesize=${this.props.pageSize}`;
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // console.log(parsedData);
    // this.setState({ articles: parsedData.articles, loading:false })
    this.updateNews();
 }

  
 
  
 handlePrevClick = async () => {
   console.log("Previous");
  
 
  this.setState({page: this.state.page - 1});
  this.updateNews();
  }; 


  handleNextClick = async () => {


    console.log("Next");
 

 this.setState({page: this.state.page + 1});
 this.updateNews();
  }
   
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page}&pageSize=${this.props.pageSize}`;
   // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=e9fb276616b54542a3c4bb166f077de8&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults,
        loading: false
    })
};

render() {
  console.log("render");
  return (
    <>
      <h1 className="text-center" style={{ margin: '35px 0px' }}>
        News - Top {this.capitalizeFirstLetter(this.props.category)} Headlines
      </h1>

      <InfiniteScroll
        dataLength={this.state.articles.length}
        next={this.fetchMoreData}
        hasMore={this.state.articles.length < this.state.totalResults}
        loader={<Spinner />}
      >  

<div className="container">
        <div className="row">
          
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ''}
                    description={element.description ? element.description : ''}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}

}




    

export default News;

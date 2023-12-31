import React, { Component } from "react";

export class NewsItem extends Component {


  render() {
    let {title, desription,imageUrl,newsUrl,author,date,source} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          
          <div style={{
            display:'flex',
            justifyContent: 'flex-end',
            position:'absolute',
            right:'0'

          }}>
          <span class="badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}> {source}</span>
          </div>

        
        <img src={!imageUrl?"https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-announcements/-476x249w4/gsmarena_00.jpg":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
             {desription}
            </p>
            <p className="card-text"><small className="text-muted">By {!author?"Uknown": author} on {new Date(date).toGMTString()}</small></p>
            
            <a href={newsUrl} target="_blank" className="btn btn-sm  btn-dark">
             Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

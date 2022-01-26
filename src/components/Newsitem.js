import React, { Component } from "react";

export class Newsitem extends Component {
   
    render() {
      let {title,description,imageUrl,newsUrl} =this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl?imageUrl:"https://images.hindustantimes.com/img/2022/01/13/1600x900/delhi_covid_cases_rise_omicron_containment_zones_1642085486478_1642085486663.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}
            </p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;

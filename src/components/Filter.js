import React, { Component } from 'react';

export default class Filter extends Component {
  render() {
    return (
      <div>
        <div className='filter'>
        <div className='filter-result'>{this.props.count} Products </div>
        <div className='filter-sort'>
              Order{" "}
            <select value={this.props.sort} onChange={this.props.sortProducts}>
              <option>Latest</option>
              <option value="lowest">Lowest</option>
              <option value="highest">Highest</option>
            </select> 
        </div>
        <div className='filter-size'> 
              Filter{" "}
        <select value={this.props.size} onChange={this.props.filterProducts}> 
          <option value="Protine">Protine</option>
          <option value="Iso">Iso</option>
          <option value="whay">whay</option>
          <option value="Consentrate">Consantrate</option>
          <option value="Raw">Raw</option>
          <option value="BCAA">BCAA</option>
          <option value="EAA">EAA</option>
        </select>
        </div>
      </div>
    </div>
    );
  }
}
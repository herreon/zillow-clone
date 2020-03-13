import React from 'react';
import { withRouter } from 'react-router-dom';

class PropertyIndexItem extends React.Component {

    constructor(props) {
        super(props);
    }
    
    get_status_class(status) {
        switch (status) {
            case "For Rent":
                return 'for-rent';
            case "For Sale":
                return 'for-sale';
            case "Sold":
                return 'sold';
        }
    }

    formatNumber(num) {
        if (num < 1000000) {
            return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        } else if (num > 999999 ) {
            return (Math.round((num/1000000))).toString() + "M";
        } 
    }
    
    renderPrice(price, status) {
        switch (status) {
            case "For Rent":
                return `${price}/mo`;
            case "For Sale":
                return `${price}`;
            case "Sold":
                return `${price}`
        }
    }

    renderBds(no_bedrooms) {
        return `${no_bedrooms} bds`
    }
    renderBa(no_bathrooms) {
        return `${no_bathrooms} ba`
    }
    renderSqft(area_in_sqft) {
        return `${this.formatNumber(area_in_sqft)} sqft`
    }

    render() {
        const { photo, status, price, no_bedrooms, no_bathrooms, area_in_sqft, address, city_or_town, state, postal_code } = this.props.property;
        
        // const renderPhotos = (
        //     <div>
        //         {photos.forEach(photo => {
        //             return <img src={photo} />
        //         })}
        //     </div>
        // ) 

        const formatted = this.formatNumber(price);
        const status_class = this.get_status_class(status);

        return (
            <div className="property-index-item">
                <span className="index-item-copy">
                    <img className="property-photo" src={photo} />
                </span>
                
            
                <div className="index-item-info">  
                    <div className="line-one">
                        <div className="line-one-left">
                            <span id='price' className="index-item-category">&#36;{this.renderPrice(formatted, status)}</span>
                        </div>
                    
                        <div className="line-one-right">
                            <span className="index-item-category">{this.renderBds(no_bedrooms)} | </span>
                            <span className="index-item-category">{this.renderBa(no_bathrooms)} | </span>
                            <span className="index-item-category">{this.renderSqft(area_in_sqft)}</span>
                        </div>
                    
                    </div>
                    
                    <div className="line-two">
                        <span className="index-item-category address">{address}, {city_or_town}, {state}, {postal_code}</span>
                        <span className="index-item-category"><span className={status_class}>&#183;</span>{status}</span>
                    </div>
                    

                </div>

            </div>
        )
    }
}

export default withRouter(PropertyIndexItem);
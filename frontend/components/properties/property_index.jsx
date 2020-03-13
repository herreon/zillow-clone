import React from 'react';
import PropertyIndexItem from './property_index_item';

class PropertyIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchProperties();
    }

    render() {

        return(
            <div className="property-index">
                <div className="index-item-info-header">San Francisco CA Real Estate and Homes</div>
                <div className="index-items">
                    {this.props.properties.map((property, i) => (
                        <PropertyIndexItem
                            property={property}
                            key={i}
                        />
                    ))}
                </div>
        
            </div>
        )
    }
}

PropertyIndex.defaultProps = {
    properties: []
}


export default PropertyIndex;
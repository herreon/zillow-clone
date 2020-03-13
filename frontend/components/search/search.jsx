import React from 'react';
import PropertyIndex from '../properties/property_index';
import PropertyMap from '../property_map/property_map';

const Search = ({ properties, fetchProperties, updateBounds }) =>  (
    <div className="search-page">
        <div className="search-bar">
            search bar
        </div>

        <div className="user-pane">


            <div className="left-half">
                <PropertyMap
                    properties={properties}
                    updateBounds={updateBounds}
                />
            </div>

            <div className="right-half">
                <PropertyIndex properties={properties} fetchProperties={fetchProperties} />
            </div>

        </div>
    </div>
    
);

export default Search;
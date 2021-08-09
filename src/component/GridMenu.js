import React from 'react'
import './GridMenu.css'

function GridMenu() {
    return(
        <div className="container">
        <div className="Art">
            <input type="checkbox" id="check-menu"></input>
            <div className="items">Art</div>
        </div>
        <div className="Education">
            <input type="checkbox" id="check-menu"></input>
            <div className="items">Education</div>
        </div>
        <div className="Entertainment">
        <input type="checkbox" id="check-menu"></input>
        <div className="items">Entertainment</div>
        </div>
        <div className="Food">
        <input type="checkbox" id="check-menu"></input>
        <div className="items">Food</div>
        </div>
        <div className="Health">
        <input type="checkbox" id="check-menu"></input>
        <div className="items">Health Conscious</div>
        </div>
        <div className="Sports">
        <input type="checkbox" id="check-menu"></input>
        <div className="items">Sports</div>
        </div>
        <div className="Tourism">
        <input type="checkbox" id="check-menu"></input>
        <div className="items">Tourism</div>
        </div>
        <div className="Technology">
        <input type="checkbox" id="check-menu"></input>
        <div className="items">Technology</div>
        </div>
        </div>
    
    );
}
export default GridMenu;

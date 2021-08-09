import React from 'react'
import './RadioDrop.css'
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import InputAdornment from '@material-ui/core/InputAdornment';

function RadioDrop() {
    return (
        <div className="container">
        <div classname="Row">
        <div classname="col-md-3">
            <button className='form-input-btn'>ZD Menu</button>
            <button className='form-input-btn'>Query Maker</button>
            <button className='form-input-btn'>Idea Crate</button>
            </div>
            <div classname="col-md-4">
            <div className='select'>
                <h6>General</h6>
                <InputAdornment position="">
                      <SubdirectoryArrowRightIcon style={{color:"#7201C8",marginTop:"-40px",marginLeft:"-30px", fontSize:"18px"}}/>
                   </InputAdornment>
                <h6>Business</h6>
                <InputAdornment position="">
                <SubdirectoryArrowRightIcon style={{color:"#7201C8",marginTop:"-40px",marginLeft:"-30px", fontSize:"18px"}}/>
                   </InputAdornment>
                <h6>Education</h6>
                <InputAdornment position="">
                <SubdirectoryArrowRightIcon style={{color:"#7201C8",marginTop:"-40px",marginLeft:"-30px", fontSize:"18px"}}/>
                   </InputAdornment>
            </div>
            </div>
            <div classname='col-md-12'>
            <div className='dropdown'>
            <select style={{width:"90px"}}>
          <option value="school">School</option>
          <option value="cbse">CBSE</option>
          <option value="icse">ICSE</option>
          <option value="state board">State Board</option>
          <option value="ib">IB</option>
          </select>

          <select style={{width:"90px"}}>
          <option value="ug">UG</option>
          <option value="engineering">Engineering</option>
          <option value="arts">Arts</option>
          </select>

          <select style={{width:"90px"}}>
          <option value="pg">PG</option>
          <option value="engineering">Engineering</option>
          <option value="arts">Arts</option>
          </select>

          <select style={{width:"90px"}}>
          <option value="phd">PhD</option>
          <option value="engineering">Engineering</option>
          <option value="arts">Arts</option>
          </select>

          <select style={{width:"200px"}}>
          <option value="teaching professional">Teaching professional</option>
          <option value="engineering">Engineering</option>
          <option value="arts">Arts</option>
          </select>
          
          <select style={{width:"200px"}}>
          <option value="government exams">Government Exams</option>
          <option value="upc">UPC</option>
          <option value="tnpsc">TNPSC</option>
          <option value="others">Others</option>
          </select>
          </div>
        </div>
        </div>
          
          
          </div>
        
    
  );
};
export default RadioDrop;
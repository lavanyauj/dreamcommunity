import React from 'react';
import './Events.css';
import { InputBase } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import AddIcon from '@material-ui/icons/Add';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';

function Events(){
  const [values, setValues] = React.useState({
    join:'',
    icon:'',
    infotab:'',
    rulestab:''
  });
  
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div class="Form my-1 mx-5">
      <div className='button'>
       <button className='form-input-btn'>New events</button>
            <button className='form-input-btn'>Upcoming events</button>
            <button className='form-input-btn'>ZD events</button>
            <button className='form-input-btn'>Finished events</button>
      </div>      
    <div className="container"
    style={{background: "#7210C8", height: "25rem", borderRadius:"20px",
     marginTop:"50px", width:"850px"}}>
    
      <div className="row no-gutters">
        <div className="col-md-11">
        <div className='info-tab'>
            <InputBase
              id="outlined-adornment"
              type={ 'text' }
              value={values.infotab}
              style={{borderRadius:"10px 10px", left:"420px", top:"35px", width: "300px", height:"4rem", background:"white"}}
              onChange={handleChange('infotab')}
              placeholder="Info tab"
            />
          </div>
        </div>
          <div className="col-md-1">
            <InfoIcon style={{ color: "#7210C8", marginTop:"35px", marginLeft:"-29px", borderRadius:"50px" , height: "4rem", width:"65px",border:"16px solid white", background:"white"}}/>
          </div>
        </div>

        <div className="row no-gutters">
        <div className="col-md-11">
        <div className='rules-tab'>
            <InputBase
              id="outlined-adornment"
              type={ 'text' }
              value={values.rulestab}
              style={{borderRadius:"10px 10px", left:"420px", top:"25px", width: "300px", height:"4rem", background:"white"}}
              onChange={handleChange('rulestab')}  
              placeholder="Rules tab"           
            />
          </div>
        </div>
        <div className="col-md-1">
         <DescriptionOutlinedIcon style={{ color: "#7210C8", marginTop:"25px", marginLeft:"-29px", borderRadius:"50px" , height: "4rem", width:"65px",border:"16px solid white", background:"white"}}/>
        </div>

          <div className="col-md-2">
          <div className='join'>
            <InputBase
              id="outlined-adornment-join"
              type={ 'text' }
              value={values.join}
              style={{borderRadius:"3px 3px", width:"100px", top:"55px",left:"620px", height:"1.3rem", background: "white"}}
              onChange={handleChange('join')}
              placeholder="Join"
            />
          </div>        
          </div>
          <div className="col-md-2">
          <AddIcon style={{ color: "white", marginTop:"35px", marginLeft:"593px", borderRadius:"50px" , height: "4rem", width:"65px",border:"18px solid white", background:"#7210C8"}}/>        
          </div>
        </div>
      </div>
    </div>
  );
};
export default Events;
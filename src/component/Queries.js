import React from 'react';
import './Queries.css';
import { InputBase } from '@material-ui/core';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import AddIcon from '@material-ui/icons/Add';

function Queries(){
  const [values, setValues] = React.useState({
    userqueries:'',
    icon:''
  });


  
  
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };


  return (
    <div class="Form my-2 mx-5">
        <button className='form-input-btn'>ZD Menu</button>
    <button className='form-input-btn'>Query Maker</button>
    <button className='form-input-btn'>Idea Crate</button>
    <div className="container"
    style={{background: "#7210C8", height: "25rem", borderRadius:"20px",
     marginTop:"20px", width:"850px"}}>
    
      <div className="row no-gutters">
        <div className="col-md-11">
        <div className='userqueries1'>
            <InputBase
              id="outlined-adornment"
              type={ 'text' }
              value={values.userqueries}
              style={{borderRadius:"20px 20px", left:"20px", top:"35px", width: "700px", height:"4rem", background:"white"}}
              onChange={handleChange('userqueries')}
              placeholder="Userqueries"
            />
          </div>
        </div>
          <div className="col-md-1">
            <EmojiObjectsIcon style={{ color: "black", marginTop:"35px", marginLeft:"-29px", borderRadius:"50px" , height: "4rem", width:"65px",border:"18px solid white", background:"white"}}/>
          </div>
        </div>

        <div className="row no-gutters">
        <div className="col-md-11">
        <div className='userqueries2'>
            <InputBase
              id="outlined-adornment"
              type={ 'text' }
              value={values.userqueries}
              style={{borderRadius:"20px 20px", left:"20px", top:"25px",width: "700px", height:"4rem", background:"white"}}
              onChange={handleChange('userqueries')}             
            />
          </div>
        </div>
        <div className="col-md-1">
         <EmojiObjectsIcon style={{ color: "black", marginTop:"25px", marginLeft:"-29px", borderRadius:"50px" , height: "4rem", width:"65px",border:"18px solid white", background:"white"}}/>
        </div>

          <div className="col-md-2">
          <div className='userqueries3'>
            <InputBase
              id="outlined-adornment"
              type={ 'text' }
              value={values.userqueries}
              style={{borderRadius:"3px 3px", width:"120px", top:"160px",left:"610px", height:"1.3rem", background: "white"}}
              onChange={handleChange('userqueries')}
              placeholder="Add queries"
              
            />
          </div>        
          </div>
          <div className="col-md-2">
          <AddIcon style={{ color: "white", marginTop:"155px", marginLeft:"610px", borderRadius:"50px" , height: "2.5rem", width:"40px",border:"5px solid white", background:"#7210C8"}}/>        
          </div>
        </div>
      </div>
    </div>
  );
};
export default Queries;
import React from 'react'
import './ShareMate.css'
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import FolderIcon from '@material-ui/icons/Folder';

function ShareMate() {
    const [values, setValues] = React.useState({
      username:'',
      email:'',
      password: '',
      showPassword: false,
      confirmpassword:'',
    });
    
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
     return (
        <div className="container" style={{marginLeft:"30px", marginTop:"-50px"}}>
            <div className="row">
               <div className="col-md-12">
                  <div className="form-inputs">
                    <h6 style={{fontWeight:"800", marginLeft:"20px"}}>Search notes</h6>
                    <InputBase
                    id="outlined-adornment"
                    type={ 'text' }
                    style={{borderRadius:"18px 18px", width:"18rem", height:"1.9rem",left:"15px", background:" rgb(243, 239, 243)"}}
                    onChange={handleChange('Search')}
                    placeholder="Search notes"
                    endAdornment={
                   <InputAdornment position="">
                      < SearchIcon style={{color:"grey",marginTop:"5px"}}/>
                   </InputAdornment>
                    }
                   />  
               </div>
               <div className="col-md-12">
                  <div className="items">
                     <h6>Topic 1</h6>
                     <p>Uploaded by</p>
                     <InputAdornment position="end">
                     <SmsOutlinedIcon style={{ color: "white", fontSize: "20px", marginTop:"-278px", marginLeft:"220px"}}/>
                     </InputAdornment>
                     <InputAdornment position="end">
                     <AddOutlinedIcon style={{ color: "#7210C8",background:"white",marginTop:"-280px", marginLeft:"260px", borderRadius:"50px" ,border:"2px solid white", height:"0.8rem", width:"0.8rem"}}/>        
                     </InputAdornment>
                  </div>
                  <div className="items">
                     <h6>Topic 2</h6>
                     <p>Uploaded by</p>
                     <InputAdornment position="end">
                     <SmsOutlinedIcon style={{ color: "white", fontSize: "20px", marginTop:"-278px", marginLeft:"220px"}}/>
                     </InputAdornment>
                     <InputAdornment position="end">
                     <AddOutlinedIcon style={{ color: "#7210C8",background:"white",marginTop:"-280px", marginLeft:"260px", borderRadius:"50px" ,border:"2px solid white", height:"0.8rem", width:"0.8rem"}}/>        
                     </InputAdornment>
                  </div>
                  <div className="items">
                     <h6>Topic 3</h6>
                     <p>Uploaded by</p>
                     <InputAdornment position="end">
                     <SmsOutlinedIcon style={{ color: "white", fontSize: "20px", marginTop:"-278px", marginLeft:"220px"}}/>
                     </InputAdornment>
                     <InputAdornment position="end">
                     <AddOutlinedIcon style={{ color: "#7210C8",background:"white",marginTop:"-280px", marginLeft:"260px", borderRadius:"50px" ,border:"2px solid white", height:"0.8rem", width:"0.8rem"}}/>        
                     </InputAdornment>
                  </div>
               </div>
               </div>
               <div className="row">
               <div className="col-md-4" style={{marginTop:"20px"}}>
                  <div className="form-inputs">
                    <h6 style={{fontWeight:"800", marginLeft:"30px"}}>Upload your files from storage</h6>
                    <InputBase
                    id="outlined-adornment"
                    type={ 'text' }
                    style={{borderRadius:"18px 18px", width:"17rem", height:"1.7rem",left:"21px", background:" rgb(243, 239, 243)"}}
                    onChange={handleChange('Search')}
                    placeholder="Upload notes"
                    />
                    <InputAdornment position="end">
                    <FolderIcon style={{ color: "#7210C8", fontSize: "35px", marginTop:"-28px", marginLeft:"300px"}}/>
                    </InputAdornment>
                  </div>
                  <div className="form-inputs">
                    <h6 style={{fontWeight:"800", marginLeft:"30px",marginTop:"20px", color:"#7210C8", fontSize:"13px"}}>Subject name</h6>
                    <InputBase
                    id="outlined-adornment"
                    type={ 'text' }
                    style={{borderRadius:"18px 18px", top: "-5px",width:"13rem", height:"1.6rem",left:"25px", background:" rgb(243, 239, 243)"}}
                    onChange={handleChange('Search')}
                    />
                  </div>
                  <div className="form-inputs">
                    <h6 style={{fontWeight:"800", marginLeft:"30px",marginTop:"20px", color:"#7210C8", fontSize:"13px"}}>Subject code</h6>
                    <InputBase
                    id="outlined-adornment"
                    type={ 'text' }
                    style={{borderRadius:"18px 18px", top: "-5px",width:"13rem", height:"1.6rem",left:"25px", background:" rgb(243, 239, 243)"}}
                    onChange={handleChange('Search')}
                    />
                  </div>
                  <div className="form-inputs">
                    <h6 style={{fontWeight:"800", marginLeft:"30px",marginTop:"20px", color:"#7210C8", fontSize:"13px"}}>Subject's topic</h6>
                    <InputBase
                    id="outlined-adornment"
                    type={ 'text' }
                    style={{borderRadius:"18px 18px", top: "-5px",width:"13rem", height:"1.6rem",left:"25px", background:" rgb(243, 239, 243)"}}
                    onChange={handleChange('Search')}
                    />
                  </div>  
                  <div className="button">
                     <button style={{background:"linear-gradient(to right, #A11CF9,#7201C8)", borderRadius:"20px", border:"none", color:"white", width:"35%", fontWeight:"600", fontSize:"13px", height:"1.8rem"}}>Upload</button>
                  </div>                
               </div>
               <div className="col-md-5">
                  <h6 style={{fontWeight:"800", marginLeft:"90px", marginTop:"20px"}}>Request notes</h6>
                  <div className="request" style={{left:"80px", marginTop:"-30px"}}>
                    <InputBase
                    id="outlined-adornment-request"
                    type={ 'text' }
                    style={{borderRadius:"15px", top: "15px",width:"9rem", height:"4rem",left:"190px", background:" rgb(243, 239, 243)"}}
                    onChange={handleChange('Search')}
                    placeholder="Subject code Author name"
                    />
                    <InputBase
                    id="outlined-adornment-year"
                    type={ 'text' }
                    style={{borderRadius:"15px", top: "22px",width:"2.5rem", height:"1.5rem",left:"290px", background:" rgb(243, 239, 243)"}}
                    onChange={handleChange('Search')}
                    placeholder="year"
                    />
                    <InputBase
                    id="outlined-adornment-request"
                    type={ 'text' }
                    style={{borderRadius:"15px", top: "10px",width:"9rem", height:"4rem",left:"25px", background:" rgb(243, 239, 243)"}}
                    onChange={handleChange('Search')}
                    placeholder="Requested notes 1"
                    />
                    <InputBase
                    id="outlined-adornment"
                    type={ 'text' }
                    style={{borderRadius:"15px", top: "25px",width:"20rem", height:"1.5rem",left:"20px", background:" rgb(243, 239, 243)"}}
                    onChange={handleChange('Search')}
                    placeholder="Requested notes"
                    />
                  </div>
               </div>               
            </div>    
        </div>
    </div>
  );
};
export default ShareMate;
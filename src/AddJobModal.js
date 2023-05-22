import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {useSelector,useDispatch} from 'react-redux'
import { addVacancy } from './actions';
 
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const AddJobModal = ({ isOpen, onClose, onAddJob }) => {
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [salary, setSalary] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [description, setDescription] = useState('');
  const myState=useSelector((state)=>state.changeInVacancy);
  const dispatch=useDispatch();
  let JobTitle=''
  let CompanyName=''
  let Salary=""
  let Joining=''
  let Description=''

  const AddVacancy={JobTitle:jobTitle,CompanyName:companyName,Salary:salary,Joining:dateTime,Description:description}


  return (
    <>

    <Modal open={isOpen} onClose={onClose}>
      <div>
        
        <Box sx={style}>
        <h2 style={{textAlign:'center'}}>Add Job</h2>
        <TextField
          label="Job Title"
          value={jobTitle}
          style={{width:'100%',marginBottom:'10px'}}
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <TextField
          label="Company Name"
          value={companyName}
          style={{width:'100%',marginBottom:'10px'}}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        
        <TextField
          label="Salary"
          value={salary}
          
          onChange={(e) => setSalary(e.target.value)}
        />
        <TextField
          label="Date & Time"
          value={dateTime}
          style={{marginBottom:'10px',marginLeft:'80px'}}
          onChange={(e) => setDateTime(e.target.value)}
        />
        
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{width:'100%',marginBottom:'10px'}}
          multiline
          rows={4}
        />
        <br/>
        {/* <button style={{background:'blue',color:'white' , border:'1px solid white'}}>Submit</button> */}

        <Button onClick={()=>dispatch(addVacancy(AddVacancy))} sx={{ backgroundColor: 'blue', color: 'white' }} style={{textAlign:'center'}}>Submit</Button>
        </Box>
      </div>
    </Modal>
    </>
  );
};

export default AddJobModal;

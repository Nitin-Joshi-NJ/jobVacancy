import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {useSelector,useDispatch} from 'react-redux'
import changeInVacancy from './reducer/updatedVacancy';
import { addVacancy,editVacancy } from './actions';
 
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

const EditJobModal = ({ isOpen, onClose, data }) => {
    // console.log('data',data)
    // console.log(data[0]?.JobTitle)
//   let JobTitle=data[0]?.JobTitle
  let CompanyName=data[0]?.CompanyName
  let Salary=data[0]?.Salary
  let Joining=data[0]?.Joining
  let Description=data[0]?.Description
  const [jobTitle, setJobTitle] = useState(data[0]?.JobTitle);
  const [companyName, setCompanyName] = useState('');
  const [salary, setSalary] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [description, setDescription] = useState('');
  const myState=useSelector((state)=>state.changeInVacancy);
  const dispatch=useDispatch();


  const EditVacancy={JobTitle:jobTitle,CompanyName:companyName,Salary:salary,Joining:dateTime,Description:description}

//   const handleAddJob = () => {
//     const job = {
//       jobTitle,
//       companyName,
//       salary,
//       dateTime,
//       description,
//     };

//     onAddJob(job);
//     onClose();
//   };

  return (
    <>
    <Modal open={isOpen} onClose={onClose}>
      <div>
        
        <Box sx={style}>
        <h2 style={{textAlign:'center'}}>Edit Job</h2>
        <TextField
          label="Job Title"
          value={jobTitle}
          style={{width:'100%',marginBottom:'10px'}}
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <TextField
          label="Company Name"
          value={CompanyName}
          style={{width:'100%',marginBottom:'10px'}}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        
        <TextField
          label="Salary"
          value={Salary}
          
          onChange={(e) => setSalary(e.target.value)}
        />
        <TextField
          label="Date & Time"
          value={Joining}
          style={{marginBottom:'10px',marginLeft:'80px'}}
          onChange={(e) => setDateTime(e.target.value)}
        />
        
        <TextField
          label="Description"
          value={Description}
          onChange={(e) => setDescription(e.target.value)}
          style={{width:'100%',marginBottom:'10px'}}
          multiline
          rows={4}
        />
        <br/>

        <Button onClick={()=>dispatch(editVacancy())} sx={{ backgroundColor: 'blue', color: 'white' }} style={{textAlign:'center'}}>Submit</Button>
        </Box>
      </div>
    </Modal>
    </>
  );
};

export default EditJobModal;

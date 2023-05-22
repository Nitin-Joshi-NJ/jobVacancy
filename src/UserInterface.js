
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import CardContent from '@mui/material/CardContent';


import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddJobModal from './AddJobModal';
import { useState } from 'react';
import { Button } from '@mui/material';
import {useSelector,useDispatch} from 'react-redux'
import EditJobModal from './EditJobModal';
import DeleteModal from './DeleteModal';

function UserInterface(){
  const [open,setOpen]=useState(false)
  const [close,setClose]=useState(false)
  const myState=useSelector((state)=>state.changeInVacancy);
  const dispatch=useDispatch();
  const [edit,setEdit] = useState([])
  const[alert,setAlert]=useState(false)

  function handleAddModal(){
    setOpen(true)
  }
  function handleClose(){
    setOpen(false)
  }
  function handleEditModal(e,id){
    // console.log(id)
    let editData=myState.filter((value)=>value.id===id)
    console.log(editData)
    setEdit(editData)
    console.log('edit',edit)

    setOpen(true)
  }

  function handleDeleteModal(e,id){
    setAlert(true)
  }
    return (
      <>
        {/* <Button onClick={()=>handleModal()} sx={{ backgroundColor: 'blue', color: 'white' }}>Submit</Button> */}

        <AddJobModal isOpen={open} onClose={handleClose} />
        <EditJobModal isOpen={open} onClose={handleClose} data={edit} />
        <DeleteModal setAlert={alert}/>
        <button
          style={{
            background: "blue",
            color: "white",
            border: "1px solid white",
            position: "relative",
            left: "72%",
          }}
          onClick={() => handleAddModal()}
        >
          Add Job
        </button>
        {myState.map((values) => (
          <div className="container">
            <div
              className="row"
              style={{ justifyContent: "space-around", marginTop: "20px" }}
            >
              <div className="col-md-1"></div>
              <div className="col-md-4">
                <Card sx={{ maxWidth: 345 }}>
                  <h5
                    style={{
                      position: "relative",
                      left: "20px",
                      marginTop: "10px",
                    }}
                  >
                    {values.JobTitle}
                  </h5>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={values.CompanyName}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      <span>
                        {values.Salary} Joining Date:{values.Joining}
                      </span>{" "}
                      <br />
                      <br />
                      {values.Description}
                    </Typography>
                    <br />
                    <button
                      style={{
                        background: "blue",
                        color: "white",
                        marginRight: "10px",
                      }}
                      onClick={(e) => handleEditModal(e, values.id)}
                    >
                      Edit
                    </button>
                    <button style={{ background: "red", color: "white" }}>
                      delete
                    </button>
                  </CardContent>
                </Card>
              </div>
              <div className="col-md-4">
                <Card sx={{ maxWidth: 345 }}>
                  <h5
                    style={{
                      position: "relative",
                      left: "20px",
                      marginTop: "10px",
                    }}
                  >
                    {values.JobTitle}
                  </h5>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={values.CompanyName}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      <span>
                        {values.Salary} Joining Date:{values.Joining}
                      </span>{" "}
                      <br />
                      <br />
                      {values.Description}
                    </Typography>
                    <br />
                    <button
                      style={{
                        background: "blue",
                        color: "white",
                        marginRight: "10px",
                      }}
                      onClick={(e) => handleEditModal(e, values.id)}
                    >
                      Edit
                    </button>
                    <button style={{ background: "red", color: "white" }} onClick={(e)=>handleDeleteModal(e,values.id)}>
                      delete
                    </button>
                  </CardContent>
                </Card>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        ))}
      </>
    );
}

export default UserInterface;
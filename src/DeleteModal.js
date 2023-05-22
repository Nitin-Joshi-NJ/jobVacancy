import React from 'react';
import Alert from 'react-bootstrap/Alert';


function DeleteModal(alert){
    const [showAlert, setShowAlert] = React.useState(false);
    const handleCloseAlert = () => {
        setShowAlert(false);
      };
      
    return(
        <>
            {showAlert && (
  <Alert variant="info" onClose={handleCloseAlert} dismissible>
    Are you sure you want to delete job?
    <br/>
    <button>Cancel</button>
    <button style={{background:'red',color:'white',marginLeft:'5px'}}>Delete</button> 
  </Alert>
)}

        </>
    )
}

export default DeleteModal;
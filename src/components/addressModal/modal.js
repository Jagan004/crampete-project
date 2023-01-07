import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modal.css'
import {add} from '../profile/profileLogics'
import { useDispatch, useSelector } from 'react-redux'
function Address({addressGet}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const dispatch = useDispatch(add)

const[save,setSave]=useState({ })

function userInput(e)
{
    let obj={}
    obj[e.target.name]=e.target.value
    setSave({...save,...obj})
    
}
function userInputSave()
{
    if(!save.houseNO_street || !save.area || !save.city)
    {
      return
    }
    else
    {
      dispatch(add({houseNO_street:save.houseNO_street,area:save.area,city:save.city}))
      setSave(" ")
      handleClose()
    }
   
}

  return (
    <>
      
      <span 
      class="material-symbols-outlined" 
      variant="primary" 
      onClick={handleShow}
      disabled
      >add</span>
     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Addres</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-edit'>
            <p>House no and street</p>
            <input type="text" name='houseNO_street' onChange={userInput}/>
            <p>Area</p>
            <input type="text" name='area' onChange={userInput}/>
            <p>City</p>
            <input type="text" name='city' onChange={userInput}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={userInputSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Address
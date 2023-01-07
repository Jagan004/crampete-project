import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {update} from '../profile/profileLogics'
import {useDispatch} from 'react-redux'

function UpdateModal({houseNO_street}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch()

const [updateAddress,setUpdateAddress] = useState({
    houseNO_street:"",
    area:"",
    city:''
})

  function updateUserInput(e)
  {
    let obj = {}
    obj[e.target.name] = e.target.value
    setUpdateAddress({...updateAddress,...obj})
  }
   function sendHandeler()
   {
    dispatch(update({id:houseNO_street,houseNO_street:updateAddress.houseNO_street,area:updateAddress.area,city:updateAddress.city}))
    handleClose()
   }
  return (
    <>
      <Button variant="primary" onClick={handleShow} className="w-25">
        update
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        
      >
        <Modal.Header closeButton>
          <Modal.Title>Enter the address to update</Modal.Title>
        </Modal.Header>
        <Modal.Body className="m-auto">
        <p>House no and street</p>
            <input type="text" name='houseNO_street' onChange={updateUserInput}/>
            <p>Area</p>
            <input type="text" name='area' onChange={updateUserInput}/>
            <p>City</p>
            <input type="text" name='city' onChange={updateUserInput}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={sendHandeler} >Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateModal
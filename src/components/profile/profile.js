import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './profile.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Address from '../addressModal/modal';
import { profileState,remove,update } from './profileLogics';
import { useDispatch, useSelector } from 'react-redux'
import UpdateModal from '../updateModalForProfile/updateModal';
function Profile() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [userAddress, setUserAddress] = useState({
        houseNo_street: "",
        area: "",
        city: ''
    })


    const users = useSelector(profileState)
const dispatch = useDispatch()

    function addressGet(houseNo, area, city) {
        setUserAddress({
            houseNo_street: houseNo,
            area: area,
            city: city
        })
    }

    // const [address, setAddress] = useState([
    //     {
    //         houseNo_street: "no 4/856 rajendran nagar 1st street",
    //         area: "neelangarai",
    //         city: "chennai"
    //     }
    // ])

    // Boolean(userAddress.city) && address.push(userAddress)
    // console.log(userAddress);
    // console.log(users);

    return (
        <>
            <span class="material-symbols-outlined" variant="primary" onClick={handleShow}>
                account_circle
            </span>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Profile</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='profile'>
                        <img
                            src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
                            height='100'
                        />
                    </div>
                    <div className='username'>
                        <h5>Username : <span>Jagan</span></h5>
                        <h5>Email : <span>jackjagan732@gmail.com</span></h5>
                    </div>
                    <div className='address-plus'>
                        <h3>Address</h3>
                        <Address
                            addressGet={addressGet}
                        />
                    </div>
                    <div className='address'>
                        {
                            users.map((val) => {
                                return (
                                    <div>
                                        <h5>{val.houseNO_street}</h5>
                                        <h5>{val.area}</h5>
                                        <h5>{val.city}</h5>
                                        <section className='update-remove'>
                                        <UpdateModal houseNO_street={val.houseNO_street} />
                                        <button
                                        onClick={()=>dispatch(remove(val.houseNO_street))}
                                        >Remove</button>
                                        </section>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='profile-btn'>
                        <button><Link to="/">Log out</Link></button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Profile
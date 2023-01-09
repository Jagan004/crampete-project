import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './filter.css'
function Filter({ getColor,getBrand,getPrice,type}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState({
    brand_1: "",
    brand_2: "",
    brand_3: ""
  })
  const [color, setColor] = useState({
    clr_1: "",
    clr_2: "",
    clr_3: ""
  })
  const [price,setPrice] = useState({
    price_1:1000,
    price_2:2000,
    price_3:3000,
  })
  useEffect(() => {
    if (type === "mens") {
      setName({
        brand_1: "dennis",
        brand_2: "allen solly",
        brand_3: "indoprimo"
      })
      setColor({
        clr_1: "white",
        clr_2: "blue",
        clr_3: "grey"
      })
    }
    else if (type === "womens") {
      setName({
        brand_1: "ZARA",
        brand_2: "ONLY",
        brand_3: "BIBA"
      })
      setColor({
        clr_1: "white",
        clr_2: "blue",
        clr_3: "yellow"
      })
    }
    else if (type === "kids") {
      setName({
        brand_1: "Max",
        brand_2: "Lilliput",
        brand_3: "Babyhug"
      })
      setColor({
        clr_1: "white",
        clr_2: "blue",
        clr_3: "black"
      })
    }
    else if (type === "electronics") {
      setName({
        brand_1: "iphone",
        brand_2: "samsung",
        brand_3: "asus"
      })
      setColor({
        clr_1: "silver",
        clr_2: "blue",
        clr_3: "black"
      })
    }
    setPrice({
      price_1:10000,
    price_2:50000,
    price_3:100000,
    })
  }, [type])

  return (
    <>
      <div className='filter'>
        <span class="material-symbols-outlined" variant="primary" onClick={handleShow}>
          filter_alt
        </span>
      </div>


      <Offcanvas show={show} onHide={handleClose} className="filter-bg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="filter-name">Filter</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='check-filter'>
            <div>
              <h4>Price</h4>
              <input type="checkbox" id='price_1' value={price.price_1} onChange={(e)=>getPrice(e.target.value,e.target.checked)}/> <label htmlFor='price_1'>below ${price.price_1}</label><br></br>
              <input type="checkbox" id='price_2' value={price.price_2} onChange={(e)=>getPrice(e.target.value,e.target.checked)}/> <label htmlFor='price_2'>below ${price.price_2}</label><br></br>
              <input type="checkbox" id='price_3' value={price.price_3} onChange={(e)=>getPrice(e.target.value,e.target.checked)}/> <label htmlFor='price_3'>below ${price.price_3}</label>
            </div>
            <div>
              <h4>color</h4>
              <input type="checkbox" id='clr_1' value={color.clr_1} onChange={(e)=>getColor(e.target.value,e.target.checked)}/> <label htmlFor='clr_1'>{color.clr_1}</label><br></br>
              <input type="checkbox" id='clr_2' value={color.clr_2} onChange={(e)=>getColor(e.target.value,e.target.checked)}/> <label htmlFor='clr_2'>{color.clr_2}</label><br></br>
              <input type="checkbox" id='clr_3' value={color.clr_3} onChange={(e)=>getColor(e.target.value,e.target.checked)}/> <label htmlFor='clr_3'>{color.clr_3}</label>
            </div>
            <div>
              <h4>brand</h4>
              <input type="checkbox" id='brand_1' value={name.brand_1} onChange={(e)=>getBrand(e.target.value,e.target.checked)}/> <label htmlFor='brand_1'>{name.brand_1}</label><br></br>
              <input type="checkbox" id='brand_2' value={name.brand_2} onChange={(e)=>getBrand(e.target.value,e.target.checked)}/> <label htmlFor='brand_2'>{name.brand_2}</label><br></br>
              <input type="checkbox" id='brand_3' value={name.brand_3} onChange={(e)=>getBrand(e.target.value,e.target.checked)}/> <label htmlFor='brand_3'>{name.brand_3}</label>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Filter
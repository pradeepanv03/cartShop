import React, { useEffect, useState } from 'react'
import { FcFullTrash } from "react-icons/fc";

export default function Cart(props) {
  const [data, setdata] = useState([]);
  useEffect(() => {
    if (props.sendcart) {
      setdata(props.sendcart)
    }
  }, [props.sendcart])


  const handleRemove = (id) => {
const removeitemdata = data.filter((item) => item.id !== id)
setdata(removeitemdata)
props.removedata(removeitemdata)
  };


  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr key={index}>
              <td>{data.id}</td>
              <td><img src={data.image} style={{ width: '50px', height: '50px' }} /></td>
              <td>{data.name}</td>
              <td>{data.price}</td>
              <td><FcFullTrash onClick={() => handleRemove(data.id)} style={{ cursor: 'pointer' }} /> remove</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};



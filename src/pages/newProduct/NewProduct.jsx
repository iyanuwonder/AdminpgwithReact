import React from 'react'

import "./newproduct.css"



export default function NewProduct() {
  return (
    <div className="product">
        <div className="ProductTitleContainer">
            <h1 className="ProductTitle"> New Product</h1>
        </div>
        <form  className="addproductForm">
                <div className="addproductItem">
                    <label>Image</label>
                    <input type="file" id="file"/>
                </div>
                <div className="addproductItem">
                    <label>Name</label>
                    <input type="text" placeholder="apple airpod"/>
                </div>
                <div className="addproductItem">
                    <label>Stock</label>
                    <input type="text" placeholder="123"/>
                </div>
                <div className="addproductItem">
                <label>Active</label>
                    <select name="active" id="idactive ">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="addproductButton">Create</button>
            </form>
    </div>
  )
}



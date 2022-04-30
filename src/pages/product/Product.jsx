import React from 'react'
import { Link } from 'react-router-dom'
import Chart from '../../components/chart/Chart'
import "./product.css"
import{productData} from "../../dummyData"
import { Publish } from '@material-ui/icons'


export default function Product() {
  return (
    <div className="product">
        <div className="ProductTitleContainer">
            <h1 className="ProductTitle"> Product</h1>
            <Link to = "/newproduct">
            <button className="ProductAddButton">Create</button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src="https://i.ibb.co/61D1q7J/Whats-App-Image-2022-03-11-at-5-45-52-PM.jpg" alt="" 
                    className="productInfoImg" />
                    <span className="productName">Apple Airpod</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">Id:</span>
                        <span className="productInfoValue">123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">Sales:</span>
                        <span className="productInfoValue">1623</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">actice:</span>
                        <span className="productInfoValue">yes </span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">in stock:</span>
                        <span className="productInfoValue">no</span>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="productBottom">
            <form  className="productForm">
                <div className="productFormLeft">
                    <label>Product Name</label>
                    <input type="text" placeholder="Apple Airpod"/> 
                    <label>In Stock</label>
                    <select name="instock" id="idstock">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <label>Active</label>
                    <select name="active" id="idactive ">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src="https://i.ibb.co/61D1q7J/Whats-App-Image-2022-03-11-at-5-45-52-PM.jpg" alt="" 
                        className="productUploadImg" />
                        <label for="file">
                            <Publish/>
                        </label>
                        <input type="file"id="file" style={{display:"none"}} />
                    </div>
                    <button className="productButton">Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}



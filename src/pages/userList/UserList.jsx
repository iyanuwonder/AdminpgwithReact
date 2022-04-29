import React from 'react'
import "./user.css"
import { DataGrid } from '@material-ui/data-grid';
import{Delete} from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function UserList() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User Name',
      width: 150,
      renderCell: (params)=>{
        return(
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        )
      }
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 150,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      
      width: 150,
      
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      
      width: 200,
      
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell:(params)=>{
        return(
          <>
          <Link to ={"/user/"+ params.row.id}>
          <button className="userListEdit">Edit</button>
          </Link>
            
            <Delete className="userListDelete"/>
          </>
        );
      },
      
    },
  ];
  
  const rows = [
    { id: 1, username: 'iyanuwonder', avatar: "https://i.ibb.co/61D1q7J/Whats-App-Image-2022-03-11-at-5-45-52-PM.jpg", 
    email: "iyanumobolaji92@gmail.com", status:"active", transaction: "£119" },
    { id: 2, username: 'daniel', avatar: "https://i.ibb.co/61D1q7J/Whats-App-Image-2022-03-11-at-5-45-52-PM.jpg", 
    email: "yanumobolaji92@gmail.com", status:"active", transaction: "£109" },
    { id: 3, username: 'johuche', avatar: "https://i.ibb.co/61D1q7J/Whats-App-Image-2022-03-11-at-5-45-52-PM.jpg", 
    email: "anumobolaji92@gmail.com", status:"active", transaction: "£190" },
    { id: 4, username: 'folake1', avatar: "https://i.ibb.co/61D1q7J/Whats-App-Image-2022-03-11-at-5-45-52-PM.jpg", 
    email: "numobolaji92@gmail.com", status:"active", transaction: "£100" },
    { id: 5, username: 'mobolaji', avatar: "https://i.ibb.co/61D1q7J/Whats-App-Image-2022-03-11-at-5-45-52-PM.jpg", 
    email: "umobolaji92@gmail.com", status:"active", transaction: "£239" },
    { id: 6, username: 'david', avatar: "https://i.ibb.co/61D1q7J/Whats-App-Image-2022-03-11-at-5-45-52-PM.jpg", 
    email: "mobolaji92@gmail.com", status:"active", transaction: "£65" },
    { id: 7, username: 'kabiru', avatar: "https://i.ibb.co/61D1q7J/Whats-App-Image-2022-03-11-at-5-45-52-PM.jpg", 
    email: "bolaji92@gmail.com", status:"active", transaction: "£185" },
    { id: 8, username: 'daina', avatar: "https://i.ibb.co/61D1q7J/Whats-App-Image-2022-03-11-at-5-45-52-PM.jpg", 
    email: "iyanumobolaji92@gmail.com", status:"active", transaction: "£400" },
    
  ];
  return (
    <div className="userList">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      /> 
    </div>
  )
}

import React from 'react'
import "./user.css"
import { DataGrid } from '@material-ui/data-grid';
import{Delete} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import{userRows} from '../../dummyData';
import { useState} from 'react';

export default function UserList() {
  const[data,setData] =useState(userRows);
  const handleDelete = (id) =>{
      setData(data.filter((item)=> item.id !== id));
  };
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
            
            <Delete className="userListDelete"
            onClick={() => handleDelete(params.row.id)}/>
          </>
        );
      },
      
    },
  ];
  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      /> 
    </div>
  )
}

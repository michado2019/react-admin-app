import React from 'react'
import './Riders.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutlined } from '@mui/icons-material'
import { riderRows } from '../../Data';
import { Link } from 'react-router-dom';

export default function Riders() {

  const [ridersData, setRidersData] = React.useState(riderRows)
  function handleRiderDelete(id){
    setRidersData(ridersData.filter(riderDatum => riderDatum.id !== id))
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 5 },
    { field: 'user', headerName: 'User name', width: 190 , renderCell: (params) => {

      return(
        <div className='ridersUser-div'>
            <img src={params.row.avatar} alt='img' className='ridersUser-avatar' />
            <h1 className='ridersUser-name'>{params.row.userName}</h1>
        </div>
      )
    } },
    { field: 'email', headerName: 'Email', width: 130 },
    { field: 'status', headerName: 'Status', width: 90 },
    { field: 'transactions', headerName: 'Transactions', width: 120 },
    
    { field: 'actions', headerName: 'Actions', width: 90, renderCell: (params) => {

      return(
        <div className='ridersEdit-div'>
          <Link to={'/rider/' + params.row.id}>
          <button className='ridersEdit-btn'>Edit</button>
          </Link>
          <DeleteOutlined className='ridersDelete-icon' onClick={() => handleRiderDelete(params.row.id)}/>
        </div>
      )
    } }
  ];

  return (
    <div className='ridersWrapper'>
        <div style={{ height: 600, width: '100%'}}>
      <DataGrid
        rows={ridersData}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
    </div>
  )
}

import React from 'react'
import './Payment.css'
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from '@mui/icons-material';
import { paymentRows } from '../../Data';

export default function Payment() {

  const [data, setData] = React.useState(paymentRows)
  function handlePaymentDelete(id){
    setData(data.filter((item) => item.id !== id))
  }
  const columns= [
    { field: 'id', headerName: 'ID', width: 60, }, 
    { field: 'user', headerName: 'User', width: 190, renderCell: (params) => {
      return(
        <div className='paymentUser'>
          <img src={params.row.img} alt='img' className='paymentImg' />
          {params.row.userName}
        </div>
      )
    } },

    { field: 'date', headerName: 'Date', width: 120 }, 
    { field: 'transactions', headerName: 'Transactions', width: 120, },
    { field: 'status', headerName: 'Status', width: 120, }, 
    { field: 'action', headerName: 'Action', width: 120, renderCell: (params) => {
      return (
        <div>
          <DeleteOutline className='paymentDelete-icon' onClick={() => handlePaymentDelete(params.row.id)} />
        </div>
      )
    }}
  ];
  return (
    <div className='paymentWrapper' style={{height:'500px'}}>
<DataGrid
        rows={data}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}
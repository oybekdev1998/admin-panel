import React, {useState} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { rows } from "../../helpers/tableData";
import styles from './UserList.module.css'
import {DeleteOutline} from "@mui/icons-material";
import {Link} from "react-router-dom";


function UserList() {
  const [data, setData] = useState<Array<any>>(rows)

  const handleClick = (id: number) => {
    setData(rows.filter(item => item.id !== id))
  }

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'user', headerName: 'User', width: 200, renderCell: (params)=> {
        return (
          <div className={styles.userListUser}>
            <img className={styles.userListImg} src={params.row.avatar} alt='user' />
            {params.row.user}
          </div>
        )
      } },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      type: 'string',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      type: 'string',
      width: 120,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/User/' + params.row.id}>
              <button className={styles.userListBtn}>Edit</button>
            </Link>
            <DeleteOutline className={styles.userListDelete} onClick={() => handleClick(params.row.id)} />
          </>
        )
      }
    }
  ];


  return (
    <div className={styles.userList} style={{ height: '100vh', width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default UserList;

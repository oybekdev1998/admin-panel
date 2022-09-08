import React from 'react'
import styles from './ProductList.module.css'
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {Link} from "react-router-dom";
import {productData} from "../../helpers/productData";
import {DeleteOutline} from "@mui/icons-material";

const ProductList: React.FC = () => {

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 200, renderCell: (params)=> {
        return (
          <div className={styles.productList}>
            <img className={styles.productListImg} src={params.row.img} alt='product' />
            {params.row.name}
          </div>
        )
      } },
    { field: 'stock', headerName: 'Stock', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      type: 'string',
      width: 120,
    },
    {
      field: 'price',
      headerName: 'Price',
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
            <Link to={'/products/' + params.row.id}>
              <button className={styles.productListBtn}>Edit</button>
            </Link>
          </>
        )
      }
    }
  ];

  return (
    <div className={styles.productList} style={{ height: '100vh', width: '100%' }}>
      <DataGrid
        rows={productData}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}

export default ProductList
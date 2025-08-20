import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
// import Paper from "@mui/material/Paper";
// import { userColumns, userRows } from "../../datasource.js;
import { userColumns } from "../../Datasource";
import { userRows } from "../../Datasource";
import { Link } from "react-router";
import { useState } from "react";


const DataTable = () => {

const [data, setData] = useState(userRows);

const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };


  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        // initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5]}
        checkboxSelection
        sx={{ border: 0 }}
      />

      {/* <DataGrid
        className="datagrid"
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
      /> */}

    </div>
  );
};

export default DataTable;

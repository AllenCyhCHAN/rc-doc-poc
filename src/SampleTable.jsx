import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { v4 as uuidv4 } from 'uuid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70, valueGetter: (value, row) => uuidv4(), },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'department', headerName: 'Department', width: 130 },
  { field: 'position', headerName: 'Position', width: 130 },
  { field: 'salary', headerName: 'Salary', width: 130, type: 'number' },
  { field: 'hireDate', headerName: 'Hire Date', width: 130, type: 'string' },
];


const paginationModel = { page: 0, pageSize: 100 };

const DataTable= () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await fetch('/data.json');
      const data = await response.json();
      console.log(data)

      setData(data);
    };

    fetchEmployees();
  }, []);

  return (
    <Paper sx={{ height: 400 }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[2, 100]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
};

export default DataTable;

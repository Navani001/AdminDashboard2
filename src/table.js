import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'itle', headerName: 'Projcet Title', width: 130 },
  { field: 'Hours', headerName: 'Hours', width: 130 },
];

const rows = [
  { id: 1, itle: 'Snow', Hours: 'Jon' },
  { id: 2, itle: 'Lannister', Hours: 'Cersei' },
  { id: 3, itle: 'Lannister', Hours: 'Jaime' },
  { id: 4, itle: 'Stark', Hours: 'Arya' },
  { id: 5, itle: 'Targaryen', Hours: 'Daenerys' },
  { id: 6, itle: 'Melisandre', Hours: null, },
  { id: 7, itle: 'Clifford', Hours: 'Ferrara' },
  { id: 8, itle: 'Frances', Hours: 'Rossini'},
  { id: 9, itle: 'Roxie', Hours: 'Harvey' },
];

export default function DataTable() {
  return (
    <div style={{ height: 270, width: 400 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 3 },
          },
        }}
        pageSizeOptions={[3, 6]}
        checkboxSelection
      />
    </div>
  );
}

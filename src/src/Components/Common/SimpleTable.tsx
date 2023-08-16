import React, { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { data, type Person } from "./makeData";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const SimpleTable = ({ columns, data }: any) => {
  return (
    <MaterialReactTable
      columns={columns}
      data={data ?? []}
      enableColumnActions={false}
      enableColumnFilters={false}
      enablePagination={false}
      enableSorting={false}
      enableBottomToolbar={false}
      enableTopToolbar={false}
      // state={{ isLoading: true }}
      // onRowClick={handleRowClick}
      // muiTableBodyRowProps={{ hover: false }}
      // enableMultiRowSelection={false} //shows radio buttons instead of checkboxes
      // enableRowSelection
      // enableSelectAll={false}
    />
  );
};

export default SimpleTable;

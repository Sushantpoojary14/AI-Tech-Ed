import React, { useMemo } from "react";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { data, type Person } from "./makeData";

export const SimpleTable = () => {
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    //column definitions...
    () => [
      {
        accessorKey: "SrNo",
        header: "Sr No",
      },
      {
        accessorKey: "packageName",
        header: "Package Name",
      },
      {
        accessorKey: "totalPurchases",
        header: "Total Purchases",
      },
    ],
    []
    //end
  );
  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableColumnActions={false}
      enableColumnFilters={false}
      enablePagination={false}
      enableSorting={false}
      enableBottomToolbar={false}
      enableTopToolbar={false}
      muiTableBodyRowProps={{ hover: false }}
      //   muiTableProps={{
      //     sx: {
      //       border: "1px solid rgba(81, 81, 81, 1)",
      //     },
      //   }}
      //   muiTableHeadCellProps={{
      //     sx: {
      //       border: "1px solid rgba(81, 81, 81, 1)",
      //     },
      //   }}
      //   muiTableBodyCellProps={{
      //     sx: {
      //       border: "1px solid rgba(81, 81, 81, 1)",
      //     },
      //   }}
    />
  );
};

export default SimpleTable;

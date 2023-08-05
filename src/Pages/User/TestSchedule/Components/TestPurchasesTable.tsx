import { TableBody, TableCell, TableRow } from "@mui/material";
import React, { useState } from "react";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { Link } from "react-router-dom";
import { ParaText1 } from "../../../../Components/Common/ParaText";

interface dataProps {
  data: Array<object>;
  func?: () => void;
}

const TestPurchasesTable = (props: dataProps) => {
  // const [count, setCount] = useState<number>(0);
  let count = 0;
  return (
    <TableBody>
      {props.data?.length === 0 ? (
        <TableRow>
          <TableCell align="center" sx={{ border: 0 }} colSpan={5}>
            No Test Available
          </TableCell>
        </TableRow>
      ) : (
        props.data?.map((purchase_item: any, key: number) => {
          let ts_pc = purchase_item.ts_product.get_ts_product_category;
          let ts_p = purchase_item.ts_product;
          return ts_pc.map((ts_pc_item: any, innerKey: number) => {
            let tsc = ts_pc_item.test_series_categories;
            return ts_pc_item.ts_p_c_set.map((set_item: any) => {
              count++;
              return (
                <TableRow key={count}>
                  <TableCell align="center" sx={{ border: 0 }}>
                    {count}
                  </TableCell>
                  <TableCell align="center" sx={{ border: 0 }}>
                    {`${tsc.tsc_type} set - ${set_item.set_id}`}
                  </TableCell>
                  <TableCell align="center" sx={{ border: 0 }}>
                    {tsc.tsc_type}
                  </TableCell>
                  <TableCell align="center" sx={{ border: 0 }}>
                    {ts_p.duration}
                  </TableCell>
                  <TableCell align="center" sx={{ border: 0 }}>
                    {purchase_item.valid_from}
                  </TableCell>
                  <TableCell align="center" sx={{ border: 0 }}>
                    {purchase_item.valid_till}
                  </TableCell>
                  <TableCell align="center" sx={{ border: 0 }}>
                    <Link
                      to={`/user/Test-schedule/Test-section/${purchase_item.id}`}
                    >
                      <EventAvailableIcon
                        sx={{ width: "25px", height: "25px", color: "#3A9BDC" }}
                      />
                    </Link>
                  </TableCell>
                </TableRow>
              );
            });
          });
        })
      )}
    </TableBody>
  );
};

export default TestPurchasesTable;

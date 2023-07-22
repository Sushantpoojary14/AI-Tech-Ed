import { TableBody, TableCell, TableRow } from "@mui/material";
import React from "react";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { Link } from "react-router-dom";
import { ParaText1 } from "../../../../Components/Common/ParaText";

interface dataProps {
  data: Array<object>;
  func?: () => void;
}

const TestPurchasesTable = (props: dataProps) => {
  return (
    <TableBody>
      {props.data?.map((item: any, key: number) => {
        return (
          <TableRow key={key}>
            <TableCell align="center" sx={{ border: 0 }}>
              {key + 1}
            </TableCell>
            <TableCell align="center" sx={{ border: 0 }}>
              {item.ts_product.p_name}
            </TableCell>
            <TableCell align="center" sx={{ border: 0 }}>
              {item.ts_product.p_name}
            </TableCell>
            <TableCell align="center" sx={{ border: 0 }}>
              {item.ts_product.duration}
            </TableCell>
            <TableCell align="center" sx={{ border: 0 }}>
              {item.valid_from}
            </TableCell>
            <TableCell align="center" sx={{ border: 0 }}>
              {item.valid_till}
            </TableCell>
            <TableCell align="center" sx={{ border: 0 }}>
              <Link to={`/user/Test-schedule/Test-section/${item.id}`}>
                <EventAvailableIcon
                  sx={{ width: "25px", height: "25px", color: "#3A9BDC" }}
                />
              </Link>
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default TestPurchasesTable;

import {
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Button,
} from "@mui/material";
import { ParaText3, ParaText1 } from "./ParaText";
import FindInPageOutlinedIcon from "@mui/icons-material/FindInPageOutlined";
import { Link } from "react-router-dom";

interface headerProps {
  header: Array<string>;
}
interface dataProps {
  data: Array<object>;
  func?: () => void;
  url: string;
}

const TableHeader = (props: headerProps) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="center" sx={{ border: 0 }}>
          <ParaText3 text="Sr. No" />
        </TableCell>
        {props.header.map((item, key) => {
          return (
            <TableCell key={key} align="center" sx={{ border: 0 }}>
              <ParaText3 text={item} />
            </TableCell>
          );
        })}

        <TableCell align="center" sx={{ border: 0 }} colSpan={3}>
          <ParaText3 text="Details" />
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
const TableData = (props: dataProps) => {
  return (
    <TableBody>
      {props.data?.map((item: any, key) => {
        const { id, ...item2 } = item;
        let temp: any = Object.values(item2);
        return (
          <TableRow key={key}>
            <TableCell align="center" sx={{ border: 0 }}>
              {key + 1}
            </TableCell>
            {temp.map((val: any, key: number) => {
              return (
                <TableCell key={key} align="center" sx={{ border: 0 }}>
                  <ParaText1 text={val} />
                </TableCell>
              );
            })}
            <TableCell align="center" sx={{ border: 0 }}>
              <Link to={`${props.url}/${item.id}`}>
                <FindInPageOutlinedIcon
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
export { TableHeader, TableData };

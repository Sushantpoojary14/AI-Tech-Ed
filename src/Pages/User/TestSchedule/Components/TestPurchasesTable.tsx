import { TableBody, TableCell, TableRow } from "@mui/material";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { useNavigate} from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import tokenAxios from "../../../../Hooks/TokenAxios";

interface dataProps {
  data: Array<object>;
  func?: () => void;
}
type mUData = {
  ps_id:number,
  set_id:number
}
const TestPurchasesTable = (props: dataProps) => {
  // const [count, setCount] = useState<number>(0);
  const navigate = useNavigate();
  const TestMU = useMutation({
    mutationFn: async (data:mUData) => {
      return await tokenAxios.post("/post-user-test-status", {
        ps_id: data.ps_id,
        set_id:data.set_id
      });
    },
    onSuccess: (response) => {      
      console.log(response);
      
      navigate(`/user/Test-schedule/Test-section/${response.data.uts_id}`);
      // let url =`/user/Test-schedule/Exam-section/${response?.data?.user_test}`;
      // window.open(url, '_blank', 'width=1400,height=600');
    },
  });
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
        props.data?.map((purchase_item: any,) => {
          const ps_id:number   = purchase_item.id;
          const ts_pc = purchase_item.ts_product.get_ts_product_category;
          const ts_p = purchase_item.ts_product;
          return ts_pc.map((ts_pc_item: any) => {
            const tsc = ts_pc_item.test_series_categories;
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
                    {/* <Link
                      to={`/user/Test-schedule/Test-section/${purchase_item.id}`}
                    > */}
                      <EventAvailableIcon
                        sx={{ width: "25px", height: "25px", color: "#3A9BDC",cursor:'pointer' }}
                      onClick={()=>TestMU.mutate({ps_id:ps_id,set_id:set_item.id})}/>
                    {/* </Link> */}
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

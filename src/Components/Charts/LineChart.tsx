import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// const options: any = {
//   plugins: {
//     legend: {
//       display: true,
//       position: "right",
//       width: 200,
//       height: 200,
//       // maxHeight: 1,
//       labels: {
//         padding: 20,
//       },
//     },
//   },
// };

const LineChart = ({ lineData }: any) => {
  return <Line data={lineData} />;
};

export default LineChart;

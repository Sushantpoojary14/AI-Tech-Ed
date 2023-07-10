import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

// interface PieProps {
//   options: any;
//   pieData: any;
// }
const options: any = {
  plugins: {
    legend: {
      display: true,
      position: "right",
      width: 200,
      height: 200,
      // maxHeight: 1,
      labels: {
        padding: 20,
      },
    },
  },
};
const PieChart = ({ pieData }: any) => {
  return <Pie data={pieData} options={options} />;
};

export default PieChart;

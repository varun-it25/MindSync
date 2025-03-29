import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const Pie_data: { name: string; value: number }[] = [
    { name: "AAPL", value: 2.3 },
    { name: "NFLX", value: 5.6 },
    { name: "MSWT", value: 10.1 },
    { name: "Others", value: 3 },
];
 
const Pie_colors: string[] = ["#22C55E", "#A855F7", "#0EA5E9", "#989898"];

const MyPie = () => (
  <PieChart width={300} height={400} className="mt-[-0.5rem]">
    <Pie
      data={Pie_data}
      dataKey="value"
      nameKey="name"
      cx="50%"
      cy="50%"
      outerRadius={100}
      fill="#8884d8"
      label
      className="border border-blue-500"
    >
      {Pie_data.map((entry, index) => (
        <Cell className="border-red-500 border" key={`cell-${index}`} fill={Pie_colors[index % Pie_colors.length]} />
      ))}
    </Pie>
    <Tooltip />
    <Legend />
  </PieChart>
);

export default MyPie;
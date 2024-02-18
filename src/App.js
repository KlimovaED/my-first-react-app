import './App.scss';
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const options = {
  title: "My Daily Activities",
  titleTextStyle: {color: 'red', fontSize: '30'}
};

function App() {
  return (
    <div className="App">
  <Chart 
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"100vh"}
    />
    </div>
  );
}

export default App;

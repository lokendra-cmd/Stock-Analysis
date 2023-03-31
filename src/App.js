import SearchBar from './Components/SearchBar';
import './App.css';
import IndicesCard from './Components/IndicesCard';
import PieChart from './Components/PieChart';
import BarChart from './Components/BarChart';
import DataState from "./Context/DataState";
import Values from './Components/Values';
import Comparison from './Components/Comparison';
function App() {
  return (
    <>
     <DataState>
    <div className='grid'>
      <div><IndicesCard name={"NIFTY 50"} price={17000}/></div>
      <div><IndicesCard name={"BANK NIFTY"} price={43000}/></div>
      <div><IndicesCard name={"SENSEX"} price={57527}/></div>
      <div><IndicesCard name={"INDIA VIX"} price={15.2400}/></div>
    </div>

    <div className='grid2'>
    <PieChart/>
    <BarChart/>
    </div>
    <SearchBar/>
    <Values/>
    <Comparison/>
    </DataState>
    
   </>
  );
}

export default App;

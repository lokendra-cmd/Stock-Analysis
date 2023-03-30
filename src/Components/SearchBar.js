import {React,useState,useContext} from 'react'
import DataContext from "../Context/DataContext";
function SearchBar() {
  const [symbol, setsymbol] = useState()
  const context = useContext(DataContext);
  const {getData} = context;

  const handleClick=()=>{
    getData(symbol);
  }
  return (
   <div className='searchBox'>
    <input value={symbol} type="text" class="searchTerm" placeholder="What are you looking for?" onChange={(event)=>{setsymbol(event.target.value)}}/>
    <span><button onClick={handleClick}><i class="fa fa-search"></i></button></span>
   </div>
  )
}

export default SearchBar
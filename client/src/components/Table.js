import React, { useEffect,useState } from 'react'
import Row from './Row'
import { fetchData } from '../http';

const Table = ({dark}) => {
    const [dataArray, setDataArray] = useState([]);
    useEffect(async()=>{
      const extractData=async()=>{
        const {data}=await fetchData();
       
        console.log(data);
        setDataArray(data);
      }
      extractData();
    },[])
  return (
    <div className='mt-11 '>
      
<div class="relative overflow-x-auto shadow-md mx-2 mt-1">
    <table class="w-full text-sm text-left  border-spacing-8 border-collapse">
        <thead class="text-xs uppercase   text-[#7d7f85] cursor-pointer">
            <tr className='mt-6 '>
                <th scope="col" class="px-6 py-3">
                   <span className="whitespace-nowrap"> #</span>
                </th>
                <th scope="col" class="px-6 py-3">
                    <span className="whitespace-nowrap">Platform</span>
                </th>
                <th scope="col" class="px-6 py-3">
                     <span className="whitespace-nowrap">Last Traded Price</span>
                </th>
                <th scope="col" class="px-6 py-3">
                    <span className="whitespace-nowrap">Buy / Sell Price</span>
                </th>
                <th scope="col" class="px-6 py-3">
                     <span className="whitespace-nowrap">Difference</span>
                </th>
                <th scope="col" class="px-6 py-3">
                     <span className="whitespace-nowrap">Savings</span>
                </th>
            </tr>
        </thead>
        <tbody className='text-[#fefefe] text-[22px] font-bold'>
          
           
      {
        dataArray.map((data,index)=>{
        return <Row key={index} name={data.name} last={data.last} buy={data.buy} sell={data.sell} 
        base_unit={data.base_unit} dark={dark} volume={data.volume} index={index+1}/>
            }
        )
      }
          
         
        </tbody>
    </table>
</div>

    </div>
  )
}

export default Table

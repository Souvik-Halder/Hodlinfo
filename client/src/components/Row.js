import React from 'react'

const Row = (props) => {
  const {name,last,sell,buy,volume,base_unit,index,dark}=props;
  return (
<>
       <tr class={` mt-6 ${dark?'bg-[#2e3241]':'bg-[#f8f9fa]'}  ${dark?'text-white':'text-[#333665]'} `}>
                <th scope="row" class= {`px-6 py-4 font-medium  whitespace-nowrap`}>
                  <span className="whitespace-nowrap"> {index} </span>
                </th>
                <td class="px-6 py-4">
                  <span className="cursor-pointer whitespace-nowrap"> {name} </span>
                </td>
                <td class="px-6 py-4">
              <span className="whitespace-nowrap"> ₹ {last} </span>
                </td>
                <td class="px-6 py-4">
               <span className="whitespace-nowrap"> ₹ {buy} / ₹ {sell} </span>
                </td>
                <td class="pl-6 py-4">
               <span className="whitespace-nowrap"> {volume}     </span>
                </td>
                <td class="pl-6 py-4">
               <span className="whitespace-nowrap uppercase" >  {base_unit} </span>
                </td>
            </tr>
            <div className='mt-4'></div>
 </>
  )
}

export default Row

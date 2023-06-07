import React from 'react'

const Row = () => {
  return (
<>
       <tr class=" mt-6 bg-[#2e3241]">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <span className="whitespace-nowrap"> 1 </span>
                </th>
                <td class="px-6 py-4">
                  <span className="cursor-pointer whitespace-nowrap"> WazirX </span>
                </td>
                <td class="px-6 py-4">
              <span className="whitespace-nowrap"> ₹ 22,75,014 </span>
                </td>
                <td class="px-6 py-4">
               <span className="whitespace-nowrap"> ₹ 22,52,100 / ₹ 22,75,014 </span>
                </td>
                <td class="pl-6 py-4">
               <span className="whitespace-nowrap"> -4.52 %     </span>
                </td>
                <td class="pl-6 py-4">
               <span className="whitespace-nowrap" > ▼ ₹ 1,06,247 </span>
                </td>
            </tr>
            <div className='mt-4'></div>
 </>
  )
}

export default Row

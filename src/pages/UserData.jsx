import React from 'react'

export default function UserData() {
  return (
    <div>
      <div class="relative max-w-[1320px] mx-auto overflow-x-auto shadow-md sm:rounded-lg mt-28">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-100">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                #
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Phone
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Password
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               1320
                            </th>
                            <td class="px-6 py-4">
                                Dev
                            </td>
                            <td class="px-6 py-4">
                                sdsds@gmail.com
                            </td>
                            <td class="px-6 py-4">
                                515261233
                            </td>
                            <td class="px-6 py-4" type="password" >
                                52125
                            </td>
                            
                            <td class="px-6 py-4 ">
                                <button type="button" className=' pr-8 '>Edit</button>
                                <button type="button">Delete</button>
                            </td>
                        </tr>
                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              4532
                            </th>
                            <td class="px-6 py-4">
                                Veer
                            </td>
                            <td class="px-6 py-4">
                                llklk@gmail.com
                            </td>
                            <td class="px-6 py-4">
                                568123222
                            </td>
                            <td class="px-6 py-4">
                                51333
                            </td>
                            <td class="px-6 py-4 ">
                                <button type="button" className=' pr-8 '>Edit</button>
                                <button type="button">Delete</button>
                            </td>
                        </tr>
                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               8521
                            </th>
                            <td class="px-6 py-4">
                                Raj
                            </td>
                            <td class="px-6 py-4">
                                vvdvdv@gmail.com
                            </td>
                            <td class="px-6 py-4">
                                6512332154
                            </td>
                            <td class="px-6 py-4">
                                8456
                            </td>
                            <td class="px-6 py-4 ">
                                <button type="button" className=' pr-8 '>Edit</button>
                                <button type="button">Delete</button>
                            </td>
                        </tr> 
                    </tbody>
                </table>
            </div>
    </div>
  )
}

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function UserData() {
    // State to store users data
    let [users, setUsers] = useState([]);

    // Function to fetch user data from API
    let getUserData = () => {
        axios.get('https://raipradeep.in/form-api/viewUser.php')
            .then((res) => res.data)
            .then((finalRes) => {
                setUsers(finalRes.dataList)
            });
    }

  
    let userDelete = (userId) => {
        axios.get(`https://raipradeep.in/form-api/deleteUser.php?enid=${userId}`)
            .then((res) => res.data)
            .then(finalRes => {
                getUserData()
            })
    }

    // Fetch user data on component mount
    useEffect(() => {
        getUserData();
    }, []);

    return (
        <div>
            <div class="relative max-w-[1170px] mx-auto overflow-x-auto shadow-md sm:rounded-lg mt-28">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200">
                    <thead class="text-xs uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-100">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Id
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

                        {
                            users.length >= 1 ?
                                users.map((v, i) => {
                                    return (
                                        <TableRow v={v} key={i} index={i} userDelete={userDelete} />
                                    )
                                })
                                :
                                <tr>
                                    <td colSpan={5}> Data not found.</td>
                                </tr>
                        }

                    </tbody>
                </table>
                <Link to={'/'}><button class="text-white mx-auto flex justify-center mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Back to Login page.</button></Link>

            </div>
        </div>
    )
}

function TableRow({ v, index, userDelete }) {
    return (
        <tr class=" odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {index + 1}
            </th>
            <td class="px-6 py-4">
                {v.en_name}
            </td>
            <td class="px-6 py-4">
                {v.en_email}
            </td>
            <td class="px-6 py-4">
                {v.en_contact}
            </td>
            <td class="px-6 py-4" type="password" >
                {v.en_password}
            </td>
            <td class="px-6 py-4 ">
                <Link to={`/${v.en_id}`}> <button type="button" className=' pr-8 '>Edit</button></Link>
                <button type="button" onClick={() => userDelete(v.en_id)}>Delete</button>
            </td>
        </tr>
    )
}

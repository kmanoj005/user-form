import axios, { toFormData } from 'axios'
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import UserData from './UserData';

export default function UserForm() {
    // Initialize navigate function from react-router
    let navigate = useNavigate();
    let [userData, setuserData] = useState({
        name: '',
        email: '',
        mobile: '',
        password: '',
        id: ''
    })

    let userParams = useParams();
    let editId = userParams.id;
    useEffect(() => {
        if (editId !== undefined && editId !== "" && editId !== null) {
            axios.get(`https://raipradeep.in/form-api/viewUser.php?editId=${editId}`)
                .then((res) => (res.data))
                .then((finalRes) => {
                    let editUserData = finalRes.dataList;
                    setuserData({
                        name: editUserData.en_name,
                        email: editUserData.en_email,
                        mobile: editUserData.en_contact,
                        password: editUserData.en_password,
                        id: editId,
                    })
                })
        }
    }, [editId])

    // Function to update user data on input change

    let changeValue = (event) => {
        let obj = { ...userData }
        obj[event.target.name] = event.target.value;
        setuserData(obj)
    }

    // Function to save user data on form submission

    let saveData = (event) => {
        event.preventDefault();
        axios.post('https://raipradeep.in/form-api/saveUser.php', toFormData(userData))
            .then((res) => res.data)
            .then((finalRes) => {
                setuserData({
                    name: '',
                    email: '',
                    mobile: '',
                    password: ''
                })
                navigate('/user-data');
            })
    }


    // Render the form
    return (
        <div>
            <form onSubmit={saveData} className="max-w-[450px] mx-auto my-28 py-10 bg-teal-200 px-8 rounded-lg">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="name" value={userData.name} onChange={changeValue} id="floating_first_name" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-100 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="email" name="email" value={userData.email} onChange={changeValue} id="floating_email" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-100 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="tel" name="mobile" value={userData.mobile} onChange={changeValue} id="floating_phone" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-100 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="password" name="password" onChange={changeValue} value={userData.password} id="floating_password" className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-100 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{(editId !== undefined && editId !== "" && editId !== null) ? "Update" : "Save"}</button> <br />
                <Link to={'/user-data'}><button className="text-white mx-auto flex justify-center mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Go to Users-Data page.</button></Link>
            </form>
        </div>
    );
}
import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
function Button() {

  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([])
        useEffect(() => {
            ( async function ()  {
              try {
                const data = await axios.get('https://jsonplaceholder.org/users')
                console.log(data);
                setUsers(data.data);
              } catch (error) {
                console.log(error);
              }
            }


            )();
        }, [])



  return (

    <div>


    <button onClick={() => setCount(count+1) }   className='bg-slate-900  hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-10 flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 ' >Button</button>


      <h1>{count}</h1>

  



{/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<div className="overflow-x-auto max-w-2xl rounded-lg border border-gray-200 mx-auto">
  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
    <thead className="ltr:text-left rtl:text-right">
      <tr>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Id</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Email</th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
      {users.map(user => (
              <tr key={user.id}>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{user.id}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{(user.firstname) +" " + (user.lastname)}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.email}</td>
            </tr>
      ))}


    </tbody>
  </table>
</div>

</div>


  )
  }

export default Button
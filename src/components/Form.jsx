/* eslint-disable no-unused-vars */
import {React, useState} from 'react'

function Form() {
    

  

  return (
    <div>
  <form  className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700">Title:</label>
        <input
          type="text"
          id="title"
          
          
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block text-gray-700">Content:</label>
        <textarea
          id="content"
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          rows="4"
        ></textarea>
      </div>
      <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600">Add Todo</button>
    </form>

    </div>
  )
}

export default Form;
'use client'

import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import { run } from "../../gemini/Gemini";
import Result from '../../components/Result'
export default function AIContentGenerator({ params }) {
  const [output, setOutput] = useState('');
  const[display,setDisplay]=useState('');   


  const handleInputChange = (e) => {
    setOutput(`You selected: ${e.target.value}`);
   
  };
const submit=async()=>{
  const {id}=params;
  console.log(id);
const prompt= `I want to generate a ${id} on a topic ${output} and please give accurate result so that i can copy it and please give proper spacing line breaks too so it look good and please avoid # ''' symbols `;
const result=   await   run(prompt);
       console.log(result);
       setDisplay(result);
}
  return (
    <div className="h-screen w-screen flex">
      {/* Left Side - Input Box and Text */}
      <div className="w-1/2 p-8 bg-gray-100 flex flex-col justify-center items-start">
        <h2 className="text-3xl font-bold mb-4">AI Content Generator</h2>
        <p className="mb-4 text-lg text-gray-700"> {params?.id}</p>
        <input 
          type="text" 
          className="w-full p-4 border border-gray-300 rounded-lg" 
          placeholder="Enter functionality..." 
          onChange={handleInputChange}
        />
      <div class="flex justify-center mt-10 mr-100">
  <button onClick={submit} class="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-xl ml-20 mt-20`">
     Generate
  </button>
</div>
      </div>

      {/* Right Side - Text Editor */}
      <div className="w-1/2 p-8 bg-white flex flex-col">
        <h2 className="text-3xl font-bold mb-4">Generated Content</h2>
        {/* <textarea 
          className="w-full h-full p-4 border border-gray-300 rounded-lg"
          value={display}
          readOnly
        /> */}
        <Result message={display}/>
      </div>
    </div>
  );
}

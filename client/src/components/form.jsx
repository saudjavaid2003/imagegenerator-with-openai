import React from 'react';

const Form = ({
  labelname = "",
  type = "text",
  name = "",
  placeholder = "",
  value = "",
  handlechange,
  issurpriseme,
  handlesurpriseme = () => {},
}) => {
  return (
    <div className="mb-4">
      {/* Label and Surprise Me Button */}
      <div className="flex items-center justify-between mb-2">
        <label htmlFor={name} className="block text-sm font-medium text-gray-900">
          {labelname}
        </label>
        {issurpriseme && (
          <button 
            type="button" 
            onClick={handlesurpriseme} 
            className="text-xs font-semibold bg-[#6469ff] text-white py-1 px-3 rounded transition-all duration-200 hover:bg-[#4649ff]">
            Surprise Me
          </button>
        )}
      </div>

      {/* Input Field */}
      <input 
        type={type} 
        id={name} 
        name={name} 
        placeholder={placeholder} 
        value={value} 
        onChange={handlechange} 
        required 
        autoComplete="off"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3 transition-all duration-200 hover:border-gray-500"
      />
    </div>
  );
};

export default Form;

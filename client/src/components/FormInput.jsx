export default function FormInput({ label, type, placeholder, value, onChange }) {
	return (
	  <div className="mb-4">
		<label className="block text-sm font-medium mb-1">
		  {label}
		</label>
		<input
		  type={type}
		  placeholder={placeholder}
		  value={value}
		  onChange={onChange}
		  required
		  className="w-full p-1.5 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300"
		/>
	  </div>
	);
  }
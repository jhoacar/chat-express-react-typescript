export function Input({ className, ...rest }: any) {
  return (
    <input
      className={`
  px-3 py-2 
  bg-gray-50 
  border 
  shadow-sm 
  border-slate-300 
  placeholder-slate-400 
  disabled:bg-slate-50 
  disabled:text-slate-500 
  disabled:border-slate-200 
  focus:outline-none 
  focus:border-blue-500 
  focus:ring-blue-500 
  block 
  w-full 
  rounded-md
  sm:text-sm 
  focus:ring-1 
  focus:invalid:border-blue-500 
  focus:invalid:ring-blue-500 
  disabled:shadow-none
  ${className}
    `}
      {...rest}
    />
  );
}

export default Input;

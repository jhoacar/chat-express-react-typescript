export function Spinner() {
  return (
    <div className={`
    h-full 
    flex flex-col 
    gap-4 
    items-center 
    justify-center
    `}
    >
      <div className="h-20 w-20">
        <img src="/icon.svg" alt="icon" />
      </div>
      <div className={`
      h-20 w-20 
      rounded-full 
      border-4 
      border-t-blue-400 
      border-solid
      animate-spin
      transition 
      ease-in-out 
      duration-150
      `}
      />
    </div>
  );
}

export default Spinner;

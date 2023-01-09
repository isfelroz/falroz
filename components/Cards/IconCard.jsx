export default ({ children }) => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
        {children}
      </div>
    </div>
  )
}

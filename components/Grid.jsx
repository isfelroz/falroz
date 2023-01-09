export default function ({ children }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 py-10 lg:py-20 gap-5 lg:gap-8">
      {children}
    </div>
  )
}

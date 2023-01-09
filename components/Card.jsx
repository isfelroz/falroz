import Link from 'next/link'

export default ({ link, children, background }) => {
  if (link?.href)
    return (
      <Link {...link} className="group">
        <div className="relative h-full isolate">
          <div className=" bg-primary-black p-8 rounded-3xl shadow-shadow1 h-full w-full z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all">
            {children}
          </div>
          <div
            className={`${
              background ?? ''
            } radialBackground absolute rounded-3xl border border-1 border-primary-black z-[-1] top-0 left-0 w-full h-full group-hover:-translate-x-2 group-hover:translate-y-2 transition-all`}
          ></div>
        </div>
      </Link>
    )

  return (
    <div className=" bg-primary-black p-8 rounded-3xl shadow-shadow1 h-full">
      {children}
    </div>
  )
}

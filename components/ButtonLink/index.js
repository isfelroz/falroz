import Link from 'next/link'

export default function ButtonLink({ to, children }) {
  return (
    <Link
      className={`px-4 py-2 h-fit w-fit font-medium rounded-3xl bg-gradient-to-r from-[#9E4B88] via-[#CA6678] to-[#E98A77] text-white`}
      href={to}
    >
      {children}
    </Link>
  )
}

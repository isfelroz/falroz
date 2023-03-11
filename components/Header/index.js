import ButtonLink from '@components/ButtonLink'
import Link from 'next/link'
import Logo from '@components/Logo'
import Container from '@components/Container'
import MenuResoponsive from '@components/MenuResoponsive'
import NavLinks from '@components/NavLinks'

export default function Header({ menu }) {
  return (
    <section className="sticky top-0 bg-primary-black/50 z-10 backdrop-blur-md">
      <Container>
        <div className="w-full flex items-center gap-2">
          <div className="flex justify-between py-5 flex-shrink flex-grow">
            <Logo />
            <div className="hidden lg:block m-auto">
              <NavLinks links={menu} classes="gap-24" />
            </div>
            <ButtonLink to="/contact">Get in Touch</ButtonLink>
          </div>
          <MenuResoponsive>
            {menu && menu?.length && (
              <ul className="flex flex-col gap-24 h-full justify-center">
                {menu.map((link, key) => (
                  <li
                    key={key}
                    className="text-white drop-shadow font-bold uppercase text-4xl text-center"
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            )}
          </MenuResoponsive>
        </div>
      </Container>
    </section>
  )
}

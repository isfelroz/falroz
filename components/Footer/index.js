import Logo from '@components/Logo'
import Link from 'next/link'
import Container from '@components/Container'
import Icon from '@components/Icon'
import NavLinks from '@components/NavLinks'

export default function Footer({ menu, socials }) {
  return (
    <Container>
      <div className="grid gap-16 py-5">
        <div className="flex lg:flex-row flex-col items-center lg:items-end gap-16 w-fit m-auto">
          <Logo width={150} />
          <NavLinks links={menu} classes="gap-10 lg:gap-16" />
        </div>
        {socials?.length && (
          <div className="flex gap-12 w-fit m-auto">
            {socials.map((social, key) => (
              <Link key={key} href={social.href}>
                <Icon type={social.type} size={'30px'} hover={true} />
              </Link>
            ))}
          </div>
        )}
        <div className="flex flex-col items-center lg:flex-row w-fit m-auto gap-10">
          <div>© 2022 falroz</div>
          <div>
            <span className="mr-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9E4B88] via-[#CA6678] to-[#E98A77]">
              Built by
            </span>
            <a href="#">Felipe Alarcon</a>
          </div>
          <div className="">
            <a
              href="https://github.com/falroz/falroz"
              rel="noopener"
              target="_blank"
              className="flex gap-2 items-center"
            >
              <Icon type={'github'} size={'16px'} /> Code Source
            </a>
          </div>
        </div>
      </div>
    </Container>
  )
}

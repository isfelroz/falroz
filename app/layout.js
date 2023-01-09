import globalData from '../data/global.json'

import './globals.css'
import Header from '@components/Header'
import Footer from '@components/Footer'

async function getData() {
  // const res = await fetch(`${process.env.API_HOST}/home`)
  // return res.json()
  return globalData
}

export default async function RootLayout({ children }) {
  const { navigation, socials } = await getData()

  return (
    <html lang="en">
      <head>
        <title>falroz | portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`bg-primary-black w-screen font-DMSans overflow-hidden overflow-y-visible h-screen`}
      >
        <Header menu={navigation.menu} />
        {children}
        <Footer menu={navigation.menu} socials={socials} />
      </body>
    </html>
  )
}

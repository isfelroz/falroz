import globalData from '../data/global.json'

import './globals.css'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Container from '@components/Container'
import Script from 'next/script'

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
                <Script
                    dangerouslySetInnerHTML={{
                        __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://gtm.felroz.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KZBN4VFF');
        `
                    }}
                />
            </head>
            <body
                className={`bg-primary-black w-screen font-DMSans overflow-hidden overflow-y-visible min-h-screen flex flex-col`}
            >
                <Header menu={navigation.menu} />
                <main className="flex-auto">
                    <Container>{children}</Container>
                </main>
                <Footer menu={navigation.menu} socials={socials} />
            </body>
        </html>
    )
}

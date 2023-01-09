import homeJson from '../data/home.json'

import Container from '@components/Container'
import Grid from '@components/Grid'
import GridItem from '@components/GridItem'
import Card from '@components/Card'
import AboutCard from '@components/Cards/AboutCard'
import BasicCard from '@components/Cards/BasicCard'
import IconCard from '@components/Cards/IconCard'
import SocialIcon from '@components/SocialIcon'
import ContactCard from '@components/Cards/ContactCard'
import ProgressSkill from '@components/ProgressSkill'
import Icon from '@components/Icon'

async function getData() {
  // const res = await fetch(`${process.env.API_HOST}/home`)
  // return res.json()
  return homeJson
}

export default async function Page() {
  const { content } = await getData()
  return (
    <Container>
      <Grid>
        <GridItem size={'medium'}>
          <Card link={{ href: '/about' }} background={'bg-[#CA6678]'}>
            <AboutCard {...content.about} />
          </Card>
        </GridItem>
        <GridItem>
          <Card link={{ href: '/about' }} background={'bg-primary'}>
            <BasicCard />
          </Card>
        </GridItem>
        <GridItem>
          <div className="grid grid-cols-2 grid-rows-2 h-full gap-5 lg:gap-8">
            {content.socials.map((social, key) => {
              const { type, href } = social

              let color = 'bg-primary'

              if (type === 'twitter') color = 'bg-twitter'
              if (type === 'linkedin') color = 'bg-linkedin'
              if (type === 'npm') color = 'bg-npm'
              if (type === 'github') color = 'bg-github'

              return (
                <Card key={key} link={{ href }} background={color}>
                  <IconCard>
                    <SocialIcon type={type} size={'80px'} />
                  </IconCard>
                </Card>
              )
            })}
          </div>
        </GridItem>
        <GridItem>
          <Card link={{ href: '/about' }} background={'bg-primary'}>
            <BasicCard />
          </Card>
        </GridItem>
        <GridItem>
          <Card link={{ href: '/about' }} background={'bg-primary'}>
            <BasicCard />
          </Card>
        </GridItem>
        <GridItem size="medium">
          <Card></Card>
        </GridItem>
        <GridItem>
          <Card link={{ href: '/about' }} background={'bg-javascript'}>
            <BasicCard>
              <ProgressSkill percents={90} size={170}>
                <Icon type="javascript" size={'70px'} />
              </ProgressSkill>
            </BasicCard>
          </Card>
        </GridItem>
        <GridItem>
          <div className="grid grid-cols-2 grid-rows-2 h-full gap-5 lg:gap-8">
            {content.skills.map((skill, key) => {
              const { type, value } = skill

              return (
                <div key={key} className="relative">
                  <Card>
                    <div className="absolute top-0 left-0 w-full h-full">
                      <ProgressSkill percents={value} size={100}>
                        <Icon type={type} size={'45px'} />
                      </ProgressSkill>
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>
        </GridItem>
        <GridItem size="medium">
          <Card link={{ href: '/about' }} background={'bg-primary'}>
            <ContactCard />
          </Card>
        </GridItem>
      </Grid>
    </Container>
  )
}

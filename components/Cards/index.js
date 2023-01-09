'use client'

import { ProgressCircle } from '@components/ProgressCircle'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowUpRightCircle } from 'react-icons/bs'
import {
  SiJavascript,
  SiThreedotjs,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import Card from '@components/Card'
import SocialIcon from '@components/SocialIcon'

const AboutCard = ({ title, description, avatar }) => {
  return (
    <div className="h-full flex flex-col justify-between gap-6 md:gap-0">
      <div className="flex flex-col-reverse gap-5 items-center md:flex-row md:justify-between md:items-end ">
        <h1 className="font-bold text-4xl">{title}</h1>
        <Image
          src={avatar?.src}
          width={avatar?.width}
          height={avatar?.height}
          alt={avatar?.alt}
        />
      </div>
      <div className="flex flex-col md:flex-row md:justify-between items-end gap-6 md:gap-0">
        <p className=" text-gray text-xl items-end text-center md:text-left md:w-[70%]">
          {description}
        </p>
        <div className="h-fit">
          <Link href={'/'} className={'icon-svg'}>
            <BsArrowUpRightCircle size={'30px'} className="fill-gray-400" />
          </Link>
        </div>
      </div>
    </div>
  )
}
const ResumeCard = () => {
  return (
    <>
      <div className="flex h-full items-end w-full">
        <div></div>
        <div className="flex justify-between w-full items-end">
          <div>
            <h3 className="font-bold text-sm uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#9E4B88] via-[#CA6678] to-[#9e7269]">
              Welcome to my world
            </h3>
            <h2 className=" text-2xl font-bold">My Resume</h2>
          </div>
          <div className="h-fit">
            <Link href={'/'} className={'icon-svg'}>
              <BsArrowUpRightCircle size={'30px'} className="fill-gray-400" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
const SocialCard = ({ type }) => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
        <SocialIcon type={type} size="80px" />
      </div>
    </div>
  )
}

const SOCIALS = [
  { icon: '', href: '/' },
  { icon: '', href: '/' },
  { icon: '', href: '/' },
  { icon: '', href: '/' },
]

const SocialsContainer = ({ socials = SOCIALS }) => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 h-full gap-5 lg:gap-8">
      {socials.map((social, key) => (
        <SocialCard key={key} {...social} />
      ))}
    </div>
  )
}
const ProjectCard = () => {
  return (
    <Card>
      <h1>Felipe Alarcon</h1>
    </Card>
  )
}
const MainSkillCard = () => {
  return (
    <Card>
      <div className="flex h-full items-end w-full flex-col">
        <div className=" flex-shrink flex-grow grid w-full place-items-center">
          <div className="relative">
            <ProgressCircle size={170} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <SiJavascript size={'70px'} className="rounded" />
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full items-end">
          <div>
            <h3 className="font-bold text-sm uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#9E4B88] via-[#CA6678] to-[#9e7269]">
              Skills & Experences
            </h3>
            <h2 className=" text-2xl font-bold">My Toolbox</h2>
          </div>
          <div className="h-fit">
            <Link href={'/'} className={'icon-svg'}>
              <BsArrowUpRightCircle size={'30px'} className="fill-gray-400" />
            </Link>
          </div>
        </div>
      </div>
    </Card>
  )
}

const SkillCard = ({ icon, value }) => {
  return (
    <Card>
      <div className="relative w-full h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <ProgressCircle size={100} percents={value} />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {icon}
        </div>
      </div>
    </Card>
  )
}

const SKILLS = [
  { icon: <SiReact size={'45px'} />, value: 70 },
  { icon: <SiThreedotjs size={'40px'} className="translate-x-1" />, value: 50 },
  { icon: <TbBrandNextjs size={'45px'} />, value: 70 },
  { icon: <SiTailwindcss size={'45px'} />, value: 65 },
]

const SkillsContainer = ({ skills = SKILLS }) => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 h-full gap-5 lg:gap-8">
      {skills.map((skill, key) => (
        <SkillCard key={key} {...skill} />
      ))}
    </div>
  )
}

const ContactCard = () => {
  return (
    <Card>
      <div className="flex h-full items-end w-full">
        <div></div>
        <div className="flex justify-between w-full items-end">
          <div>
            <h3 className="font-bold text-sm uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#9E4B88] via-[#CA6678] to-[#9e7269]">
              What's next ?
            </h3>
            <h2 className=" text-5xl font-bold">Get In Touch</h2>
          </div>
          <div className="h-fit">
            <Link href={'/'} className={'icon-svg'}>
              <BsArrowUpRightCircle size={'30px'} className="fill-gray-400" />
            </Link>
          </div>
        </div>
      </div>
    </Card>
  )
}

const ServicesCard = () => {
  return (
    <Card>
      <h1>Felipe Alarcon</h1>
    </Card>
  )
}

export {
  AboutCard,
  ResumeCard,
  SocialsContainer,
  ProjectCard,
  MainSkillCard,
  ContactCard,
  ServicesCard,
  SkillsContainer,
}

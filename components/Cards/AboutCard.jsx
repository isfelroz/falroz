import Icon from '@components/Icon'
import Image from 'next/image'

export default ({ title, description, avatar }) => {
  return (
    <div className="h-full flex flex-col justify-between gap-6 md:gap-0">
      <div className="flex flex-col-reverse gap-5 items-center md:flex-row md:justify-between md:items-end ">
        <h1 className="font-bold text-4xl">{title}</h1>
        <Image
          src={avatar?.src}
          width={avatar?.width}
          height={avatar?.height}
          alt={avatar?.alt}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col md:flex-row md:justify-between items-end gap-6 md:gap-0">
        <p className=" text-gray text-xl items-end text-center md:text-left md:w-[70%]">
          {description}
        </p>
        <div className="h-fit icon-svg">
          <Icon type="arrow" />
        </div>
      </div>
    </div>
  )
}

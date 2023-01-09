import Icon from '@components/Icon'

export default () => {
  return (
    <div className="flex h-full items-end w-full">
      <div></div>
      <div className="flex justify-between w-full items-end">
        <div>
          <h3 className="font-bold text-sm uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#9E4B88] via-[#CA6678] to-[#9e7269]">
            Welcome to my world
          </h3>
          <h2 className=" text-2xl font-bold">My Resume</h2>
        </div>
        <div className="h-fit icon-svg">
          <Icon type="arrow" />
        </div>
      </div>
    </div>
  )
}

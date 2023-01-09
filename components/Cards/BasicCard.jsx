import Icon from '@components/Icon'

export default ({ children }) => {
  return (
    <div className="flex flex-col h-full items-end w-full">
      <div className="flex-shrink flex-grow grid w-full place-items-center">
        {children}
      </div>
      <div className="flex justify-between w-full items-end">
        <div>
          <h3 className="font-bold text-sm uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary-dark via-primary to-primary-ligth">
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

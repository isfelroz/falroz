import { ProgressCircle } from '@components/ProgressCircle'

export default ({ children, percents, size }) => {
  return (
    <div className="relative w-full h-full">
      <ProgressCircle percents={percents} size={size} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {children}
      </div>
    </div>
  )
}

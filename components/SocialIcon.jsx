import { SiGithub, SiTwitter, SiLinkedin } from 'react-icons/si'
import { DiNpm } from 'react-icons/di'

export default ({ type, size }) => {
  if (type === 'twitter') return <SiTwitter size={size} />
  if (type === 'linkedin') return <SiLinkedin size={size} />
  if (type === 'npm') return <DiNpm size={size} />
  if (type === 'github') return <SiGithub size={size} />
}

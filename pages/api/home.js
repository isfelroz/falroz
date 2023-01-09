import home from '../../data/home.json'

export default function handler(req, res) {
  res.status(200).json(home)
}

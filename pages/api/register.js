export default function handler(req, res) {
  if (req.method === 'POST') {
    res.status(202).json({ message: 'User data received successfully', body: req.body });
  } else {
    res.status(404).json({ message: 'Api not implemented' });
  }
}

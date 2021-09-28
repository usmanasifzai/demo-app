export default function handler(req, res) {
  if (req.method === 'GET') {
    const users = [
      { name: 'Usman Asif', email: 'usman.asif@test.com' },
      { name: 'Jason Roy', email: 'json@test.com' },
      { name: 'Cameron White', email: 'cameron@test.com' },
      { name: 'Moeen Ali', email: 'moeen.ali@test.com' },
      { name: 'Will Smith', email: 'will.smith@test.comusman.asif@test.com' },
    ];
    res.status(200).json({ users });
  } else {
    res.status(404).json({ message: 'Api not implemented' });
  }
}

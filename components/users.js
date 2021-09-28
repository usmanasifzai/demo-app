import { useEffect, useState } from 'react';

import User from './user';

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/users', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'GET'
      })

      const result = await res.json()

      setUsers(result.users)
    }

    fetchData();
  }, [])


  return (
    <>
      {
        users.map((user, index) => (
          <User key={index} user={user} />
        ))
      }
    </>
  )
}

export default Users

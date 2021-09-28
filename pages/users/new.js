import Link from 'next/link';

import { useState } from 'react'
import Layout from '../../components/layout'

export default function UserFrom() {
   const [name, setName] = useState('')

  const registerUser = async event => {
    event.preventDefault()

    const reqBody = JSON.stringify({
      name: name
    })

    console.info('Request Data', reqBody)

    const res = await fetch('/api/register', {
      body: reqBody,
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const result = await res.json()

    console.log("Api Response", result)
    setName('')
  }

  return (
    <Layout>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2>User Form</h2>

          <form onSubmit={registerUser}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} type="text" autoComplete="name" required className="form-control" />
            </div>

            <button type="submit" className="btn btn-primary mt-2">Register</button>
          </form>
        </div>
      </div>

      <Link href="/">
        Home
      </Link>
    </Layout>
  )
}

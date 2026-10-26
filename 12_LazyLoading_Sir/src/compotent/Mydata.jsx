import { useEffect, useState } from 'react'
import axios from 'axios'

function Mydata() {
    const [myapi, setMyapi] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        async function getData() {
            try {
                const result = await axios.get("https://jsonplaceholder.typicode.com/posts")
                console.log(result.data)
                setMyapi(result.data)
            } catch (error) {
                setError('Unable to load posts. Please try again later.')
                console.error('Failed to load posts:', error)
            }
        }
        getData()
    }, [])

  return (
    <div>
        {error && <p role="alert">{error}</p>}
        {
            myapi.map((item) => (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    <p>{item.body}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Mydata
import React from 'react'

function Mydata() {
    const [myapi, setMyapi] = useState([])

    useEffect(() => {
        async function getData() {
            const result = await axios.get("https://jsonplaceholder.typicode.com/posts")
            console.log(result.data.Mydata)
        }
        getData()
    }, [])

  return (
    <div>
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
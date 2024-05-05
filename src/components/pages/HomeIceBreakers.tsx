import { useEffect, useState } from 'react'

interface Icebreaker {
  id: string
  title: string
  description: string
  link: string
}

interface IcebreakersProps {
  icebreakers: Icebreaker[]
}

const HomeIceBreakers = () => {
  const [icebreakers, setIcebreakers] = useState<any>(null)

  useEffect(() => {
    const fetchIcebreakers = async () => {
      const response = await fetch('/api/icebreaker')
      const data = await response.json()
      setIcebreakers(data)
    }

    fetchIcebreakers()
  }, [])

  if (!icebreakers) {
    return <p>Loading ...</p>
  }
  return (
    <div>
      <h1>Icebreakers</h1>
      <ul>
        {icebreakers.map((icebreaker: Icebreaker) => (
          <li key={icebreaker.id}>
            <a href={`/icebreaker/${icebreaker.id}`}>{icebreaker.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomeIceBreakers

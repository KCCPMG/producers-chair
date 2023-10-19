import { useRouter } from "next/router";


const Movie = () => {

  const router = useRouter();

  return (
    <main>
      <h1>{router.query.movie}</h1>
    </main>
  )
}

export default Movie;
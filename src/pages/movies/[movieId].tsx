import { useRouter } from "next/router";
import { roboto } from '../../fonts';
import { GetStaticPropsContext, GetStaticPaths } from "next";
import InvestButton from "~/components/InvestButton/InvestButton";
import { Movie, Role, Creator } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";



export async function getStaticProps(
  context: GetStaticPropsContext<{ movieId: string }>,
) {

  const movieId = context.params?.movieId as string;
  const prisma = new PrismaClient();

  return Promise.all([
    prisma.movie.findUnique(
      { 
        where: { 
          id: movieId 
        },
        include: {
          crew: {
            include: {
              creator: {
                include: {
                  user: {
                    select: {
                      name: true
                    }
                  }
                }
              }
            }
          }
        }
      }
    )
  ]).then(responses => {
    const [movie] = responses;

    return {
      props: {
        movie,
        // crew
      },
      revalidate: 1,
    };

  })


}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export const getStaticPaths: GetStaticPaths = async () => {
  const prisma = new PrismaClient();

  const movies: {id: string}[] = await prisma.movie.findMany({
    select: {
      id: true,
    },
  });

  return {
    paths: movies.map((movie) => ({
      params: {
        movieId: movie.id,
      },
    })),
    // https://nextjs.org/docs/pages/api-reference/functions/get-static-paths#fallback-blocking
    fallback: false
  };
};

type MovieViewProps = {
  movie: Movie & {crew: Role[]},
  // crew: Role[]
}


const MovieView = ({ movie }: MovieViewProps) => {

  const {description, title, imdbLink, crew } = movie;

  console.log({movie});

  return (
    <main className={`${roboto.variable} text-white relative bg-neutral-900 w-screen`}>
      <div className="max-w-7xl mx-auto">
        <h1>{movie.title}</h1>
        <img className="max-w-7xl h-96 relative mx-auto rounded-sm" src="https://via.placeholder.com/1280x384"  alt={title}/>
        <div className="max-w-7xl h-96 relative mx-auto bg-red-900 rounded-[5px] flex">
          <div className="inline-block w-1/2 m-auto">
            <div className="text-white text-[32px] font-bold capitalize">
              Summary: 
            </div>
            <div className="w-[469px] text-white text-xl font-normal p-2 border-2">
              {movie ? description : "Loading..."}
            </div>
          </div>
          <div className="inline-block w-1/2 m-auto">
            <div className="text-white text-[32px] font-bold capitalize">
                Add Amount   •    
              <span>
                0% invested out of $1.2M
              </span>
            </div>
            <ProgressBar />
            <div className="flex">
              <div>
                <div className="text-white text-xl font-bold capitalize">
                  Top Investors
                </div>
                <div className="text-white text-xl font-normal">
                  When people invest in your film they will show up here
                </div>
              </div>
              <InvestButton />
            </div>
          </div>
        </div>
        <div className="flex">
          <CrewPreview crew={movie.crew}/>
          <div className="updates">
            <div>
              Updates
            </div>
            <div className="w-[465px] h-[204px] p-2.5 rounded-[5px] border border-zinc-600 justify-center items-center gap-2.5 inline-flex">
              <div className="w-[445px]">
                <span className="text-white text-xl font-normal font-['Roboto']">
                  Write an update about your film and keep your investers in the know! <br/>
                </span>
                <span className="text-white text-xl font-normal font-['Roboto'] capitalize">
                  <br/>
                  Lorem ipsum dolor sit amet consectetur. At maecenas tempor malesuada gravida egestas. Malesuada risus vel viverra diam. Vel nunc luctus volutpat sapien urna risus aenean interdum pharetra. Vestibulum elit.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

const ProgressBar = () => {
  return (
    <div>

    </div>
  )
}

type crewProps = {
  crew: typeof Creator[]
}


const CrewPreview = ({
  crew
} : crewProps) => {
  return (
    <div className="crew inline-block w-1/2 m-auto">
      <div className="text-white text-[32px] font-bold capitalize">
        Crew
      </div>
      <div className="crew-container">
        {crew.map(creator => (
          <div key={creator.id}>
          <img src={creator.image} alt={creator.name}/>
          <p>{creator.name}</p>
          <p>{creator.role}</p>
          
          {creator.imdb_url && <Link href={creator.imdb_url}>IMDb</Link>}
          
        </div>
        ))}
      </div>

    </div>
    
  )
}

export default MovieView;
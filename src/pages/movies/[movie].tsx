import { useRouter } from "next/router";
import { roboto } from '../../fonts';
import { api } from "~/utils/api";
import { GetStaticPropsContext, GetStaticPaths } from "next";
import { createServerSideHelpers } from '@trpc/react-query/server';
import InvestButton from "~/components/InvestButton/InvestButton";
import { movieRouter } from "~/server/api/routers/movie";


export async function getStaticProps(
  context: GetStaticPropsContext<{ id: string }>,
) {
  const helpers = createServerSideHelpers({
    router: movieRouter,
    ctx: {},
    transformer: superjson, // optional - adds superjson serialization
  });
  const id = context.params?.id as string;
  // prefetch `post.byId`
  await helpers.post.byId.prefetch({ id });
  return {
    props: {
      trpcState: helpers.dehydrate(),
      id,
    },
    revalidate: 1,
  };
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await prisma.post.findMany({
    select: {
      id: true,
    },
  });
  return {
    paths: posts.map((post) => ({
      params: {
        id: post.id,
      },
    })),
    // https://nextjs.org/docs/pages/api-reference/functions/get-static-paths#fallback-blocking
    fallback: 'blocking',
  };
};

const Movie = () => {

  // GetServerSideProps(() => {

  // })

  const router = useRouter();

  const movie = api.movies.movie.useQuery({id: router.query.movie as string}).data;
  console.log(movie);


  return (
    <main className={`${roboto.variable} relative bg-neutral-900 w-screen`}>
      <h1></h1>
      <img className="max-w-7xl h-96 relative mx-auto rounded-sm" src="https://via.placeholder.com/1280x384"  />
      <div className="max-w-7xl h-96 relative mx-auto bg-red-900 rounded-[5px] flex">
        <div className="inline-block w-1/2 m-auto">
          <div className="text-white text-[32px] font-bold capitalize">
            Summary: 
          </div>
          <div className="w-[469px] text-white text-xl font-normal p-2 border-2">
            {movie ? movie.description : "Loading..."}
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
      <h1 className="text-white">{router.query.movie}</h1>
      <div className="flex">
        <div className="crew">
          <div className="text-white text-[32px] font-bold capitalize">
            Crew
          </div>
          <div className="crew-container">

          </div>

        </div>
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
  name: string,
  image?: string,
  imdb_url?: string,
  role: string
}


const CrewPreview = ({
  name,
  image,
  imdb_url,
  role
} : crewProps) => {
  return (
    <div>
      <img></img>
    </div>
  )
}

export default Movie;
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Carousel from "../components/Carousel/Carousel";
import HeroImage from "~/components/HeroImage/HeroImage";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Producer's Chair</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        
      <main className=" relative bg-neutral-900">
      {/* <main className=" flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]"> */}
        <HeroImage />
        <Carousel category="sample" /> 
        

    <div style={{left: 45, top: 888.80, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Roboto', fontWeight: '700', textTransform: 'capitalize', wordWrap: 'break-word'}}>Top Invested</div>
    <div style={{left: 45, top: 1200, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Roboto', fontWeight: '700', textTransform: 'capitalize', wordWrap: 'break-word'}}>Features</div>
    <div style={{left: 157, top: 888.80, position: 'absolute', color: '#A5A5A5', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', textTransform: 'capitalize', wordWrap: 'break-word'}}>Least invested</div>
    <div style={{left: 128, top: 1200, position: 'absolute', color: '#A5A5A5', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', textTransform: 'capitalize', wordWrap: 'break-word'}}>Shorts</div>
    <div style={{width: 1363, height: 183.80, left: 38, top: 934.80, position: 'absolute'}}>

        <img style={{width: 328.47, height: 183.80, left: 689.69, top: 0, position: 'absolute', borderRadius: 5}} src="https://via.placeholder.com/328x184" />
        <img style={{width: 328.47, height: 183.80, left: 1034.53, top: 0, position: 'absolute', borderRadius: 5}} src="https://via.placeholder.com/328x184" />
        <div style={{width: 58.23, height: 35.49, padding: 10, left: 254.77, top: 135.57, position: 'absolute', background: '#1D55A8', borderRadius: 5, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div style={{color: 'white', fontSize: 16, fontFamily: 'Roboto', fontWeight: '700', textTransform: 'capitalize', wordWrap: 'break-word'}}>Invest</div>
        </div>
        <div style={{width: 58.23, height: 35.49, padding: 10, left: 599.61, top: 135.57, position: 'absolute', background: '#1D55A8', borderRadius: 5, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div style={{color: 'white', fontSize: 16, fontFamily: 'Roboto', fontWeight: '700', textTransform: 'capitalize', wordWrap: 'break-word'}}>Invest</div>
        </div>
        <div style={{width: 58.23, height: 35.49, padding: 10, left: 944.46, top: 135.57, position: 'absolute', background: '#1D55A8', borderRadius: 5, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div style={{color: 'white', fontSize: 16, fontFamily: 'Roboto', fontWeight: '700', textTransform: 'capitalize', wordWrap: 'break-word'}}>Invest</div>
        </div>
        <div style={{width: 58.23, height: 35.49, padding: 10, left: 1289.30, top: 135.57, position: 'absolute', background: '#1D55A8', borderRadius: 5, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div style={{color: 'white', fontSize: 16, fontFamily: 'Roboto', fontWeight: '700', textTransform: 'capitalize', wordWrap: 'break-word'}}>Invest</div>
        </div>
    </div>
    <div style={{width: 227, height: 0, left: 38, top: 916.80, position: 'absolute', border: '2px #616161 solid'}}></div>
    <div style={{width: 148, height: 0, left: 38, top: 1228, position: 'absolute', border: '2px #616161 solid'}}></div>
    <div style={{width: 92, height: 5, left: 45, top: 912.80, position: 'absolute', background: '#A5A5A5'}} />
    <div style={{width: 48, height: 5, left: 45, top: 1224, position: 'absolute', background: '#A5A5A5'}} />
    <div style={{width: 1363, height: 183.80, left: 38, top: 1239.59, position: 'absolute'}}>
        <img style={{width: 328.47, height: 183.80, left: 0, top: 0, position: 'absolute', borderRadius: 5}} src="https://via.placeholder.com/328x184" />
        <img style={{width: 328.47, height: 183.80, left: 344.84, top: 0, position: 'absolute', borderRadius: 5}} src="https://via.placeholder.com/328x184" />
        <img style={{width: 328.47, height: 183.80, left: 689.69, top: 0, position: 'absolute', borderRadius: 5}} src="https://via.placeholder.com/328x184" />
        <img style={{width: 328.47, height: 183.80, left: 1034.53, top: 0, position: 'absolute', borderRadius: 5, border: '2px white solid'}} src="https://via.placeholder.com/328x184" />
        <div style={{width: 58.23, height: 35.49, padding: 10, left: 254.77, top: 135.57, position: 'absolute', background: '#0375C8', borderRadius: 5, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div style={{color: 'white', fontSize: 16, fontFamily: 'Roboto', fontWeight: '700', textTransform: 'capitalize', wordWrap: 'break-word'}}>Invest</div>
        </div>
        <div style={{width: 58.23, height: 35.49, padding: 10, left: 599.61, top: 135.57, position: 'absolute', background: '#1D55A8', borderRadius: 5, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div style={{color: 'white', fontSize: 16, fontFamily: 'Roboto', fontWeight: '700', textTransform: 'capitalize', wordWrap: 'break-word'}}>Invest</div>
        </div>
        <div style={{width: 58.23, height: 35.49, padding: 10, left: 944.46, top: 135.57, position: 'absolute', background: '#1D55A8', borderRadius: 5, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div style={{color: 'white', fontSize: 16, fontFamily: 'Roboto', fontWeight: '700', textTransform: 'capitalize', wordWrap: 'break-word'}}>Invest</div>
        </div>
        <div style={{width: 58.23, height: 35.49, padding: 10, left: 1289.30, top: 135.57, position: 'absolute', background: '#1D55A8', borderRadius: 5, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div style={{color: 'white', fontSize: 16, fontFamily: 'Roboto', fontWeight: '700', textTransform: 'capitalize', wordWrap: 'break-word'}}>Invest</div>
        </div>
    </div>
    <div style={{left: 110, top: 586, position: 'absolute', color: '#A5A5A5', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', textTransform: 'capitalize', wordWrap: 'break-word'}}>Oldest</div>
    <div style={{width: 1363, height: 183.80, left: 38, top: 630, position: 'absolute'}}>
        <img style={{width: 328.47, height: 183.80, left: 0, top: 0, position: 'absolute', borderRadius: 5}} src="https://via.placeholder.com/328x184" />
        <img style={{width: 328.47, height: 183.80, left: 344.84, top: 0, position: 'absolute', borderRadius: 5}} src="https://via.placeholder.com/328x184" />
        <img style={{width: 328.47, height: 183.80, left: 689.69, top: 0, position: 'absolute', borderRadius: 5}} src="https://via.placeholder.com/328x184" />
        <img style={{width: 328.47, height: 183.80, left: 1034.53, top: 0, position: 'absolute', borderRadius: 5}} src="https://via.placeholder.com/328x184" />
        <div style={{width: 58.23, height: 35.49, padding: 10, left: 254.77, top: 135.57, position: 'absolute', background: '#1D55A8', borderRadius: 5, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div style={{color: 'white', fontSize: 16, fontFamily: 'Roboto', fontWeight: '700', textTransform: 'capitalize', wordWrap: 'break-word'}}>Invest</div>
        </div>
        <div style={{width: 58.23, height: 35.49, padding: 10, left: 599.61, top: 135.57, position: 'absolute', background: '#1D55A8', borderRadius: 5, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div style={{color: 'white', fontSize: 16, fontFamily: 'Roboto', fontWeight: '700', textTransform: 'capitalize', wordWrap: 'break-word'}}>Invest</div>
        </div>
        <div style={{width: 58.23, height: 35.49, padding: 10, left: 944.46, top: 135.57, position: 'absolute', background: '#1D55A8', borderRadius: 5, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div style={{color: 'white', fontSize: 16, fontFamily: 'Roboto', fontWeight: '700', textTransform: 'capitalize', wordWrap: 'break-word'}}>Invest</div>
        </div>
        <div style={{width: 58.23, height: 35.49, padding: 10, left: 1289.30, top: 135.57, position: 'absolute', background: '#1D55A8', borderRadius: 5, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div style={{color: 'white', fontSize: 16, fontFamily: 'Roboto', fontWeight: '700', textTransform: 'capitalize', wordWrap: 'break-word'}}>Invest</div>
        </div>
    </div>
    <div style={{width: 123, height: 0, left: 38, top: 612, position: 'absolute', border: '2px #616161 solid'}}></div>
    <div style={{width: 45, height: 5, left: 45, top: 608, position: 'absolute', background: '#A5A5A5'}} />
    <div style={{left: 45, top: 586, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Roboto', fontWeight: '700', textTransform: 'capitalize', wordWrap: 'break-word'}}>Latest</div>
    
    <div style={{width: 392, left: 524, top: 213, position: 'absolute', color: '#1E1E1E', fontSize: 24, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Invest in the movies you want to see!</div>
    <div style={{left: 546, top: 155, position: 'absolute', color: '#1E1E1E', fontSize: 45, fontFamily: 'Crimson Text', fontWeight: '700', textTransform: 'uppercase', wordWrap: 'break-word'}}>Company name</div>
    <div style={{width: 53, height: 53, left: 38, top: 26, position: 'absolute', background: '#D9D9D9', borderRadius: 9999}} />
</main>

    </>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}

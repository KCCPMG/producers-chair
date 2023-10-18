import { signIn, signOut, useSession } from "next-auth/react";
// import { api } from "~/utils/api";



const UserIcon = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="inline my-auto nav-icon">
      <img 
        className="rounded-full w-12 h-12 inline" 
        src={sessionData?.user?.image || "https://via.placeholder.com/48x48"}
      />
      <span 
        className="text-white text-xl font-normal mx-4 my-auto"
        // onClick={sessionData ? () => void null : () => void signIn}
      >
        {sessionData?.user?.name || "Sign In"}
      </span>
    </div>
  )
}


function AuthShowcase() {
  const { data: sessionData } = useSession();

  // const { data: secretMessage } = api.example.getSecretMessage.useQuery(
  //   undefined, // no input
  //   { enabled: sessionData?.user !== undefined }
  // );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {/* {secretMessage && <span> - {secretMessage}</span>} */}
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

export default UserIcon;
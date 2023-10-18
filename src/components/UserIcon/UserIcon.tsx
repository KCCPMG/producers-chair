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
      <button 
        className="text-white text-xl font-normal mx-4 my-auto"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign Out" : "Sign In" }
      </button>
    </div>
  )
}

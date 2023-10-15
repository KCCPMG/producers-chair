import { signIn, signOut, useSession } from "next-auth/react";


const UserIcon = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="inline my-auto nav-icon">
      <img 
        className="rounded-full w-12 h-12 inline" 
        src={sessionData?.user?.image || "https://via.placeholder.com/48x48"}/>
      <span className="text-white text-xl font-normal mx-4 my-auto">
        {sessionData?.user?.name || "Sign In"}
      </span>
    </div>
  )
}

export default UserIcon;
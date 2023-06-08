import Image from "next/image";
import { signIn } from "next-auth/react";

import socialinkLogo from './socialink-high-resolution-logo-color-on-transparent-background.png';

function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-4">
        <Image
          src={socialinkLogo}
          height={400}
          width={400}
          objectFit="contain"
        />
      </div>
      <h1
        onClick={signIn}
        className="p-5 bg-blue-800 rounded-full text-white text-center cursor-pointer"
      >
        Login with SociaLink
      </h1>
    </div>
  );
}

export default Login;


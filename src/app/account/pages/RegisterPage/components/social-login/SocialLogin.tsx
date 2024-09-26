import apple from "assets/images/logo-register/logo-apple.svg";
import LoginByFacebook from "./LoginByFacebook";

import { trans } from "@mongez/localization";
import { GoogleOAuthProvider } from "@react-oauth/google";
import LoginByGoogle from "./LoginByGoogle";

export default function SocialLogin() {
  return (
    <div className="hidden lg:block col-span-2 mt-28	ms-5 p-12 w-fit	h-fit rounded-2xl	border border-solid border-[#ececec]">
      <LoginByFacebook />
      <GoogleOAuthProvider clientId="880055477948-6v14252666s19teh9fmmkk3paq2g24jn.apps.googleusercontent.com">
        <LoginByGoogle />
      </GoogleOAuthProvider>
      <div className="social bg-[#000000] text-white">
        <img src={apple} alt="notFound" className="me-4" />
        <h2>{trans("apple")}</h2>
      </div>
    </div>
  );
}
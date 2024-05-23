import ForgotPassword from "@/pages/auth/ForgotPassword"
import Login from "@/pages/auth/Login"
import ResetPassword from "@/pages/auth/ResetPassword"
import Signup from "@/pages/auth/Signup"
import SignupVerification from "@/pages/auth/SignupVerification"
import PhoneDesign from "../assets/auth-image.svg"
import GetStarted from "@/pages/auth/GetStarted"
import { Page } from "./constants"

const AuthPages = {
  [Page.GetStarted]: <GetStarted />,
  [Page.Signup]: <Signup />,
  [Page.SignupVerification]: <SignupVerification />,
  [Page.Login]: <Login />,
  [Page.ForgotPassword]: <ForgotPassword />,
  [Page.ResetPassword]: <ResetPassword />,
}

//  TODO: perfect this layout to match the design, if you have any question, ask me:sofiyullah
const AuthLayout = ({ page }) => {
  return (
    <div className='w-full h-screen bg-foreground lg:bg-var-authBackground bg-no-repeat flex items-center overflow-hidden'>
      <div className='flex-[100%] lg:flex-[50%] w-full h-full text-white p-8 overflow-y-auto'>{AuthPages[page]}</div>
      <div className='hidden lg:flex flex-[50%] p-8 w-full h-full'>
        <div className='w-full h-full shadown-md'>
          <img src={PhoneDesign} alt='' className='w-full h-full object-contain' />
        </div>
      </div>
    </div>
  )
}

export default AuthLayout

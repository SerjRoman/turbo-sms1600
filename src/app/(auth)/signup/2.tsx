
import { SignUpForm } from "../../../modules/auth/ui/signup-form";
import { PersonalInfoForm } from "../../../modules/auth/ui/signup-form/steps/personalInfo";

export default function SignUpStep1() {
  return <SignUpForm
    Step={PersonalInfoForm}
    isLastStep={true}
    stepNum={2}
    isFirstStep={false}
  />
}

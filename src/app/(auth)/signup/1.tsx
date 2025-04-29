import { SignUpForm } from "../../../modules/auth/ui/signup-form";
import { BaseInfoForm } from "../../../modules/auth/ui/signup-form/steps/baseInfo";

export default function SignUpStep1() {
  return <SignUpForm
    Step={BaseInfoForm}
    isLastStep={false}
    stepNum={1}
    isFirstStep={true}
  />
}

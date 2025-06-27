import { getCurrentUser } from "@/actions/onboarding"
import { redirect } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

export const metadata = {
  title: "Onboarding - MediMeet",
  description: "Complete your profile to get started with MediMeet",
};

const OnboardingLayout = async ({ children }: Props) => {
  const user = await getCurrentUser()

  if (user) {
    if (user.role === "PATIENT") {
      redirect("/doctors");
    } else if (user.role === "DOCTOR") {
      if (user.verificationStatus === "VERIFIED") {
        redirect("/doctor");
      } else {
        redirect("/doctor/verification");
      }
    } else if (user.role === "ADMIN") {
      redirect("/admin");
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-title">
            Welcome to MediMeet
          </h1>
          <p className="text-muted-foreground text-lg">
            Tell us how you want to use the platform
          </p>
        </div>

        {children}
      </div>
    </div>
  )
}

export default OnboardingLayout;
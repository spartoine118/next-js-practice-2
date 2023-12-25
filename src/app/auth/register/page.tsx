import RegisterForm from "@/components/auth/RegisterForm";

export default async function Page() {
  return (
    <div className="flex flex-col items-center">
      Register Page
      <RegisterForm />
    </div>
  );
}

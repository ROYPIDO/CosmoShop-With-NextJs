import LoginForm from '@/components/login-form';
import PageHeader from '@/components/page-header';

export const metadata = {
  title: "Login",
};

const Page = () => {
  return (
    <>
      <PageHeader title="Sign In" subtitle="Welcome back. Enter your credentials to continue." />
      <div className="container-narrow py-4">
        <LoginForm />
      </div>
    </>
  );
};

export default Page;
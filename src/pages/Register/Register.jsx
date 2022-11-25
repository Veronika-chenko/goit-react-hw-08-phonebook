import { Helmet } from 'react-helmet'; //not install
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </>
  );
}

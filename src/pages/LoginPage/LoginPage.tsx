import FormBox from "../../components/Form/FormBox/FormBox";
import FormLogin from "../../components/Form/FormLogin/FormLogin";
import "./LoginPage.css";

const LoginPage = () => {

  return (
    <FormBox parentClass="login-form">
      <FormLogin/>
    </FormBox>
  );
};

export default LoginPage;

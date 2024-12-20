import React from "react";
import useSignIn from "../../hooks/useSignIn";
import { AuthForm, Popup } from "../../components/";

const SignIn: React.FC = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    error,
    signIn,
    showPopUp,
    handleClosePopUp,
  } = useSignIn();

  return (
    <div>
      <AuthForm
        title="Entrar"
        submitText="Enviar"
        linkTo="/signUp"
        linkText="Ainda não tem uma conta? Cadastre-se"
        onSubmit={signIn}
        error={error ? `${error}` : null}
        loading={loading}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />

      {showPopUp && (
        <Popup
          isOpen={showPopUp}
          onClose={handleClosePopUp}
          title="Login bem-sucedido!"
          message="Você será redirecionado para a página inicial em breve..."
          autoCloseDuration={5000}
        />
      )}
    </div>
  );
};

export default SignIn;
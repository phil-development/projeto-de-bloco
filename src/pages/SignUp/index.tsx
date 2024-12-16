import React from "react";
import useSignUp from "../../hooks/useSignUp";
import { AuthForm, Popup } from "../../components/";

const SignUp: React.FC = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    error,
    signUp,
    showPopUp,
    handleClosePopUp,
  } = useSignUp();

  return (
    <div>
      <AuthForm
        title="Cadastrar" 
        submitText="Enviar" 
        linkTo="/signIn"
        linkText="Já possui uma conta? Entrar" 
        onSubmit={signUp}
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
          title="Cadastro realizado com sucesso!" 
          message="Verifique sua caixa de entrada e confirme seu email para ativar sua conta." 
          autoCloseDuration={5000} 
        />
      )}
    </div>
  );
};

export default SignUp;
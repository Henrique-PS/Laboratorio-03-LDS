import { useState } from "react";
import { login } from "../services/endpoints";
import { useNavigate } from "react-router-dom";
import { useSuccess } from "../hooks/useSuccess";
import { useWarning } from "../hooks/useWarning";
import { Button, Input, Text, VStack } from "@chakra-ui/react";
import { handleChange } from "../utils/changeObjectState";

const Login = () => {
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });

  const { Success } = useSuccess();
  const { Warning } = useWarning();
  const navigate = useNavigate();

  const handleLogin = async (loginParams) => {
    try {
      await login(loginParams);

      Success("Login realizado com sucesso!");
      navigate('/HomeAluno')
    } catch (e) {
      Warning({ message: "Erro ao realizar login!"});
    }
  };

  return (
    <VStack
      justifyContent="center"
      alignItems="center"
      w="100%"
      h="100dvh"
      bg="lightblue"
    >
      <VStack
        boxShadow="3px 3px 3px gray"
        p="6"
        rounded="2xl"
        outline="1px solid gray"
        bg="white"
        gap="1rem"
      >
        <Text fontSize="16pt"> Login </Text>
        <Input
          placeholder="Email"
          onChange={(e) => handleChange(e, payload, setPayload)}
          name="email"
        />
        <Input
          placeholder="Senha"
          onChange={(e) => handleChange(e, payload, setPayload)}
          name="password"
          type="password"
        />

        <VStack w="100%" gap="0.5rem">
          <Button w="100%" onClick={() => handleLogin(payload)} colorScheme="blue">
            Entrar
          </Button>
          <Button w="100%" onClick={() => navigate("/Cadastro")} colorScheme="green">
            Cadastrar
          </Button>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Login;

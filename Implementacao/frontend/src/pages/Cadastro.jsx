import { Input, HStack, VStack, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import { register } from "../services/endpoints";
import { useWarning } from "../hooks/useWarning";
import { useSuccess } from "../hooks/useSuccess";
import { useNavigate } from "react-router-dom";
import { handleChange } from "../utils/changeObjectState";
export function Cadastro() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    cpf: "",
    rg: "",
    address: "",
    password: "",
    passwordConfirmation: "",
    role: "student",
  });

  const { Warning } = useWarning();
  const { Success } = useSuccess();
  const navigate = useNavigate();

  const handleSubmit = async (form) => {
    try {
      if (form.password !== form.passwordConfirmation)
        throw new Error("As senhas não coincidem");
      form.cpf = form.cpf.replace(/[^0-9]/g, "");
      form.rg = form.rg.replace(/[^0-9]/g, "");
      delete form.passwordConfirmation;

      await register(form);

      Success("Cadastro realizado com sucesso, agora você pode fazer login");

      navigate("/Login");
    } catch (e) {
      Warning({
        title: "Erro ao cadastrar",
        message: e.message || "Verifique os dados e tente novamente",
      });
    }
  };

  return (
    <VStack
      bg="lightblue"
      w="100%"
      h="100dvh"
      alignItems="center"
      justifyContent="center"
    >
      <HStack bg="white" p="10" rounded="2xl" boxShadow="3px 3px 3px gray">
        <VStack gap="1rem">
          <Text fontSize="16pt">Cadastro</Text>
          <Input
            onChange={(e) => handleChange(e, form, setForm)}
            name="name"
            placeholder="Nome"
          />
          <Input
            onChange={(e) => handleChange(e, form, setForm)}
            name="email"
            placeholder="Email"
          />
          <Input
            onChange={(e) => handleChange(e, form, setForm)}
            name="cpf"
            placeholder="CPF"
          />
          <Input
            onChange={(e) => handleChange(e, form, setForm)}
            name="rg"
            placeholder="RG"
          />
          <Input
            onChange={(e) => handleChange(e, form, setForm)}
            name="address"
            placeholder="Endereço"
          />
          <Input
            onChange={(e) => handleChange(e, form, setForm)}
            type="password"
            name="password"
            placeholder="Senha"
          />
          <Input
            onChange={(e) => handleChange(e, form, setForm)}
            type="password"
            name="passwordConfirmation"
            placeholder="Confirmação de Senha"
          />

          <HStack flexWrap="wrap">
            <Button onClick={() => navigate("/Login")} colorScheme="green">
              Já tem uma conta ?
            </Button>
            <Button onClick={() => handleSubmit(form)} colorScheme="blue">
              Cadastrar
            </Button>
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  );
}

export default Cadastro;

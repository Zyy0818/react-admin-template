import { TextInput, PasswordInput, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { User, Lock } from "tabler-icons-react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";

function Login() {
  let navigate = useNavigate();
  const matches550 = useMediaQuery("(min-width: 550px)");
  const form = useForm({
    initialValues: {
      name: "",
      password: "",
    },

    validate: (values) => ({
      name: values.name.length < 2 ? "Too short name" : null,
      password: values.password.length < 6 ? "At least six letters" : null,
    }),
  });

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background:
          "linear-gradient(to right top,rgba(255,238,238,1),rgba(221,239,187,0.5))",
      }}
    >
      <Box sx={{ maxWidth: matches550 ? 400 : 300 }} mx="auto" pt={150}>
        <h1 style={{ textAlign: "center" }}>Login Form</h1>
        <form
          onSubmit={form.onSubmit((values) => {
            console.log(values);
            navigate("/dashboard");
          })}
        >
          <TextInput
            required
            label="Name"
            placeholder="Name"
            {...form.getInputProps("name")}
            icon={<User size={20} strokeWidth={2} color={"#e6b3b3"} />}
          />
          <PasswordInput
            mt="md"
            required
            label="Password"
            placeholder="Password"
            {...form.getInputProps("password")}
            icon={<Lock size={20} strokeWidth={2} color={"#e6b3b3"} />}
          />

          <Group position="center" mt={30}>
            <Button
              type="submit"
              variant="gradient"
              sx={{ width: 400 }}
              gradient={{ from: "#ee9ca7", to: "#ffdde1", deg: 35 }}
            >
              Login
            </Button>
          </Group>
          <p style={{ color: "grey" }}>
            username: {form.values.name} ; password: ******
          </p>
        </form>
      </Box>
    </div>
  );
}

export default Login;

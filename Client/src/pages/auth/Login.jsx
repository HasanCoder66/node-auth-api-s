import { useState } from "react";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import AuthLayout from "../../components/layout/AuthLayout";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <AuthLayout>
      <h2 className="text-xl font-bold mb-4">Login</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <Input name="email" label="Email" value={form.email} onChange={handleChange}/>
        <Input name="password" type="password" label="Password" value={form.password} onChange={handleChange}/>

        <Button text="Login"/>
      </form>
    </AuthLayout>
  );
};

export default Login
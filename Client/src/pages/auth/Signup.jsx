import { useState } from "react";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import AuthLayout from "../../components/layout/AuthLayout";

const Signup = () => {
  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
    age: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // yahan thunk call hogi later
  };

  return (
    <AuthLayout>
      <h2 className="text-xl font-bold mb-4">Signup</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <Input name="userName" label="Username" value={form.userName} onChange={handleChange} />
        <Input name="email" label="Email" value={form.email} onChange={handleChange} />
        <Input name="password" type="password" label="Password" value={form.password} onChange={handleChange} />
        <Input name="age" label="Age" value={form.age} onChange={handleChange} />

        <Button text="Signup" />
      </form>
    </AuthLayout>
  );
};

export default Signup;
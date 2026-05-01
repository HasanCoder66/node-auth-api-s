import { useState } from "react";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import AuthLayout from "../../components/layout/AuthLayout";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email });
  };

  return (
    <AuthLayout>
      <h2 className="text-xl font-bold mb-4">Forgot Password</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="email"
          label="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button text="Send OTP" />
      </form>

      <p className="text-sm mt-4 text-center">
        Back to{" "}
        <Link to="/" className="text-blue-600">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};

export default ForgetPassword;
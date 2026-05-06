import { useState } from "react";
import { useDispatch } from 'react-redux';
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import AuthLayout from "../../components/layout/AuthLayout";
import { verifyOtp } from "../../features/auth/authThunk";

const VerifyOtp = () => {
  const [form, setForm] = useState({
    email: "",
    otp: "",
  });

  const dispatch = useDispatch()


    const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(verifyOtp(form))
  }

  return (
    <AuthLayout>
      <h2 className="text-xl font-bold mb-4">Verify OTP</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <Input name="email" label="Email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})}/>
        <Input name="otp" label="OTP" value={form.otp} onChange={(e)=>setForm({...form, otp:e.target.value})}/>

        <Button text="Verify"/>
      </form>
    </AuthLayout>
  );
};

export default VerifyOtp
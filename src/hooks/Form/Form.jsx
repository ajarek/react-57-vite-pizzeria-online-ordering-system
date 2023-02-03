import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import './Form.css'

export const Form = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Your Full Name is Required!"),
    email: yup.string().email().required(),
    phone: yup.number().positive().integer().min(18).required(),
    text: yup.string().min(4).max(200).required(),
    
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name..." {...register("name")} />
      <p>{errors.name?.message}</p>
      <input type="text" placeholder="E-mail..." {...register("email")} />
      <p>{errors.email?.message}</p>
      <input type="number" placeholder="Phone Number..." {...register("phone")} />
      <p>{errors.phone?.message}</p>
      <textarea     
        placeholder="Enter your message..."
        {...register("text")}
      />
      <p>{errors.text?.message}</p>
     
      <input type="submit" value={'Send Message'} />
    </form>
  );
};

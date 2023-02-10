import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import './FormPayments.css'

export const FormPayments = ({onSubmit}) => {
  const schema = yup.object().shape({
    name: yup.string().required("Your Name is Required!"),
    address: yup.string().required(),
    phone: yup.string().min(9).required(),
    radio: yup.string().required()
    
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  

  return (
    <form className="form-payments" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name..." {...register("name")} />
      <p>{errors.name?.message}</p>
      <input type="text" placeholder="Delivery Address..." {...register("address")} />
      <p>{errors.address?.message}</p>
      <input type="number" placeholder="Phone Number..." {...register("phone")} />
      <p>{errors.phone?.message}</p>
      <h3>Payment Method</h3>
      <div className="radio">
        <label htmlFor='cash'>Cash</label>
        <input type="radio" {...register('radio')} value="Cash" id="cash"  />
      </div>
      <div className="radio">
        <label htmlFor='card'>Credit Card</label>
        <input type="radio" {...register('radio')} value="Card"  id="card"/>
      </div>
      <div className="radio">
        <label htmlFor='blik'>Blik</label>
        <input type="radio" {...register('radio')} value="Blik" id="blik"/>
      </div>
      <p>{errors.radio && 'Radio is required'}</p>
      <input type="submit" value={'Proceed To Checkout'} />
    </form>
  );
};

import { SubmitHandler, useForm } from "react-hook-form";
import './styles.css'

type FormInput = {
  name: string
  age: number
}

function App() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInput>(
    { defaultValues: { name: '山田太郎', age: 25 } }
  )

  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        名前
        <input {...register('name', { required: true })} />
      </label>
      {errors.name && <p className='error'>名前欄の入力は必須です</p>}
      <label>
        年齢
        <input type="number"
          {...register('age', {
            required: { value: true, message: '年齢欄の入力は必須です' },
            min: { value: 0, message: '入力できる最小値は0です' },
            max: { value: 150, message: '入力できる最大値は150です' }
          })} />歳
      </label>
      {errors.age && <p className='error'>{errors.age.message}</p>}
      <button>送信する</button>
    </form>
  );
}

export default App;

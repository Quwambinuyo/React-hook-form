import { useForm, type SubmitHandler } from "react-hook-form";

type Inputs = {
  exampleName: string;
  exampleAge: number;
};

const Example3 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div>
      <form
        className="flex flex-col gap-3 w-full max-w-sm p-6 rounded-lg bg-white shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="w-full p-2 border border-gray-300 rounded"
          {...register("exampleName", {
            required: "Name is required",
            minLength: {
              value: 4,
              message: "Minimum of 4 characters",
            },
          })}
        />
        {errors.exampleName && (
          <p className="text-red-500">{errors.exampleName?.message}</p>
        )}
        <input
          type="number"
          {...register("exampleAge", {
            required: "Age is required",
            min: {
              value: 4,
              message: "Minimum age is 4",
            },
          })}
          className="w-full p-2 border border-gray-300 rounded"
          name="exampleAge"
        />
        {errors.exampleAge && (
          <p className="text-red-500">{errors.exampleAge?.message}</p>
        )}
        <input
          className="w-full bg-blue-600 text-white p-2 rounded"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Example3;

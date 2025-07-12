import { useForm, type SubmitHandler } from "react-hook-form";

type FormFields = {
  email: string;
  password: string;
};

const Example1 = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      email: "john@doe.com",
      password: "123456789",
    },
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw new Error();
    } catch (error) {
      setError("root", {
        message: "This email is already taken!",
      });
    }

    console.log(data);
  };

  return (
    <form
      className="flex flex-col gap-3  max-w-sm h-full w-full  p-6 rounded-lg bg-white shadow-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        {...register("email", {
          required: "Email is required",
          pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          validate: (value) => {
            if (!value.includes("@")) {
              return "Email cannot be from example.com domain";
            }
            return true;
          },
        })}
        type="text"
        placeholder="Email"
        className="w-full p-2 border border-gray-300 rounded"
      />
      {errors.email && (
        <div className="text-red-500 text-sm">{errors.email.message}</div>
      )}

      <input
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters long",
          },
          maxLength: 20,
        })}
        type="password"
        placeholder="Password"
        className="w-full p-2 border border-gray-300 rounded"
      />
      {errors.password && (
        <div className="text-red-500 text-sm">{errors.password.message}</div>
      )}

      <button
        disabled={isSubmitting}
        type="submit"
        className="w-full bg-yellow-500 text-white p-2 rounded"
      >
        {isSubmitting ? "please wait..." : "Submit"}
      </button>

      {errors.root && (
        <div className="text-red-500 text-sm">{errors.root.message}</div>
      )}
    </form>
  );
};

export default Example1;

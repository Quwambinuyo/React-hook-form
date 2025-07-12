import { useForm } from "react-hook-form";

const Example2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
      className="flex flex-col gap-3 w-full max-w-sm p-6 rounded-lg bg-white shadow-md"
    >
      <input
        {...register("firstName", { required: "This is required" })}
        placeholder="First Name"
        className="w-full p-2 border border-gray-300 rounded"
      />
      {errors.firstName && (
        <p className="text-red-500 text-sm">{errors.firstName.message}</p>
      )}

      <input
        {...register("lastName", {
          required: "This is required",
          minLength: {
            value: 4,
            message: "Minimum length is 4",
          },
          maxLength: {
            value: 15,
            message: "Maximum of 15 characters",
          },
        })}
        placeholder="Last Name"
        className="w-full p-2 border border-gray-300 rounded"
      />
      {errors.lastName && (
        <p className="text-red-500 text-sm">{errors.lastName.message}</p>
      )}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default Example2;

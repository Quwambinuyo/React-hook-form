import { useForm, type SubmitHandler } from "react-hook-form";

interface FormInputs {
  firstName: string;
  gender: "female" | "male" | "other";
}
const Example4 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>();
  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      console.log(error);
    }

    console.log(data);
  };

  return (
    <form
      className="flex flex-col gap-3  max-w-sm h-full w-full  p-6 rounded-lg bg-white shadow-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label>First Name</label>
      <input
        {...register("firstName", { required: "This field is required" })}
        className="w-full p-2 border border-gray-300 rounded"
      />
      {errors.firstName && (
        <p className="text-red-500">{errors.firstName.message}</p>
      )}
      <label>Gender Selection</label>
      <select {...register("gender", { required: "This field is required" })}>
        <option className="text-black" value="female">
          Female
        </option>
        <option value="male">Male</option>
        <option value="other">Other</option>
      </select>
      {/* {errors.gender && (
          <p className="text-red-500">{errors.gender.message}</p>
        )} */}
      <input
        disabled={isSubmitting}
        type="submit"
        value={`${isSubmitting ? "please wait..." : "Submit"}`}
        className="w-full bg-yellow-500 text-white p-2 rounded"
      />
    </form>
  );
};

export default Example4;

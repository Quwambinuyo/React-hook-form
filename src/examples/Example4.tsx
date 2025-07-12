import { useForm, type SubmitHandler } from "react-hook-form";

interface FormInputs {
  firstName: string;
  gender: "female" | "male" | "other";
}
const Example4 = () => {
  const { register, handleSubmit } = useForm<FormInputs>();
  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

  return (
    <div>
      <form
        className="flex flex-col gap-3 w-full max-w-sm p-6 rounded-lg bg-white shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label>First Name</label>
        <input
          {...register("firstName")}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <label>Gender Selection</label>
        <select {...register("gender")}>
          <option className="text-black" value="female">
            Female
          </option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select>
        <input
          type="submit"
          value="Submit"
          className="w-full bg-yellow-500 text-white p-2 rounded"
        />
      </form>
    </div>
  );
};

export default Example4;

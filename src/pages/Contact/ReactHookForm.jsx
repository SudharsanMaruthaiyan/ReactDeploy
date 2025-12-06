import React from "react";
import { useForm } from "react-hook-form";

// validation
import { zodResolver } from "@hookform/resolvers/zod";
import { email, z } from "zod"; // or 'zod/v4'

const schema = z.object({
  name: z.string().min(1),
  email: z.email(),
});

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" broder p-5 flex flex-col gap-2"
    >
      <div className=" flex flex-col gap-1 ">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          className=" py-2 border rounded-lg outline-none pl-2"
          {...register("name")} // name: "asudfsdhfk"
        />
        {errors.name?.message && <p>{errors.name & "enter you name"}</p>}
      </div>

      <div className=" flex flex-col gap-1 ">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          id="email"
          className=" py-2 border rounded-lg outline-none pl-2"
          {...register("email")} // email: "asdfaskdfjaksf"
        />
        {errors.email?.message && (
          <p>{errors.email && "Enter the valid maessage"}</p>
        )}
      </div>

      <button
        type="submit"
        className=" py-3 px-3 rounded-lg bg-green-600 text-white"
      >
        Submit
      </button>
    </form>
  );
};

export default ReactHookForm;

import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [name, setName] = useState("");

  // const handleNavigate = () => navigate("/main");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setSearchParams({ name: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate(`/main?${searchParams}`);
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-[800px] flex-col items-center justify-center bg-[url('https://optim.tildacdn.com/tild3836-6365-4437-a266-633363616531/-/resize/565x/-/format/webp/de1e4fde-6f71-48e4-8.jpg')] bg-cover bg-center">
      <form
        className="mx-4 max-w-lg rounded-lg bg-white bg-opacity-70 p-8 text-center shadow-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="mb-4 text-4xl font-semibold text-gray-800">
          Чтобы открыть приглашение, напишите имя и нажмите на кнопку
        </h1>

        <input
          type="text"
          id="fullName"
          placeholder="Ваши ФИО"
          required
          className="mb-10 w-full rounded-xl border border-[#bfd5ec] p-3 font-sans text-2xl font-semibold outline-[#bfd5ec]"
          onChange={handleChange}
          value={name}
        />

        <button
          className="rounded-3xl border bg-[#bfd5ec] px-10 py-4 text-3xl font-semibold"
          type="submit"
        >
          Открыть
        </button>
      </form>
    </div>
  );
};

export default Login;

import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleNavigate = () => navigate("/main");

  return (
    <div className="mx-auto flex min-h-screen max-w-[800px] flex-col items-center justify-center bg-[url('https://optim.tildacdn.com/tild3836-6365-4437-a266-633363616531/-/resize/565x/-/format/webp/de1e4fde-6f71-48e4-8.jpg')] bg-cover bg-center">
      <div className="mx-4 max-w-lg rounded-lg bg-white bg-opacity-70 p-8 text-center shadow-lg">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">
          Чтобы открыть приглашение,
        </h1>

        <p className="font-body mb-10 text-2xl font-semibold text-gray-800">
          нажмите ниже
        </p>

        <button
          className="border border-black bg-inherit px-6 py-2 font-bold text-black transition duration-300"
          onClick={handleNavigate}
        >
          Открыть
        </button>
      </div>
    </div>
  );
};

export default Login;

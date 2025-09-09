import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import AnimatedText from "./UI/AnimatedText";
import Spinner from "./UI/Spinner";

const Anketa = () => {
  const [searchParams] = useSearchParams();

  const [fullName, setFullName] = useState(searchParams.get("name"));
  const [yesNo, setYesNo] = useState("");
  const [status, setStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("status");
    if (data) {
      const parsedData = JSON.parse(data);
      setStatus(parsedData);
    }
  }, []);

  // const changeName = (e: ChangeEvent<HTMLInputElement>) => {
  //   setFullName(e.target.value);
  // };

  const changeYesNo = (e: ChangeEvent<HTMLInputElement>) => {
    setYesNo(e.target.value);
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await fetch(
        "https://api.sheetbest.com/sheets/9b3ba5f5-acb7-4f12-b60d-e4b02f4b4481",
        {
          method: "POST",
          body: JSON.stringify({
            fullName,
            willAttend: yesNo,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      localStorage.setItem("status", JSON.stringify(true));

      if (response.ok) {
        alert("Данные успешно отправлены!");
        setFullName("");
        setYesNo("");
        setStatus(true);
        setIsLoading(false);
      } else {
        alert("Произошла ошибка при отправке данных.");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Произошла ошибка при отправке данных.");
      setIsLoading(false);
    }
  };

  return (
    <form className="mx-auto w-full" onSubmit={submitHandler}>
      <div className="mb-10 flex flex-col gap-2">
        <AnimatedText
          delay={0.2}
          className="mb-5 text-center text-5xl font-semibold"
        >
          Урматтуу
        </AnimatedText>
        {/* <input
          type="text"
          id="fullName"
          placeholder="Ваши ФИО"
          required
          className="w-full rounded-xl border border-[#bfd5ec] p-3 text-3xl outline-[#bfd5ec]"
          value={fullName}
          onChange={changeName}
          disabled={status}
        /> */}

        <AnimatedText delay={0.2} className="mx-auto mt-3 font-sans text-4xl">
          {fullName}
        </AnimatedText>
      </div>

      <div>
        <p className="mb-6 text-center text-3xl font-semibold">
          Биздин майрамга катыша аласызбы?
        </p>
        <div className="mb-4 text-center">
          <input
            type="radio"
            id="yes"
            name="yesOrNo"
            value="yes"
            checked={yesNo === "yes"}
            onChange={changeYesNo}
            required
            disabled={status}
            className="h-5 w-5"
          />
          <label htmlFor="yes" className="ml-3 text-3xl">
            Мен кубаныч менен келем
          </label>
        </div>

        <div className="mb-10 text-center">
          <input
            type="radio"
            id="no"
            name="yesOrNo"
            value="no"
            checked={yesNo === "no"}
            onChange={changeYesNo}
            required
            disabled={status}
            className="h-5 w-5"
          />
          <label htmlFor="no" className="ml-3 text-3xl">
            Тилекке каршы, мен катыша албайм
          </label>
        </div>
      </div>

      <div className="mx-auto w-fit">
        {status ? (
          <button
            className="rounded-3xl border bg-[#bfefd4] px-10 py-4 text-3xl font-bold"
            disabled
          >
            Отправлено
          </button>
        ) : (
          <button
            type="submit"
            className="rounded-3xl border bg-[#bfd5ec] px-10 py-4 text-3xl font-bold"
            disabled={isLoading}
          >
            {isLoading ? <Spinner /> : "Отправить"}
          </button>
        )}
      </div>
    </form>
  );
};

export default Anketa;

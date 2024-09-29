import { ChangeEvent, FormEvent, useState } from "react";

const Anketa = () => {
  const [fullName, setFullName] = useState("");
  const [yesNo, setYesNo] = useState("");

  const changeName = (e: ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };

  const changeYesNo = (e: ChangeEvent<HTMLInputElement>) => {
    setYesNo(e.target.value);
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://66dae36d8677054e.mokky.dev/users", {
        method: "POST",
        body: JSON.stringify({
          fullName,
          willAttend: yesNo,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        alert("Данные успешно отправлены!");
      } else {
        alert("Произошла ошибка при отправке данных.");
      }
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Произошла ошибка при отправке данных.");
    }
  };

  return (
    <form className="mx-auto w-full" onSubmit={submitHandler}>
      <div className="mb-10 flex flex-col gap-2">
        <label htmlFor="fullName" className="text-xl">
          Напишите, пожалуйста, Ваши ФИО
        </label>
        <input
          type="text"
          id="fullName"
          placeholder="Ваши ФИО"
          required
          className="w-full rounded-xl border border-[#bfd5ec] p-2 text-xl outline-[#bfd5ec]"
          value={fullName}
          onChange={changeName}
        />
      </div>

      <div>
        <p className="mb-3 text-xl">
          Сможете ли присутствовать на нашем торжестве?
        </p>
        <div className="mb-4">
          <input
            type="radio"
            id="yes"
            name="yesOrNo"
            value="yes"
            checked={yesNo === "yes"}
            onChange={changeYesNo}
            required
          />
          <label htmlFor="yes" className="ml-3">
            Я с удовольствием приду
          </label>
        </div>

        <div className="mb-10">
          <input
            type="radio"
            id="no"
            name="yesOrNo"
            value="no"
            checked={yesNo === "no"}
            onChange={changeYesNo}
            required
          />
          <label htmlFor="no" className="ml-3">
            К сожалению, не смогу присутствовать
          </label>
        </div>
      </div>

      <div className="mx-auto w-fit">
        <button
          type="submit"
          className="rounded-3xl border bg-[#bfd5ec] px-10 py-4 text-xl"
        >
          Отправить
        </button>
      </div>
    </form>
  );
};

export default Anketa;

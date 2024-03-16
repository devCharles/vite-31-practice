import { useState } from "react";
import Card from "./components/Card";
import { features } from "./constants/features";
import clsx from "clsx";

export default function App() {
  function handleCardClick() {
    console.log("hola desde APP");
  }

  const [contador, setContador] = useState(0);
  const [texto, setTexto] = useState("");
  const [estaPrendido, setEstaPrendido] = useState(false);
  const [colores, setColores] = useState(["rojo", "azul"]);
  const [textColor, setTextColor] = useState("");

  return (
    <main className="bg-[rgb(27_27_31)] min-h-screen text-neutral-100 px-10 inter">
      <header className="flex flex-col-reverse lg:grid grid-cols-[60%_40%] max-w-screen-xl mx-auto w-full">
        <div className="pt-10 flex flex-col gap-4">
          <h1 className="text-[32px] lg:text-[52px] leading-10 lg:leading-[60px] font-bold text-center lg:text-left">
            <span className="bg-gradient-to-br from-blue-400 to-purple-600 text-transparent bg-clip-text">
              Vite
            </span>
            <br />
            Next Generation
            <br />
            Frontend Tooling
          </h1>

          <p className="text-2xl text-neutral-50/50">
            Get ready for a development environment that can finally catch up
            with you.
          </p>
          <div>Botones</div>
        </div>

        <div className="flex justify-center items-center bg-gradient-to-t from-purple-600 to-blue-500">
          <img
            src="https://vitejs.dev/logo-with-shadow.png"
            alt="vite logo"
            className="size-40"
          />
        </div>
      </header>

      <section className="grid grid-cols-3 gap-4 max-w-screen-xl mx-auto w-full">
        {/* List rendering */}
        {features.map((feature, index) => {
          return (
            <Card
              key={`feature-${index}`}
              emoji={feature.emoji}
              feature={feature.feature}
              description={feature.description}
              isNew={feature.isNew}
              isHot={feature.isHot}
              onClick={feature.onClick || handleCardClick}
            />
          );
        })}
      </section>

      <section>
        <h2>Estado numerico</h2>
        <p>{contador}</p>
        <button
          onClick={() => {
            setContador(contador + 1);
            console.log(contador);
          }}
        >
          +
        </button>

        <button
          onClick={() => {
            setContador(contador - 1);
          }}
        >
          -
        </button>
      </section>

      <section className="border-t border-white mt-4 pt-4">
        <h2>Estado de texto</h2>
        <p>Busqueda: {texto}</p>

        <p>resultados:</p>

        {[
          "persepolis",
          "arrival",
          "pulp fiction",
          "el señor de los anillos",
          "la princesa y el sapo",
          "saw",
          "interestelar",
        ]
          .filter((item) =>
            item
              .replace(/\W/g, "")
              .toLowerCase()
              .includes(texto.toLowerCase().replace(/\W/g, ""))
          )
          .map((item) => {
            return <p key={item}>{item}</p>;
          })}

        <input
          className="text-black"
          type="text"
          onChange={(event) => {
            setTexto(event.target.value);
          }}
        />
      </section>

      <section className="border-t border-white mt-4 pt-4">
        <h2>Estado booleano</h2>

        <div
          className={clsx("border size-10", { "bg-green-500": estaPrendido })}
        ></div>

        <button
          onClick={() => {
            setEstaPrendido(!estaPrendido);
          }}
        >
          {estaPrendido ? "Apagar" : "Prender"}
        </button>
      </section>

      <section className="border-t border-white mt-4 pt-4">
        <h2>Estado array</h2>

        <input
          className="text-black"
          type="text"
          onChange={(event) => {
            setTextColor(event.target.value);
          }}
        />

        <button
          onClick={() => {
            const nuevosColores = [...colores, textColor];
            setColores(nuevosColores);
          }}
        >
          +
        </button>

        {colores.map((color) => {
          return <p key={`color-${color}`}>{color}</p>;
        })}
      </section>
    </main>
  );
}

import clsx from "clsx";

export default function Card(props) {
  return (
    <article
      onClick={props.onClick}
      className={clsx(
        "bg-[rgb(32_33_39)] p-6 rounded-xl space-y-4",
        props.className,
        {
          "border border-yellow-400": props.isNew,
          "bg-blue-900 border-rose-400": props.isHot,
        }
      )}
    >
      <figure className="bg-neutral-50/5 p-3 size-fit rounded-lg text-lg">
        {props.emoji || "💩"}
      </figure>
      <h2 className="font-semibold">{props.feature || "feature"}</h2>
      <p className="text-neutral-50/50">{props.description || "description"}</p>
      {/* Conditional rendering */}
      {props.isNew && <p>Esto es nuevo</p>}
      {/* {props.isNew !== true && <p>Esto no es nuevo</p>} */}

      {/* {props.isNew === true ? <p>Esto es nuevo</p> : <p>Esto no es nuevo</p>} */}
    </article>
  );
}

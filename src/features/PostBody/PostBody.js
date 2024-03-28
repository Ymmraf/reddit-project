export default function PostBody({ title, body }) {
  return (
    <>
      <h2 className="font-bold mb-4 text-left text-md sm:text-xl md:text-2xl">
        {title}
      </h2>
      <div className="max-h-24 text-ellipsis overflow-hidden">
        <p className="text-justify text-pretty whitespace-pre-line inline-block">
          {body && body}
        </p>
      </div>
    </>
  );
}

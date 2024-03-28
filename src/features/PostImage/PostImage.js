export default function PostImage({ imageUrl }) {
  return (
    <>
      <div className="w-full">
        {imageUrl !== "self" &&
        imageUrl !== "nsfw" &&
        imageUrl !== "default" &&
        !imageUrl.includes("external") ? (
          <img className="w-full" src={imageUrl} />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

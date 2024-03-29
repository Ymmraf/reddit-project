export default function PostImage({ imageUrl }) {
  return (
    <>
      <div className="w-full">
        {imageUrl !== "self" &&
        imageUrl !== "nsfw" &&
        imageUrl !== "default" == false ? (
          <img className="w-full" src={imageUrl} />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
export default function SmallAuthor({ author }) {
  return (
    <>
      <div className="flex mb-4 lg:hidden">
        <div className="w-6 h-6 bg-orange-300 mr-2 rounded-full"></div>
        <p className="text-sm font-bold text-orange-600">{author}</p>
      </div>
    </>
  );
}

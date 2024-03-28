export default function LargeAuthor({author}) {
    return (
      <>
        <div className="hidden lg:flex">
          <div className="w-6 h-6 bg-orange-300 mr-2 rounded-full"></div>
          <p className="font-bold text-orange-600">{author}</p>
        </div>
      </>
    );
  }
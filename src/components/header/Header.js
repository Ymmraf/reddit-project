export default function Header() {
  return (
    <>
      <header>
        <nav className="font-mono py-4 shadow-md fixed top-0 left-0 right-0 z-50 bg-white grid grid-cols-3">
          <div>
            <h1 className="pl-8 text-4xl font-bold text-left underline underline-offset-8">
              <span className="text-orange-500 underline underline-offset-8">
                Reddit
              </span>
              Minimal
            </h1>
          </div>
          <div>
            <input className="pl-6 w-full h-10 bg-gray-200 rounded-3xl" type="text" placeholder="Search"/>
          </div>
          <div></div>
        </nav>
      </header>
    </>
  );
}

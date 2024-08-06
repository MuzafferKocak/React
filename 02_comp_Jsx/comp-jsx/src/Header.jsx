//! Header Component

function Header() {
  //? JS bereich
  const schrift = "Hello FS16";
  return (
    <header>
      {/* //? Kommentar für JSX  */}
      <h1 className="par">{schrift}</h1>
    </header>
  );
}

export default Header;

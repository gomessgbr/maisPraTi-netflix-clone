import logoNetFlix from "/assets/netflix-logo.png";

export function HeaderNetFlix() {
  return (
    <header className="w-full">
      <header className="mx-auto">
        <img src={logoNetFlix} alt=""  className="max-w-xs object-cover" />
      </header>
    </header>
  );
}

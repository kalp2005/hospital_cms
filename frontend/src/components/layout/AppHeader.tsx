export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b px-6">
      <h1 className="text-xl font-semibold">
        Dashboard
      </h1>

      <div className="flex items-center gap-4">
        <span>Admin</span>
      </div>
    </header>
  );
}
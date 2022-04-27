const Layout = ({ children }) => {
  return (
    <>
      <main className="h-screen w-screen bg-zinc-800 text-zinc-50 flex flex-col justify-center items-center">
        {children}
      </main>
    </>
  );
};

export default Layout;

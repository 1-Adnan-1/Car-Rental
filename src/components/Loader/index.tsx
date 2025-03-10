const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="loader text-9xl">
        <li className="dots" id="dot-1"></li>
        <li className="dots" id="dot-2"></li>
        <li className="dots" id="dot-3"></li>
      </div>
    </div>
  );
};

export default Loader;

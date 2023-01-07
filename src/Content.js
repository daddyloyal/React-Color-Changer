const Content = ({ colorValue }) => {
  return (
    <main className="mt-36 mb-5 grid place-content-center">
      <div
        className="color-box w-72 h-72 rounded-lg px-6 py-5 ring-1 ring-slate-900/5 shadow-xl grid place-content-center"
        style={{ backgroundColor: colorValue }}
      >
        <p class="text-slate-900 dark:text-white text-base font-medium tracking-tight">
          {colorValue ? colorValue : "Empty Value"}
        </p>
      </div>
    </main>
  );
};

Content.defaultProps = {
  colorValue: "Empty Color Value"
}
export default Content;

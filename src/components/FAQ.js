const FAQ = () => {
  return (
    <>
      <main className="max-w-md mx-auto my-10">
        <section
          tabindex="0"
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Focus me to see content
          </div>
          <div className="collapse-content">
            <p>tabindex="0" attribute is necessary to make the div focusable</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default FAQ;

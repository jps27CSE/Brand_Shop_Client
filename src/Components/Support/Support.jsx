import supportPic from "../../assets/support.jpg";

const Support = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${supportPic})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Support and FAQs</h1>
            <p className="mb-5">
              Welcome to our Support and FAQs section. We are here to assist you
              with any questions or issues you may have.
            </p>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium  text-white"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="question"
                  className="block text-sm font-medium text-white
                  "
                >
                  Your Question or Inquiry:
                </label>
                <textarea
                  id="question"
                  name="question"
                  required
                  rows="4"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Give Description of you question or inquiry"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;

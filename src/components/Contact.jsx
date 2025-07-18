export default function Contact() {
  return (
    <section className="py-20 px-4 bg-white" id="contact">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Let’s Connect</h2>
        <form
          action="https://formspree.io/f/YOUR_ID_HERE"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-2 border rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

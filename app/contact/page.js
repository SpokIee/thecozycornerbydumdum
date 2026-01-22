export default function ContactPage() {
  return (
    <section className="max-w-md">
      <h2 className="text-3xl font-semibold mb-4 text-white">Contact Us</h2>

      <form className="bg-white p-6 rounded shadow space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full border border-zinc-300 p-3 rounded-lg focus:outline-none focus:border-black text-black"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-zinc-300 p-3 rounded-lg focus:outline-none focus:border-black text-black"
        />
        <textarea
          placeholder="Message"
          rows="5"
          className="w-full border border-zinc-300 p-3 rounded-lg focus:outline-none focus:border-black resize-none text-black"
        />
        <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-zinc-800 transition-colors font-semibold">
          Send Message
        </button>
      </form>
    </section>
  );
}
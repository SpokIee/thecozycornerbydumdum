import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="bg-white rounded-2xl shadow-xl p-12 max-w-5xl w-full mx-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Book Image */}
          <div className="flex justify-center">
            <Image
              src="/images/book1.png"
              alt="The Cozy Corner Featured Book"
              width={240}
              height={320}
              priority
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side - Content */}
          <div className="text-center md:text-left space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                Welcome to <br />
                The Cozy Corner
              </h1>
              <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
                A cozy online bookstore with hand-picked recommendations for every reader.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/books"
                className="px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-zinc-800 transition-all shadow-lg"
              >
                Browse Books
              </Link>

              <Link
                href="/about"
                className="px-8 py-4 bg-white text-black font-semibold rounded-full border-2 border-black hover:bg-zinc-50 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
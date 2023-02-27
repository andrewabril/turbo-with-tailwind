import Head from "next/head";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Web - Turborepo Example</title>
      </Head>

      <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Email"
          className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
        />
        <button
          type="button"
          className="disabled:opacity-60 border text-white font-bold tracking-wide sm:px-6 uppercase group inline-flex items-center justify-center rounded-md py-4 px-4 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 disabled:hover:bg-gray-800 hover:bg-green-500 focus:ring-green-500 bg-gray-900 focus:ring-2 border-transparent"
        >
          Submit
        </button>
      </main>
    </div>
  );
}

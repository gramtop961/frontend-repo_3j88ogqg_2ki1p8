import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <section id="get-started" className="py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold">Ready to build?</h3>
            <p className="mt-3 text-gray-600">
              Kick off your next idea with this prewired Vite + React + Tailwind starter. Customize the UI and start shipping.
            </p>
            <div className="mt-6 inline-flex rounded-md bg-gray-900 text-white px-6 py-3 hover:bg-gray-800">
              Start Now
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

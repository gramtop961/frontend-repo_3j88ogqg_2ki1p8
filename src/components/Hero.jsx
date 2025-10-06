import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6bO1k7R3FJc5v0k8/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
            Build beautiful apps, faster
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Ship modern web experiences with a polished UI powered by React, Tailwind, and delightful 3D.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#get-started" className="inline-flex items-center rounded-md bg-gray-900 px-5 py-3 text-white hover:bg-gray-800">
              Get Started
            </a>
            <a href="#features" className="inline-flex items-center rounded-md border border-gray-300 px-5 py-3 text-gray-900 hover:bg-gray-50">
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

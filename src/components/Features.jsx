import { Rocket, Sparkles, Shield } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Rapid Development',
    desc: 'Kickstart projects with a production-ready stack and elegant components.',
  },
  {
    icon: Sparkles,
    title: 'Polished UI',
    desc: 'Tailwind styles and smooth animations help you look great out of the box.',
  },
  {
    icon: Shield,
    title: 'Type-Safe & Secure',
    desc: 'Best practices and tooling to keep your app stable and safe.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Everything you need</h2>
          <p className="mt-3 text-gray-600">A curated set of tools to help you ship faster.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow transition-shadow">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-900 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Approach from './components/Approach';
import Capabilities from './components/Capabilities';
import Proof from './components/Proof';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Approach />
        <Capabilities />
        <Proof />
        <CTA />
      </main>
      <footer className="py-10 border-t border-slate-200 bg-white text-center text-sm text-slate-600">
        © {new Date().getFullYear()} RedRipple Advisory. All rights reserved.
      </footer>
    </div>
  );
}

export default App;

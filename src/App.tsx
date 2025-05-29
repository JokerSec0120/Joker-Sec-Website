import React, { useEffect, useState } from 'react';
import { Terminal, Shield, Skull, Code } from 'lucide-react';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio('https://dl.dropboxusercontent.com/scl/fi/v9dxj0nv0nk2qxw3e5o1c/cyberpunk-2099.mp3?rlkey=YOUR_KEY&dl=0');
    audio.loop = true;
    setAudioElement(audio);

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const toggleMusic = () => {
    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-sm fixed w-full z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/Start Menu Logo 7d1c4a45-6e86-4bfb-a0d0-1a264fbe99c2.png" alt="Joker Sec Logo" className="w-12 h-12 animate-pulse" />
            <span className="text-2xl font-bold text-red-500">Joker Sec</span>
          </div>
          <button
            onClick={toggleMusic}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md transition-colors"
          >
            {isPlaying ? 'Pause Music' : 'Play Music'}
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="pt-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-6 animate-text bg-gradient-to-r from-red-500 via-gray-300 to-red-500 bg-clip-text text-transparent">
              Welcome to Joker Sec
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Exploring the depths of cybersecurity with precision and expertise
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-16">
            {[
              { icon: <Shield className="w-12 h-12 text-red-500" />, title: 'Security First' },
              { icon: <Terminal className="w-12 h-12 text-red-500" />, title: 'Advanced Tools' },
              { icon: <Code className="w-12 h-12 text-red-500" />, title: 'Clean Code' },
              { icon: <Skull className="w-12 h-12 text-red-500" />, title: 'Penetration Testing' }
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-900 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-red-500/20"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">
                  Professional security solutions with cutting-edge technology
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Matrix-like Animation Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black" />
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-0 left-1/2 w-px h-32 bg-red-500/30 animate-matrix"
            style={{
              left: `${(i / 20) * 100}%`,
              animationDelay: `${i * 0.1}s`,
              opacity: Math.random(),
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
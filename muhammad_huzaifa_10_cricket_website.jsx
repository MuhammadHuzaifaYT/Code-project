export default function MuhammadHuzaifa10Website() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-black text-white font-sans">
      {/* Header */}
      <header className="p-6 flex items-center justify-between border-b border-green-700">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-2xl font-bold shadow-lg">
            MH
          </div>
          <div>
            <h1 className="text-3xl font-bold">MuhammadHuzaifa10</h1>
            <p className="text-green-300">Tape Ball & Cricket Career</p>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 text-lg">
          <a href="#home" className="hover:text-green-300">Home</a>
          <a href="#t20" className="hover:text-green-300">T20</a>
          <a href="#test" className="hover:text-green-300">Test</a>
          <a href="#tapeball" className="hover:text-green-300">Tape Ball</a>
          <a href="#records" className="hover:text-green-300">Records</a>
        </nav>
      </header>

      {/* Hero Banner */}
      <section
        id="home"
        className="relative h-[500px] flex items-center justify-center text-center px-6"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>

        <div className="relative z-10 max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-4 text-green-300 drop-shadow-lg">
            Muhammad Huzaifa
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Professional Tape Ball Cricket Player
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-green-800/70 rounded-2xl p-4 shadow-xl">
              <h3 className="text-3xl font-bold">2032</h3>
              <p>T20 Runs</p>
            </div>
            <div className="bg-green-800/70 rounded-2xl p-4 shadow-xl">
              <h3 className="text-3xl font-bold">102</h3>
              <p>T20 Wickets</p>
            </div>
            <div className="bg-green-800/70 rounded-2xl p-4 shadow-xl">
              <h3 className="text-3xl font-bold">4110</h3>
              <p>Test Runs</p>
            </div>
            <div className="bg-green-800/70 rounded-2xl p-4 shadow-xl">
              <h3 className="text-3xl font-bold">502</h3>
              <p>Test Wickets</p>
            </div>
          </div>
        </div>
      </section>

      {/* T20 Career */}
      <section id="t20" className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-green-300">
          T20 Career
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-green-900 rounded-3xl p-8 shadow-2xl border border-green-700">
            <h3 className="text-2xl font-bold mb-4">Batting Stats</h3>
            <ul className="space-y-3 text-lg">
              <li>Total Runs: 2032</li>
              <li>Best Score: 114*</li>
              <li>Strike Rate: 149.8</li>
              <li>Fours: 210</li>
              <li>Sixes: 96</li>
            </ul>
          </div>

          <div className="bg-green-900 rounded-3xl p-8 shadow-2xl border border-green-700">
            <h3 className="text-2xl font-bold mb-4">Bowling Stats</h3>
            <ul className="space-y-3 text-lg">
              <li>Total Wickets: 102</li>
              <li>Best Bowling: 6/18</li>
              <li>Economy: 6.9</li>
              <li>Hat-tricks: 2</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Test Career */}
      <section id="test" className="py-16 px-6 bg-black/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-center text-green-300">
            Test Career
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-900 rounded-3xl p-8 shadow-2xl border border-green-700">
              <h3 className="text-2xl font-bold mb-4">Batting Records</h3>
              <ul className="space-y-3 text-lg">
                <li>Total Runs: 4110</li>
                <li>Highest Score: 241</li>
                <li>Average: 56.4</li>
                <li>Centuries: 14</li>
              </ul>
            </div>

            <div className="bg-green-900 rounded-3xl p-8 shadow-2xl border border-green-700">
              <h3 className="text-2xl font-bold mb-4">Bowling Records</h3>
              <ul className="space-y-3 text-lg">
                <li>Total Wickets: 502</li>
                <li>Best Bowling: 9/44</li>
                <li>5 Wicket Hauls: 31</li>
                <li>Economy: 2.7</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tape Ball Section */}
      <section id="tapeball" className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-green-300">
          Tape Ball Career
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-green-800 rounded-2xl p-6 text-center shadow-xl">
            <h3 className="text-4xl font-bold">5200+</h3>
            <p className="mt-2">Tape Ball Runs</p>
          </div>

          <div className="bg-green-800 rounded-2xl p-6 text-center shadow-xl">
            <h3 className="text-4xl font-bold">320+</h3>
            <p className="mt-2">Tape Ball Wickets</p>
          </div>

          <div className="bg-green-800 rounded-2xl p-6 text-center shadow-xl">
            <h3 className="text-4xl font-bold">180</h3>
            <p className="mt-2">Matches</p>
          </div>

          <div className="bg-green-800 rounded-2xl p-6 text-center shadow-xl">
            <h3 className="text-4xl font-bold">41</h3>
            <p className="mt-2">Man of the Match</p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="records" className="py-16 px-6 bg-black/40">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 text-green-300">
            Records & Achievements
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-900 rounded-3xl p-8 border border-green-700 shadow-2xl">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold">Best Player</h3>
              <p className="mt-2 text-gray-300">Multiple tournament awards</p>
            </div>

            <div className="bg-green-900 rounded-3xl p-8 border border-green-700 shadow-2xl">
              <div className="text-5xl mb-4">🔥</div>
              <h3 className="text-2xl font-bold">Fast Scorer</h3>
              <p className="mt-2 text-gray-300">Explosive batting performances</p>
            </div>

            <div className="bg-green-900 rounded-3xl p-8 border border-green-700 shadow-2xl">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold">Top Bowler</h3>
              <p className="mt-2 text-gray-300">Consistent wicket taker</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-green-700 mt-10">
        <h3 className="text-2xl font-bold text-green-300">
          MuhammadHuzaifa10
        </h3>
        <p className="mt-2 text-gray-400">
          Tape Ball Cricket Career Website
        </p>
      </footer>
    </div>
  );
}

import React from "react";

export default function App() {
  const stats = [
    { title: "Books Completed", value: "24" },
    { title: "Reading Streak", value: "17 Days" },
    { title: "Focus Hours", value: "82h" },
    { title: "Saved Notes", value: "316" },
  ];

  const moods = [
    "Reflective",
    "Philosophical",
    "Calm",
    "Ambitious",
    "Healing",
    "Midnight Reads",
  ];

  const books = [
    {
      title: "The Midnight Library",
      author: "Matt Haig",
      category: "Reflective Fiction",
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      category: "Self Growth",
    },
    {
      title: "Meditations",
      author: "Marcus Aurelius",
      category: "Philosophy",
    },
  ];

  const features = [
    "AI Reading Companion",
    "Book Summaries",
    "Audiobooks",
    "Book Bites",
    "Focus Reading Sessions",
    "Smart Notes",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1128] via-[#0A1128] to-[#1C2541] text-[#F5F1EA] font-sans relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-[#D4AF37]/20 via-[#D4AF37]/10 to-transparent blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-tl from-[#D4AF37]/20 via-[#D4AF37]/10 to-transparent blur-[150px] rounded-full translate-x-1/2 translate-y-1/2"></div>

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-12 py-8 backdrop-blur-md bg-black/30 border-b border-white/10">
        <h1 className="text-3xl font-light uppercase tracking-widest text-[#D4AF37]">
          Readoraire Room
        </h1>
        <div className="hidden md:flex gap-10 text-sm font-medium uppercase text-[#DCC9A9]/70">
          <a href="#">Discover</a>
          <a href="#">Library</a>
          <a href="#">Focus</a>
          <a href="#">Notes</a>
          <a href="#">Profile</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-12 py-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div>
          <p className="uppercase tracking-widest text-sm text-[#D4AF37] mb-6 font-semibold">
            Premium Reading Ecosystem
          </p>
          <h1 className="text-6xl leading-[1.1] font-light mb-8 max-w-2xl text-white/90">
            Curate Your Quiet Reading Rituals.
          </h1>
          <p className="text-[#DCC9A9]/70 text-lg leading-8 max-w-xl mb-10">
            Discover books by mood, track your journey, interact with a smart
            assistant, and immerse in a luxurious literary environment.
          </p>
          {/* Search */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <input
              type="text"
              placeholder="Search books, moods, themes or ideas..."
              className="bg-white/5 border border-white/10 px-6 py-4 rounded-3xl w-full outline-none placeholder:text-white/50 focus:ring-2 focus:ring-[#D4AF37] transition"
            />
            <button className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black px-8 py-4 rounded-3xl text-sm font-semibold tracking-wide hover:opacity-90 transition-shadow hover:scale-105 shadow-lg">
              Explore
            </button>
          </div>
          {/* Mood Filters */}
          <div className="flex flex-wrap gap-3 mt-8">
            {moods.map((mood) => (
              <button
                key={mood}
                className="px-5 py-2 rounded-full border border-white/20 bg-white/5 text-sm text-[#DCC9A9]/80 hover:bg-white/10 transition"
              >
                {mood}
              </button>
            ))}
          </div>
        </div>

        {/* Dashboard Card */}
        <div className="bg-white/5 border border-white/20 rounded-[32px] p-8 backdrop-blur-xl shadow-xl border-gradient-gold">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-sm uppercase tracking-widest text-[#D4AF37] font-semibold">
                Current Reading
              </p>
              <h2 className="text-2xl mt-2 font-light text-white">The Midnight Library</h2>
            </div>
            <div className="w-14 h-14 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/30 flex items-center justify-center shadow-inner">
              <div className="w-3 h-3 rounded-full bg-[#D4AF37]"></div>
            </div>
          </div>
          {/* Stats */}
          <div className="space-y-6">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="flex items-center justify-between border-b border-white/10 pb-4"
              >
                <p className="text-[#DCC9A9]/60 uppercase text-xs">{stat.title}</p>
                <h3 className="text-xl font-semibold">{stat.value}</h3>
              </div>
            ))}
          </div>
          {/* Button */}
          <button className="mt-10 w-full bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] hover:opacity-90 transition-shadow transition-transform hover:scale-105 py-4 rounded-3xl text-sm font-semibold tracking-wide shadow-lg">
            Continue Reading Session
          </button>
        </div>
      </section>

      {/* Featured Books */}
      <section className="relative z-10 px-12 py-16 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-sm uppercase tracking-widest text-[#D4AF37] mb-3 font-semibold">
              Personalized Collection
            </p>
            <h2 className="text-4xl font-light text-white">Books Curated For Your Mood</h2>
          </div>
          <button className="border border-white/20 px-6 py-3 rounded-full text-sm hover:bg-white/5 transition">
            View Library
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {books.map((book) => (
            <div
              key={book.title}
              className="bg-white/5 border border-white/20 rounded-[28px] p-8 hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="h-56 rounded-2xl bg-gradient-to-b from-[#1C2541] to-[#0A1128] border border-white/10 mb-8"></div>
              <p className="text-sm text-[#D4AF37] mb-2">{book.category}</p>
              <h3 className="text-2xl mb-3">{book.title}</h3>
              <p className="text-[#DCC9A9]/60">{book.author}</p>
              <button className="mt-8 text-sm border-b border-[#D4AF37]/50 pb-1 hover:text-[#D4AF37] transition">
                Open Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 px-12 py-24 max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="uppercase tracking-widest text-sm text-[#D4AF37] mb-4 font-semibold">
            Reading Intelligence
          </p>
          <h2 className="text-5xl font-light leading-tight mb-6 text-white">
            Built To Remove Every Reading Friction.
          </h2>
          <p className="text-[#DCC9A9]/70 leading-8">
            Every feature is intentionally crafted to simplify discovery,
            improve focus, deepen understanding, and make reading feel calm,
            immersive, and rewarding.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature}
              className="bg-white/5 border border-white/20 rounded-[28px] p-8 hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 mb-8"></div>
              <h3 className="text-2xl mb-4">{feature}</h3>
              <p className="text-[#DCC9A9]/65 leading-7">
                Experience a refined feature ecosystem designed to support your
                reading journey with clarity, depth, and intelligent assistance.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Companion */}
      <section className="relative z-10 px-12 pb-28 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-white/5 to-white/[0.03] border border-white/10 rounded-[36px] p-12 overflow-hidden relative backdrop-blur-md shadow-xl border-gradient-gold">
          <div className="absolute right-0 top-0 w-72 h-72 bg-[#D4AF37]/10 blur-[120px] rounded-full"></div>
          <div className="relative z-10 max-w-3xl">
            <p className="uppercase tracking-widest text-sm text-[#D4AF37] mb-5 font-semibold">
              AI Reading Companion
            </p>
            <h2 className="text-5xl font-light leading-tight mb-8 text-white">
              Understand Every Book More Deeply.
            </h2>
            <p className="text-[#DCC9A9]/70 text-lg leading-8 mb-10">
              Ask questions, summarize chapters, extract key takeaways, save
              insights, discover related ideas, and navigate difficult concepts
              through an intelligent conversational reading assistant.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Ask anything about your current book..."
                className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl w-full outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
              <button className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black px-8 py-4 rounded-2xl text-sm font-semibold tracking-wide hover:opacity-90 transition-shadow hover:scale-105 shadow-lg">
                Ask AI
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
import { useState, useEffect } from 'react';
import { CosmicBackground } from './components/CosmicBackground';
import { MusicControl } from './components/MusicControl';
import { ProgressIndicator } from './components/ProgressIndicator';
import { MediaViewer } from './components/MediaViewer';

import { Intro } from './sections/Intro';
import { MainCharacter } from './sections/MainCharacter';
import { CatUniverse } from './sections/CatUniverse';
import { BuiltDifferent } from './sections/BuiltDifferent';
import { TheLab } from './sections/TheLab';
import { Astra } from './sections/Astra';
import { AnimeEpisode } from './sections/AnimeEpisode';
import { Memories } from './sections/Memories';
import { PersonalLetter } from './sections/PersonalLetter';
import { FinalReveal } from './sections/FinalReveal';

import { MEMORIES_DATA, type MemoryItem } from './data/memories';

export function App() {
  const [hasEntered, setHasEntered] = useState<boolean>(false);
  const [selectedMemory, setSelectedMemory] = useState<MemoryItem | null>(null);
  const [isInLetterSection, setIsInLetterSection] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const letterEl = document.getElementById('letter');
      if (letterEl) {
        const rect = letterEl.getBoundingClientRect();
        // If letter is within active viewing region
        const inView = rect.top < window.innerHeight * 0.7 && rect.bottom > window.innerHeight * 0.3;
        setIsInLetterSection(inView);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenMemoryById = (id: number) => {
    const mem = MEMORIES_DATA.find((m) => m.id === id) || MEMORIES_DATA[0];
    setSelectedMemory(mem);
  };

  const handleNextMemory = () => {
    if (!selectedMemory) return;
    const currentIndex = MEMORIES_DATA.findIndex((m) => m.id === selectedMemory.id);
    const nextIndex = (currentIndex + 1) % MEMORIES_DATA.length;
    setSelectedMemory(MEMORIES_DATA[nextIndex]);
  };

  const handlePrevMemory = () => {
    if (!selectedMemory) return;
    const currentIndex = MEMORIES_DATA.findIndex((m) => m.id === selectedMemory.id);
    const prevIndex = (currentIndex - 1 + MEMORIES_DATA.length) % MEMORIES_DATA.length;
    setSelectedMemory(MEMORIES_DATA[prevIndex]);
  };

  const currentMemoryIndex = selectedMemory
    ? MEMORIES_DATA.findIndex((m) => m.id === selectedMemory.id)
    : 0;

  return (
    <div className="relative min-h-screen text-slate-200 bg-[#050508] font-sans selection:bg-purple-500/30 selection:text-purple-200">
      {/* Living Cosmic Canvas in background */}
      <CosmicBackground />

      {/* Floating soundtrack controls */}
      <MusicControl started={hasEntered} isInLetterSection={isInLetterSection} />

      {/* Story Chapter Indicator and navigation dots */}
      <ProgressIndicator />

      {/* Main Experience Chapters */}
      <main className="relative z-10">
        <Intro onEnter={() => setHasEntered(true)} />
        <MainCharacter onOpenMemory={handleOpenMemoryById} />
        <CatUniverse onOpenMemory={handleOpenMemoryById} />
        <BuiltDifferent onOpenMemory={handleOpenMemoryById} />
        <TheLab onOpenMemory={handleOpenMemoryById} />
        <Astra onOpenMemory={handleOpenMemoryById} />
        <AnimeEpisode onOpenMemory={handleOpenMemoryById} />
        <Memories onSelectMemory={(mem) => setSelectedMemory(mem)} />
        <PersonalLetter />
        <FinalReveal />
      </main>

      {/* Lightbox / Modal for 12 Memories */}
      <MediaViewer
        memory={selectedMemory}
        onClose={() => setSelectedMemory(null)}
        onNext={handleNextMemory}
        onPrev={handlePrevMemory}
        currentIndex={currentMemoryIndex}
        total={MEMORIES_DATA.length}
      />
    </div>
  );
}

export default App;

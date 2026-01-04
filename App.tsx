
import React from 'react';
import { portfolioData } from './constants.ts';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Timeline } from './components/Timeline';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero data={portfolioData.personal} />
        <Skills skills={portfolioData.skills} />
        <Projects projects={portfolioData.projects} />
        <Timeline 
          education={portfolioData.education} 
          experience={portfolioData.experience} 
        />
      </main>
      <Footer contact={portfolioData.contact} />
    </div>
  );
};

export default App;

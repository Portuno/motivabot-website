import React from 'react';
import './App.css';

function App() {
  const telegramBotUrl = "https://t.me/MotiivaBot";

  return (
    <div className="App">
      <header>
        <div className="logo">* Motivabot</div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#journey">My Journey</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <a href={telegramBotUrl} target="_blank" rel="noopener noreferrer" className="cta-button">
          Start Using Motivabot
        </a>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-image">
            <img src="/images/designer.png" alt="Motiva-Bot landscape" />
          </div>
          <div className="hero-content">
            <h1>Welcome to Motivabot</h1>
            <p>Get your daily dose of motivation!</p>
            <a href={telegramBotUrl} target="_blank" rel="noopener noreferrer" className="cta-button">
              Start Using Motivabot
            </a>
          </div>
        </section>

        <section id="about">
          <h2>About Motivabot</h2>
          <p>Motivabot is a Telegram bot that delivers a motivational quote to you every day.</p>
        </section>

        <section id="how-it-works">
          <h2>How It Works</h2>
          <ol>
            <li>Add Motivabot on Telegram</li>
            <li>Receive a daily motivational quote</li>
            <li>Stay inspired and motivated!</li>
          </ol>
        </section>

        <section id="journey">
          <h2>My Journey</h2>
          <p>Here's where I'll share my experiences in creating Motivabot and other products.</p>
        </section>

        <section id="contact">
          <h2>Contact Me</h2>
          <form action="https://formspree.io/f/mvgpyzke" method="POST">
            <input type="email" name="email" placeholder="Your email" required />
            <textarea name="message" placeholder="Your message" required></textarea>
            <button type="submit" className="cta-button">Send</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Motivabot</p>
      </footer>
    </div>
  );
}

export default App;

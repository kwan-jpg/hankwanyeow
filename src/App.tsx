import { motion } from 'motion/react';
import { ArrowRight, Star, Quote, CheckCircle, ChevronDown, Coffee } from 'lucide-react';

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-2">
        <span className="font-serif font-bold text-2xl tracking-tight text-[var(--color-text-main)]">Andelica.</span>
      </div>
      <div className="hidden md:flex items-center gap-10 text-sm font-medium text-[var(--color-text-muted)]">
        <a href="#problem" className="hover:text-[var(--color-text-main)] transition-colors">The Problem</a>
        <a href="#prism" className="hover:text-[var(--color-text-main)] transition-colors">The PRISM System</a>
        <a href="#about" className="hover:text-[var(--color-text-main)] transition-colors">About</a>
        <a href="#faq" className="hover:text-[var(--color-text-main)] transition-colors">FAQ</a>
      </div>
      <button className="btn-outline text-sm">
        Apply Now
      </button>
    </nav>
  );
}

function Hero() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto relative">
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center px-4 py-1.5 rounded-full bg-[var(--color-primary-light)] text-xs font-semibold text-[var(--color-primary)] tracking-wide mb-8 uppercase"
        >
          For high-earning women professionals in Singapore
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl font-medium tracking-tight text-[var(--color-text-main)] mb-8 leading-[1.1]"
        >
          Most women in Singapore don't track where their money actually goes — <br className="hidden md:block" />
          <span className="italic text-[var(--color-primary)]">and it's quietly costing them their retirement.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[var(--color-text-muted)] max-w-2xl mx-auto mb-10 text-lg leading-relaxed"
        >
          Join over 300 Singapore women who finally know exactly what's coming in, what's leaking out, and what they need to do to build real long-term wealth.
        </motion.p>
        
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="btn-primary flex items-center gap-2"
        >
          Learn About The PRISM System <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="border-y border-[var(--color-primary-light)] py-12">
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-[var(--color-text-muted)] uppercase tracking-widest">Trusted by women professionals in Singapore ↘</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[var(--color-primary-light)]">
          <div className="pt-6 md:pt-0">
            <div className="font-serif text-5xl font-medium text-[var(--color-primary)] mb-2">300+</div>
            <div className="text-sm text-[var(--color-text-muted)] font-medium tracking-wide">Women Guided</div>
          </div>
          <div className="pt-6 md:pt-0">
            <div className="font-serif text-5xl font-medium text-[var(--color-primary)] mb-2">10</div>
            <div className="text-sm text-[var(--color-text-muted)] font-medium tracking-wide">Years Experience</div>
          </div>
          <div className="pt-6 md:pt-0">
            <div className="font-serif text-5xl font-medium text-[var(--color-primary)] mb-2">CFP</div>
            <div className="text-sm text-[var(--color-text-muted)] font-medium tracking-wide">Certified Planner</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote: "The detailed review of my investments and how my money was performing was eye-opening. I am genuinely pleased with the progress I have made and would urge any woman to start this journey.",
      name: "Susie"
    },
    {
      quote: "She is without doubt the first person I recommend when anyone asks me about growing their money the right way.",
      name: "Joyce Yeo"
    },
    {
      quote: "She helped us see the full picture clearly and make investment decisions we actually understood and trusted. We are in a far more confident position.",
      name: "Andy Leong"
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto bg-[var(--color-surface)] rounded-[3rem] my-12">
      <div className="text-center mb-16">
        <p className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-widest mb-4">What clients say</p>
        <h2 className="font-serif text-4xl md:text-5xl font-medium text-[var(--color-text-main)]">Women Who Finally Stopped Guessing.</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-12">
        {testimonials.map((t, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card flex flex-col justify-between"
          >
            <div>
              <Quote className="w-8 h-8 text-[var(--color-primary-light)] mb-6" />
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-8 italic">"{t.quote}"</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-1 bg-[var(--color-primary)] rounded-full"></div>
              <p className="font-medium text-[var(--color-text-main)]">— {t.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section id="problem" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="mb-16">
        <p className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-widest mb-4">The problem</p>
        <h2 className="font-serif text-4xl md:text-5xl font-medium text-[var(--color-text-main)] leading-tight">
          This Is What Most High-Earning Women In Singapore Are Actually Dealing With.
        </h2>
      </div>
      
      <div className="space-y-6 text-lg text-[var(--color-text-muted)] leading-relaxed">
        <p>A full-time job. A household to run. Kids to raise. Parents to think about. And somewhere in between all of that — trying to figure out what to do with their money.</p>
        <p>There is no time to sit down and go through everything. So most women don't. And the money keeps going out every month — on expenses they can't fully account for, into investments they don't fully understand — while the years keep passing.</p>
        <p>When women finally sit down with me and we go through their numbers together, most of them are shocked. Not because things are terrible.</p>
        <p className="font-medium text-[var(--color-text-main)]">Because they realise that with simple optimisation, they could have been saving significantly more — and that thousands of dollars have been quietly leaking every single month without them knowing.</p>
        <p>Some of my clients discovered they had leaked close to six figures. Simply from not having full clarity over their own numbers.</p>
      </div>

      <div className="mt-24">
        <p className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-widest mb-4">The hardest part</p>
        <h2 className="font-serif text-4xl md:text-5xl font-medium text-[var(--color-text-main)] leading-tight mb-8">
          Most Of Them Already Knew.
        </h2>
        <div className="space-y-6 text-lg text-[var(--color-text-muted)] leading-relaxed">
          <p>She knows she should be tracking. She knows she should have a clearer plan. She's the person everyone else comes to for advice — at work, at home, in her family group chat. But her own finances? That's the one thing she hasn't fully faced.</p>
          <p>Not because she can't. Because nobody has ever sat down with her and made it simple enough to actually start.</p>
          <div className="p-8 bg-[var(--color-primary-light)] rounded-3xl my-8">
            <p className="font-serif text-2xl text-[var(--color-text-main)] italic text-center">
              "That is not a money problem.<br/>That is a clarity problem."
            </p>
          </div>
          <p>And that is exactly what the PRISM System solves.</p>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-5/12"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[var(--color-primary-light)] arch-mask translate-x-4 translate-y-4"></div>
            <img 
              src="https://picsum.photos/seed/woman-professional/800/1000" 
              alt="Andelica Jenelle Ong" 
              className="relative z-10 w-full h-auto arch-mask object-cover shadow-sm"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-center text-sm text-[var(--color-text-muted)] mt-6 italic">Andelica Jenelle Ong</p>
        </motion.div>
        
        <div className="w-full md:w-7/12">
          <p className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-widest mb-4">Built on my own money first</p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-[var(--color-text-main)] mb-8">
            I Was Exactly Where You Are.
          </h2>
          
          <div className="space-y-6 text-lg text-[var(--color-text-muted)] leading-relaxed">
            <p>I am Andelica Jenelle Ong. CFP-certified. Ten years. 300+ women guided.</p>
            <p>But before any of that — I was exactly where you are.</p>
            <p>I was earning well. Saving. Had money moving every month. But if someone had asked me whether I was actually on track — honestly, I didn't know. I was following recommendations, trusting projections, hoping it would all add up somehow.</p>
            <p className="italic border-l-2 border-[var(--color-primary)] pl-6 py-2 my-6">
              "Is this actually building the wealth I want? To what end? How much is enough? Or am I just watching the years pass?"
            </p>
            <p>So I stopped hoping and started building.</p>
            <p>I sat down with my own numbers — properly, for the first time. Mapped everything. Found the leaks. Built a criteria for selecting investments rooted in real, measurable performance. And invested my own money using that criteria.</p>
            <p>The moment I had full clarity over my own finances, the fear lifted. Not because I suddenly had more money. Because I finally knew exactly what my money was doing.</p>
            <p>I wanted every woman to feel that. So I built it into a system — and I have been walking women through it ever since.</p>
            <p className="font-medium text-[var(--color-text-main)]">That is the PRISM System. Built on my own money. Refined across 300 women.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrismSystem() {
  const steps = [
    {
      letter: "P",
      title: "Picture",
      desc: "Know exactly where every dollar is going — so nothing leaves without you knowing."
    },
    {
      letter: "R",
      title: "Retirement",
      desc: "Map out the lifestyle you want, the age you want to stop working, and the legacy you want to leave your children — then work backwards to exactly what you need to do today."
    },
    {
      letter: "I",
      title: "Invest",
      desc: "Understand exactly how your money is being invested — and whether every dollar is working as hard as it should be for you. Many of my clients enjoy consistent, structured dividend payouts — even during volatile markets — thanks to a strict risk-control framework."
    },
    {
      letter: "S",
      title: "Seal the Leaks",
      desc: "Find out exactly how much has been quietly leaving every month — and make sure every dollar is going somewhere intentional. This alone has saved some of my clients tens of thousands a year."
    },
    {
      letter: "M",
      title: "Monitor",
      desc: "Walk away with a living plan that keeps your wealth growing with a real system behind it — month after month, year after year."
    }
  ];

  return (
    <section id="prism" className="py-24 px-6 max-w-7xl mx-auto bg-[var(--color-surface)] rounded-[3rem] my-12">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <p className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-widest mb-4">My tested and proven system</p>
        <h2 className="font-serif text-4xl md:text-5xl font-medium text-[var(--color-text-main)] mb-6">The PRISM System</h2>
        <p className="text-[var(--color-text-muted)] text-lg">Here's how it works →</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {steps.map((step, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-6 items-start p-8 rounded-3xl bg-[var(--color-bg)] border border-[var(--color-primary-light)]"
          >
            <div className="w-16 h-16 shrink-0 rounded-2xl bg-[var(--color-primary-light)] flex items-center justify-center font-serif text-3xl text-[var(--color-primary)] font-medium">
              {step.letter}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-text-main)] mb-3">{step.title}</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto mt-16 text-center space-y-6 text-lg text-[var(--color-text-muted)]">
        <p>This session is for you whether you have never invested a single dollar, or whether you have been investing for years but never had a clear plan behind it.</p>
        <p>You do not need to have everything figured out before you come. All you need is the willingness to finally sit down and face your numbers — and I will do the rest.</p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="w-full md:w-5/12">
          <p className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-widest mb-4">Only 3 spots this month</p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-[var(--color-text-main)] mb-6">
            Apply for a Coffee Chat
          </h2>
          <div className="space-y-6 text-[var(--color-text-muted)] leading-relaxed mb-10">
            <p>I'm offering coffee chats to 3 women in Singapore this month who are ready to take full control of their finances — but it all starts with a quick phone call.</p>
            <p>Because these coffee chats require deep preparation on my end, we'll begin with a relaxed 10–15 minute introductory call to understand your situation and make sure the PRISM System is the right fit — and if it is, we'll book your 90-minute coffee chat from there.</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="mt-1 text-[var(--color-primary)]"><CheckCircle className="w-5 h-5" /></div>
              <p className="text-sm text-[var(--color-text-main)] font-medium">This process works best for women who are earning well but have never had a clear financial plan in place.</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="mt-1 text-[var(--color-primary)]"><CheckCircle className="w-5 h-5" /></div>
              <p className="text-sm text-[var(--color-text-main)] font-medium">It will benefit you most if you are serious about building long-term wealth and retiring on your own terms.</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-7/12">
          <form className="glass-card space-y-5">
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-main)] mb-2">Full Name *</label>
              <input type="text" placeholder="Your full name" className="input-field" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-main)] mb-2">Email Address *</label>
              <input type="email" placeholder="your@email.com" className="input-field" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-main)] mb-2">Phone Number *</label>
              <input type="tel" placeholder="+65 9XXX XXXX" className="input-field" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-main)] mb-2">Monthly Income *</label>
                <select className="input-field appearance-none">
                  <option>Select range</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000 - $20,000</option>
                  <option>$20,000+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-main)] mb-2">Current Savings / Investments *</label>
                <select className="input-field appearance-none">
                  <option>Select range</option>
                  <option>Under $50k</option>
                  <option>$50k - $200k</option>
                  <option>$200k+</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-main)] mb-2">Biggest Financial Challenge Right Now *</label>
              <textarea rows={3} placeholder="Tell me what's been on your mind..." className="input-field resize-none"></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-main)] mb-2">How soon are you looking to get clarity? *</label>
              <select className="input-field appearance-none">
                <option>Select</option>
                <option>Immediately</option>
                <option>Within 1 month</option>
                <option>Within 3 months</option>
              </select>
            </div>
            
            <button type="button" className="btn-primary w-full mt-4 flex items-center justify-center gap-2">
              <Coffee className="w-5 h-5" /> Yes, I'm Ready for a Quick Intro Call →
            </button>
            
            <p className="text-xs text-[var(--color-text-muted)] mt-6 text-center leading-relaxed">
              To respect both our time, we only work with women who are serious about taking action in the next 3 months. While our meeting is a relaxed, judgment-free coffee chat, the backend work I do to map your numbers requires deep preparation. Because of this, I only open 3 spots each month.<br/><br/>
              Your information is secure and will only be used to contact you regarding your Wealth Clarity Session.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    "Do I need to have everything organised before the session?",
    "I have never invested before. Is this still for me?",
    "How is this different from speaking to a bank or typical financial advisor?",
    "How long is the session?",
    "What do I walk away with?"
  ];

  return (
    <section id="faq" className="py-24 px-6 max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-sm font-medium text-[var(--color-primary)] uppercase tracking-widest mb-4">Common questions</p>
        <h2 className="font-serif text-4xl font-medium text-[var(--color-text-main)]">Frequently Asked Questions</h2>
      </div>
      
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-primary-light)] flex justify-between items-center cursor-pointer hover:border-[var(--color-primary)] transition-colors">
            <h4 className="font-medium text-[var(--color-text-main)]">{faq}</h4>
            <ChevronDown className="w-5 h-5 text-[var(--color-primary)]" />
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--color-surface)] pt-24 pb-12 px-6 border-t border-[var(--color-primary-light)] mt-12">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="font-serif text-4xl md:text-5xl font-medium text-[var(--color-text-main)] mb-6">
          They Are Not Lying Awake Wondering Anymore.
        </h2>
        <p className="text-lg text-[var(--color-text-muted)] mb-10 leading-relaxed max-w-2xl mx-auto">
          The women who sat down with me two, three, five years ago know their numbers. They have a plan. And their wealth is growing with a real system behind it — not just hope.<br/><br/>
          That is available to you too.<br/><br/>
          The only question is whether this is the month you finally decide to face your numbers.
        </p>
        <button className="btn-primary">
          Apply for a Coffee Chat — Only 3 Spots This Month →
        </button>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 pt-12 border-t border-[var(--color-primary-light)]">
        <div className="flex flex-wrap justify-center gap-4 text-sm text-[var(--color-text-muted)]">
          <span>CFP-certified wealth planning</span>
          <span>·</span>
          <span>Investments</span>
          <span>·</span>
          <span>Wealth growth</span>
          <span>·</span>
          <span>Fund selection</span>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-[var(--color-text-muted)]">
          <span>300+ women guided since 2014</span>
          <span>·</span>
          <span>© Andelica | HerElevates</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] selection:bg-[var(--color-primary-light)] selection:text-[var(--color-text-main)]">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Testimonials />
        <Problem />
        <About />
        <PrismSystem />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

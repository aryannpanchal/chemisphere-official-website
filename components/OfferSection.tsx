'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  { src: '/demo2.png' },
  { src: '/demo1.png' },  
  { src: '/demo8.png' },{ src: '/demo7.png' },  { src: '/demo6.png' },  { src: '/demo5.png' },  { src: '/demo4.png' },
  { src: '/demo3.png' },




];

type ModalSection = {
  title: string;
  imageSrc?: string;
  content: React.ReactNode;
};

const ModalLayout = ({ sections }: { sections: ModalSection[] }) => {
  return (
    <div className="space-y-12">
      {sections.map((section, index) => (
        <div key={index}>
          <h2 className="laptop:text-6xl mobile:text-4xl font-bold mb-2 p-12">{section.title}</h2>
          <div
            className={`flex mobile:flex-col laptop:flex-row ${
              index % 2 !== 0 ? 'laptop:flex-row-reverse' : ''
            } bg-gray-100 rounded-xl overflow-hidden`}
          >
            <div className="w-full laptop:w-1/2 laptop:text-xl text-left px-8 py-10">
              {section.content}
            </div>
            {section.imageSrc && (
              <div className="w-full laptop:w-1/2 flex justify-center p-4">
                <img
                  src={section.imageSrc}
                  alt="Modal"
                  className="w-full h-auto max-w-[100%] rounded-lg object-cover"
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default function ImageCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    const scrollAmount = 260;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const modals = [
    <ModalLayout
      key={0}
      sections={[
        {
          title: 'Strong Basics. Stronger Ranks.',
          imageSrc: '/Picture1.jpg',
          content: (
            <>
              <p className="text-black tracking-tighter text-xl font-bold">
                The Online Edge: Learn More, Waste Less.
              </p>
              <p className="text-gray-500 text-xl font-bold tracking-tighter">
              A 2-hour commute to a crowded offline class every day? That’s 300+ hours wasted in a year—time that could’ve built confidence, speed, and understanding. At Chemisphere, learning happens right at your desk, at full throttle. Every minute is focused. Every concept is built with care. This isn’t some generic YouTube “live” — it’s an elite, premium classroom experience designed for serious aspirants. No distractions. No commuting. Just pure, guided learning with experts who know how to win.
              </p>
            </>
          ),
        },
        {
          title: '',
          imageSrc: '/Picture2.jpg',
          content: (
            <>
              <p className="text-black tracking-tighter text-xl font-bold">Open Mic, Always On.</p>
              <p className="text-gray-500 text-xl font-bold tracking-tighter">
              Most students never ask doubts in class—not because they don’t have questions, but because they’re scared of being judged. Not here. Chemisphere’s classes are open-mic and unapologetically democratic. Students can—and do—ask anything, from the simplest doubt to the trickiest concept. There are no “stupid questions” here. Only curious minds and expert mentors. This is a space where silence doesn’t exist, and clarity thrives. Every doubt solved is one rank higher in the making.              </p>
            </>
          ),
        },
        {
          title: '',
          imageSrc: '/Picture3.png',
          content: (
            <>
              <p className="text-black tracking-tighter text-xl font-bold">We Simplify. So Students Soar.</p>
              <p className="text-gray-500 text-xl font-bold tracking-tighter">
              Most coaching classes drown students in material. 1000-page modules, 6-hour marathons, pointless PDFs. And what do you get? Burnout and confusion. At Chemisphere, everything is handcrafted: focused notes, razor-sharp lectures, and intelligent test planning. No fluff. No filler. Every second counts—and every second teaches. This is where smart, minimalistic teaching beats traditional chaos.
              </p>
            </>
          ),
        },
        {
          title: '',
          imageSrc: '/Picture4.jpg',
          content: (
            <>
              <p className="text-black tracking-tighter text-xl font-bold">Ranks Aren’t a Gamble. They're Engineered.</p>
              <p className="text-gray-500 text-xl font-bold tracking-tighter">
              At Chemisphere, we don’t “hope” for ranks. We reverse-engineer them. From building core understanding to developing fast-solving reflexes, we train like champions. Mistakes aren’t hidden—they’re fixed. Panic isn’t ignored—it’s addressed. Confidence isn’t assumed—it’s built, layer by layer. In every live class, every discussion, and every test, we’re not just teaching—we’re crafting results. Because we know one thing: clarity creates toppers.
              </p>
            </>
          ),
        },
      ]}
    />,
    <ModalLayout
      key={1}
      sections={[
        {
          title: 'Handwritten by a Master. Trusted by Rankers.',
          imageSrc: '/Picture5.jpg',
          content: (
            <>
              <p className="text-black tracking-tighter text-xl font-bold">Handwritten to Perfection.</p>
              <p className="text-gray-500 text-xl font-bold tracking-tighter">
              Every single page of our notes is handwritten — not typed, not lazy screenshots from some smartboard class. We craft them with surgical precision and teach-level storytelling. Students have called them “works of art,” and toppers have said, “I understood more from these notes than an entire year of classes elsewhere.” When a page looks like a personal mentor is walking you through it — that’s not notes, that’s mentorship on paper.              </p>
            </>
          ),
        },
        {
          title: '',
          imageSrc: '/Picture6.png',
          content: (
            <>
              <p className="text-black tracking-tighter text-xl font-bold">Designed for Eyes through Day & Night.</p>
              <p className="text-gray-500 text-xl font-bold tracking-tighter">
              Unlike most PDFs that blind you like a stadium floodlight, Chemisphere Notes are set on a black background — soothing, and scientifically easier on the eyes. Students revise for hours without a headache, and many tell us this single feature changed their entire study experience. Why? Because when your eyes are relaxed, your brain is sharper. It's not just design. It’s strategy.
              </p>
            </>
          ),
        },
        {
          title: '',
          imageSrc: '/Picture7.png',
          content: (
            <>
              <p className="text-black tracking-tighter text-xl font-bold">Structured Like a War Plan.</p>
              <p className="text-gray-500 text-xl font-bold tracking-tighter">
              Toppers don’t just read notes. They need a battle map — step-by-step clarity, flowcharts, key points, and instant recall tricks. Chemisphere Notes are laid out exactly like that. Every topic builds like a story. You don’t scroll mindlessly — you glide through a crystal-clear roadmap of the concept. It’s so ridiculously effective that a top NEET scorer told us, “If I had to give credit to one thing for my AIR, it’s these damn notes.”
              </p>
            </>
          ),
        },
        {
          title: '',
          imageSrc: '/Picture8.png',
          content: (
            <>
              <p className="text-black tracking-tighter text-xl font-bold">🔒 Exclusive Access. Praise-Worthy Results.</p>
              <p className="text-gray-500 text-xl font-bold tracking-tighter">
              Chemisphere Notes are premium, high-resolution PDFs — available only to enrolled students. You can read them digitally or get them printed into your own custom study handbook. We’ve had students say they carried these notes into every test like a secret weapon. And parents? They call it the smartest investment they made that year.
              </p>
            </>
          ),
        },
      ]}
    />,
    <ModalLayout
    key={1}
    sections={[
      {
        title: 'Mentorship that is Personal.',
        imageSrc: '/Picture9.jpg',
        content: (
          <>
            <p className="text-black tracking-tighter text-xl font-bold">👀 More Attention = Faster Learning.</p>
            <p className="text-gray-500 text-xl font-bold tracking-tighter">
            In a class of 100, most kids disappear. In a Chemisphere micro batch of just 4–5 students, no one gets left behind. Every child gets direct attention. Every mistake is caught. Every concept is followed up till it sticks. That means less confusion, fewer silly mistakes, and faster academic growth. It’s not just more focused—it’s more effective.   </p>
          </>
        ),
      },
      {
        title: '',
        imageSrc: '/Picture10.jpg',
        content: (
          <>
            <p className="text-black tracking-tighter text-xl font-bold">📈 Constant Feedback = Continuous Improvement.</p>
            <p className="text-gray-500 text-xl font-bold tracking-tighter">
            In big batches, feedback comes once a month—by then, it’s too late. In micro batches, mentors track students in real time. If someone’s losing focus, we know it that day. If someone’s acing something, we raise the level. The result? No stagnation. Students grow faster, fix errors early, and enter every test better prepared than before.
            </p>
          </>
        ),
      },
      {
        title: '',
        imageSrc: '/Picture11.png',
        content: (
          <>
            <p className="text-black tracking-tighter text-xl font-bold">Speak Freely = Learn Deeply.</p>
            <p className="text-gray-500 text-xl font-bold tracking-tighter">
            The fear of asking doubts is real—especially in large, judgmental classes. That doesn’t exist here. Our micro batches are open-mic, democratic spaces. Students are encouraged to ask anything—even the “silliest” doubts. That safe environment leads to richer learning, better discussion, and stronger memory retention.
            </p>
          </>
        ),
      },
      {
        title: '',
        imageSrc: '/Picture12.jpg',
        content: (
          <>
            <p className="text-black tracking-tighter text-xl font-bold">Personalized Strategy = Higher Ranks.</p>
            <p className="text-gray-500 text-xl font-bold tracking-tighter">
            Every child has a unique weak spot—ours is the only system designed to find it and fix it. Some students struggle with test pressure. Others need help with speed. In micro batches, we know exactly where each student stands and tailor strategies accordingly. That's how we turn average students into confident rankers. Not by teaching more—but by teaching right.
            </p>
          </>
        ),
      },
    ]}
  />,
  <ModalLayout
    key={1}
    sections={[
      {
        title: 'Learning Never Pauses. Neither Do We.',
        imageSrc: '/Picture13.jpg',
        content: (
          <>
            <p className="text-black tracking-tighter text-xl font-bold">📞 A Direct Line to Your Teacher, Not a Teaching Assistant.</p>
            <p className="text-gray-500 text-xl font-bold tracking-tighter">
            At Chemisphere, we believe a doubt that’s not cleared instantly becomes a distraction. That’s why our doubt portal is open 24x7 on Telegram — no appointment, no waitlist, no "ask in the next class" nonsense. Students message, and boom — their teacher (not some intern or AI bot) personally clarifies it. This is not “support.” This is mentorship, on call.  </p>
          </>
        ),
      },
      {
        title: '',
        imageSrc: '/Picture14.jpg',
        content: (
          <>
            <p className="text-black tracking-tighter text-xl font-bold">⏳ No Waiting. No Forgetting. Just Clarity.</p>
            <p className="text-gray-500 text-xl font-bold tracking-tighter">
            When It’s Needed Most. Other coachings make you wait till the next class. But by then, students have already moved on or forgotten the question. With our Telegram portal, they ask the moment confusion hits. This real-time support keeps the learning curve sharp and stress-free. No backlog of confusion. No academic anxiety. Just smooth sailing, round-the-clock.
            </p>
          </>
        ),
      },
      {
        title: '',
        imageSrc: '/Picture15.jpg',
        content: (
          <>
            <p className="text-black tracking-tighter text-xl font-bold">🧠 Mastery Comes Faster When You Fix Doubts Instantly.</p>
            <p className="text-gray-500 text-xl font-bold tracking-tighter">
            Every question cleared instantly is a confidence boost. Our students don’t accumulate doubts. They eliminate them on the go. This continuous clarity builds mastery. Toppers have told us, “I was learning faster just because I never had to stay stuck for long.” That’s what this portal does — keeps you in momentum mode, always.
            </p>
          </>
        ),
      },
      {
        title: '',
        imageSrc: '/Picture16.jpg',
        content: (
          <>
            <p className="text-black tracking-tighter text-xl font-bold">🔐 Private, Safe, and Super Effective.</p>
            <p className="text-gray-500 text-xl font-bold tracking-tighter">
            This is not some public forum where your question gets buried under memes or spam. Our portal is a private, focused space — just you, your doubt, and a teacher who genuinely wants you to succeed. It’s the kind of access most students dream of. At Chemisphere, it’s just Tuesday.
            </p>
          </>
        ),
      },
    ]}
  />,
  <ModalLayout
      key={0}
      sections={[
        {
          title: 'Learn in the Moment. Revisit Anytime.',
          imageSrc: '/Picture17.jpg',
          content: (
            <>
              <p className="text-black tracking-tighter text-xl font-bold">
              🧠 Learn Live. Learn Right.
              </p>
              <p className="text-gray-500 text-xl font-bold tracking-tighter">
              Every Chemisphere class is a laser-focused, interactive live session—not a sleepy YouTube playlist or dull pre-recorded course. You attend class with a mentor who actually knows your name, calls you out when you’re distracted, and answers your questions in real-time. It’s not a monologue. It’s a conversation—where your brain is fully switched on.
              </p>
            </>
          ),
        },
        {
          title: '',
          imageSrc: '/Picture18.jpg',
          content: (
            <>
              <p className="text-black tracking-tighter text-xl font-bold">⏪ Missed It? Rewind. Pause. Repeat. Life happens.</p>
              <p className="text-gray-500 text-xl font-bold tracking-tighter">
              You miss a class—no guilt, no panic. Every session is auto-recorded and instantly uploaded for your access. Whether it’s 11 PM or a lazy Sunday morning, you can rewatch the lecture, pause at tricky parts, or speed-run through the revision. Our classes come with a rewind button. Traditional coaching doesn’t.            </p>
            </>
          ),
        },
        {
          title: '',
          imageSrc: '/Picture19.jpg',
          content: (
            <>
              <p className="text-black tracking-tighter text-xl font-bold">Your Learning. On-Demand.</p>
              <p className="text-gray-500 text-xl font-bold tracking-tighter">
              Every recorded class is neatly archived and labelled by topic, so you’re never lost. Revision is no longer about flipping through a dusty notebook—it’s one click away. Whether it's before a test or during last-minute prep, our recordings act like a second teacher who’s always ready when you are.
              </p>
            </>
          ),
        },
        {
          title: '',
          imageSrc: '/Picture20.jpg',
          content: (
            <>
              <p className="text-black tracking-tighter text-xl font-bold">🗣️ No Missed Class. No Missed Growth.</p>
              <p className="text-gray-500 text-xl font-bold tracking-tighter">
              At Chemisphere, we believe missing a class shouldn't mean falling behind. Whether you're sick, stuck in traffic, or dealing with life—our system ensures you never skip learning. Combine that with micro-batches and open mic sessions, and you have a classroom where nothing gets left behind. Not even you.
              </p>
            </>
          ),
        },
      ]}
    />,
    <ModalLayout
    key={0}
    sections={[
      {
        title: 'Engineered to Outpace, Outperform, Outrank.',
        imageSrc: '/Picture21.png',
        content: (
          <>
            <p className="text-black tracking-tighter text-xl font-bold">
            📅 Syllabus Done. On Time. Like Clockwork            </p>
            <p className="text-gray-500 text-xl font-bold tracking-tighter">
            At Chemisphere, syllabus completion isn’t a punchline — it’s a promise. We finish the entire JEE syllabus by September in regular classes. No scrambling, no “Sir is sick so Chapter 7 postponed” drama, no fake revision buzzwords. When others are still crawling through Electromagnetism in November, we’re deep into full-length tests and strategy discussions. Discipline isn’t our feature. It’s our identity.	
            </p>
          </>
        ),
      },
      {
        title: '',
        imageSrc: '/Picture22.jpg',
        content: (
          <>
            <p className="text-black tracking-tighter text-xl font-bold"> ⛔ No Teacher Roulette. No Sudden Shutdowns.</p>
            <p className="text-gray-500 text-xl font-bold tracking-tighter">
            You know the pattern — you join a big-name institute, fall in love with one teacher, and boom: mid-session switch. Or worse, a “temporary” teacher who reads off slides. And when it matters most? Sessions suspended, centers ghosted, WhatsApp groups silenced. At Chemisphere, we don’t run like that. Our classes are uninterrupted, structured, and relentless. No exits. No excuses. No betrayal.       </p>
          </>
        ),
      },
      {
        title: '',
        imageSrc: '/Picture23.jpg',
        content: (
          <>
            <p className="text-black tracking-tighter text-xl font-bold">Resources That Refuse to Run Out.</p>
            <p className="text-gray-500 text-xl font-bold tracking-tighter">
            We don’t throw two PDFs and call it “material”. We give you meticulously designed assignments, curated worksheets, handwritten notes, and a full arsenal of study material that’s crafted to feed toppers, not tire them. There’s a plethora of practice at your fingertips — enough to challenge, frustrate, and ultimately refine you into a ranker. At Chemisphere, we feed the hunger to win — not just the need to pass.
            </p>
          </>
        ),
      },
      {
        title: '',
        imageSrc: '/Picture24.jpg',
        content: (
          <>
            <p className="text-black tracking-tighter text-xl font-bold">🔥 Post-Syllabus Mode: Relentless Revision.</p>
            <p className="text-gray-500 text-xl font-bold tracking-tighter">
            By the time others are “almost done,” we’ve already kicked off our intensive revision phase — brutal, strategic, and custom-built to turn weaknesses into weapons. Even underperformers morph into contenders during these months. And this is where we reveal the hacks — smart-solving techniques, timing tactics, question filters, and energy-preserving tricks that come only from those who’ve walked into IITs and walked out with stories. </p>
          </>
        ),
      },
    ]}
  />,
  <ModalLayout
    key={0}
    sections={[
      {
        title: 'Tests That Mold You Into a Ranker.',
        imageSrc: '/Picture25.png',
        content: (
          <>
            <p className="text-black tracking-tighter text-xl font-bold">
            We don’t just take tests           </p>
            <p className="text-gray-500 text-xl font-bold tracking-tighter">
            We use them to turn students into unstoppable contenders. Every week, students at Chemisphere face well-crafted tests — available on both our app and web — to sharpen accuracy, build speed, and track depth of understanding. Each test is more than just a scoreboard; it’s a mirror that reflects what needs fixing and what’s flourishing.
            </p>
          </>
        ),
      },
      {
        title: '',
        imageSrc: '/Picture26.jpg',
        content: (
          <>
            <p className="text-black tracking-tighter text-xl font-bold">But here’s the real deal: every single test is dissected, discussed, and decoded in class.</p>
            <p className="text-gray-500 text-xl font-bold tracking-tighter">
            No doubt is too small. No confusion too insignificant. Our deep-dive discussions ensure that even one silly mistake becomes a stepping stone to growth. We treat every error like an opportunity—and that’s how refinement happens, test after test.</p>
          </>
        ),
      },
      {
        title: '',
        imageSrc: '/Picture27.jpg',
        content: (
          <>
            <p className="text-black tracking-tighter text-xl font-bold">At Chemisphere, we don’t create in-class competition.</p>
            <p className="text-gray-500 text-xl font-bold tracking-tighter">
            Why pit students against each other when the real battlefield has lakhs? Our focus is not on shallow rank politics within the batch — it’s on making every student beat their own yesterday. When a child conquers their inner blocks and inconsistencies, that’s when true growth begins. That’s when the rank chases them.
            </p>
          </>
        ),
      },
      {
        title: '',
        imageSrc: '/Picture28.jpg',
        content: (
          <>
            <p className="text-black tracking-tighter text-xl font-bold">🔥 And through all of it — we’re there, playing the role no one else dares to play</p>
            <p className="text-gray-500 text-xl font-bold tracking-tighter">
            the catalyst of self-actualization. The tests aren’t the end. They’re the beginning of transformation. With every score, with every analysis, we help students realize just how much power lies within them — and how to unlock it. And yes, parents have access too — because growth is best tracked together. </p>
          </>
        ),
      },
    ]}
  />,<ModalLayout
  key={0}
  sections={[
    {
      title: 'Your JEE Arsenal. Locked. Loaded. Secure.',
      imageSrc: '/Picture29.png',
      content: (
        <>
          <p className="text-black tracking-tighter text-xl font-bold">
          Everything. Everywhere. Just for You.           </p>
          <p className="text-gray-500 text-xl font-bold tracking-tighter">
          Why juggle between WhatsApp links, Google Drive folders, and chaotic notebooks? The Chemisphere app is your central command. Handwritten notes, crisp recordings, curated assignments, full-length tests, progress tracking — all packed into one, minimalist, fast, and intuitive platform. No distractions. No fluff. Just pure focus. This isn’t just convenience — it’s your competitive edge.
          </p>
        </>
      ),
    },
    {
      title: '',
      imageSrc: '/Picture30.png',
      content: (
        <>
          <p className="text-black tracking-tighter text-xl font-bold">Missed a Class? Download it. Own it</p>
          <p className="text-gray-500 text-xl font-bold tracking-tighter">
          Every live lecture is instantly recorded, indexed, and available to stream or download. Whether you’re revising after midnight or catching up during a commute, the app makes sure you never fall behind. Print the PDFs, rewind the videos, revisit the notes — as many times as you need. You control the pace. You control the pressure. We just make sure you’re never left in the dark.</p>
        </>
      ),
    },
    {
      title: '',
      imageSrc: '/Picture31.png',
      content: (
        <>
          <p className="text-black tracking-tighter text-xl font-bold">Your Prep, Your Progress — Visualized.</p>
          <p className="text-gray-500 text-xl font-bold tracking-tighter">
          Most apps just dump resources on you. We went beyond. Our analytics dashboard shows your test scores, topic-wise accuracy, consistency trends, and more — all in sharp, visual formats. And it’s not just for students — parents get a dedicated login to track progress and feel assured. Because behind every top rank is not just effort — but feedback, direction, and ruthless clarity.
          </p>
        </>
      ),
    },
    {
      title: '',
      imageSrc: '/Picture32.png',
      content: (
        <>
          <p className="text-black tracking-tighter text-xl font-bold">🔥 Locked Like Fort Knox. Secured for Toppers.</p>
          <p className="text-gray-500 text-xl font-bold tracking-tighter">
          We built the app with premium students in mind — and that means premium-level security. Your content is encrypted and piracy-proof. No random downloads. No link-leaks. Every video, note, and assignment is protected with multiple security layers so only you — the enrolled student — can access what you've earned. Your hard work deserves protection. We deliver it. </p>
        </>
      ),
    },
  ]}
/>,
    // You can follow the same pattern for the remaining modals...
  ];

  return (
    <div className="w-full relative px-4 pb-2">
      <div className="text-center text-4xl font-bold mobile:mt-24 text-chemisphere tracking-tighter" id="faq-section">
        <h4>What Makes Chemisphere Unique?</h4>
      </div>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 p-16 scrollbar-hide snap-x snap-mandatory scroll-smooth"
      >
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="min-w-[240px] h-[600px] flex-shrink-0 rounded-xl overflow-hidden shadow-lg cursor-pointer snap-start"
            onClick={() => setActiveIndex(i)}
            whileHover={{
              scale: 1.06,
              y: -10,
              boxShadow: '0px 12px 30px rgba(0, 0, 0, 0.2)',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Image
              src={img.src}
              alt={`Image ${i + 1}`}
              width={240}
              height={600}
              className="object-cover w-full h-full"
            />
          </motion.div>
        ))}
      </div>

      {/* Scroll Buttons */}
      <div className="flex justify-center gap-6 mt-6 px-4">
        <button
          onClick={() => scroll('left')}
          className="bg-gray-200 hover:bg-gray-300 rounded px-3 py-1"
        >
          ←
        </button>
        <button
          onClick={() => scroll('right')}
          className="bg-gray-200 hover:bg-gray-300 rounded px-3 py-1"
        >
          →
        </button>
      </div>

      {/* Modal Section */}
      <AnimatePresence>
        {activeIndex !== null && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setActiveIndex(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal */}
            <motion.div
              className="fixed top-1/2 left-1/2 w-[90vw] h-[90vh] bg-white rounded-xl shadow-lg z-50 p-6 overflow-y-auto"
              initial={{ opacity: 0, scale: 0.8, x: '-50%', y: '-50%' }}
              animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveIndex(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-3xl font-bold focus:outline-none"
              >
                &times;
              </button>

              {/* Modal Content */}
              <div className="min-h-full">{modals[activeIndex]}</div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

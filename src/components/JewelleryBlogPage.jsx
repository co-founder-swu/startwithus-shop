import React, { useState, useEffect } from 'react';
import { jewellerythumbnail, rings, earrings, bracelet, pendent } from '../assets';
import { useInView } from 'react-intersection-observer';
import Button from './Button';


const JewelleryBlog = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });
  const [ref5, inView5] = useInView({ triggerOnce: true });
  const [scrollProgress, setScrollProgress] = useState(0);
  const dateOfPost = "April 09, 2025"; // Replace with dynamic date if needed
  const readTime = "5 min read"; // Replace with dynamic read time if needed

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className=" relative max-w-4xl mx-auto px-4  mt-20  sm:px-6 lg:px-8 py-12 ">
      {/* Progress Strip */}
      <div className="fixed top-20 left-0 w-full h-1 bg-gray-300 z-50">
        <div
          className="h-full bg-gradient-to-r from-n-14 via-n-14/100 to-n-14/100 transition-width duration-75 ease-in-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <h1 className="text-4xl font-bold text-gradient text-center mb-4">
        Transform Your Jewellery Brand with Hyper-Realistic AI Model Photography
      </h1>

      <div className="flex justify-between items-center mb-8">
        <span className="text-gray-400">{dateOfPost}</span>
        <span className="text-gray-400">{readTime}</span>
      </div>

      <img
        src={jewellerythumbnail}
        className="h-auto mx-auto rounded-md mb-10"
        width={800}
        alt="digital presence"
      />

    <section id="introduction" className="mb-8">
        <h2 className="text-2xl font-bold mb-4 font-grotesk uppercase tracking-wider bg-gradient-to-bl from-cyan-500 to-cyan-100 bg-clip-text text-transparent">Introduction</h2>
        <p className="text-gray-300 font-poppins font-thin tracking-wide">
          In today's digital era, a well-maintained online presence is crucial for businesses aiming to attract and retain customers. A user-friendly website, active social media profiles, and consistent branding across all digital platforms collectively enhance your visibility and reach. With the majority of shopping and purchasing activities now happening online, ensuring that your business is consistently spotlighted across these platforms is vital. By achieving a strong online presence, your business not only becomes more recognizable but also demonstrates its scale and scope to potential customers. This comprehensive visibility can significantly increase your chances of drawing in new clients and expanding your market reach.
        </p>
      </section>

      {/* Table of Contents */}
      <nav className="mb-8">
        <h2 className="text-2xl font-bold mb-4 font-grotesk uppercase tracking-wider bg-gradient-to-bl from-cyan-500 to-cyan-100 bg-clip-text text-transparent">Table of Contents</h2>
        <div>
          <ul className="text-gray-400 font-thin">
            <li className='mb-2'><a href="#why-visuals-matter-in-jewellery-showcase-and-marketing" className="hover:underline">A. Why Visuals Matter in Jewellery Marketing</a></li>
            <li className='mb-2'><a href="#how-it-works-a-seamless-and-strategic-process" className="hover:underline">B. How It Works: A Seamless & Strategic Process</a></li>
            <li className='mb-2'><a href="#before-and-after-the-transformation-in-action" className="hover:underline">C. Before & After Showcase: The Transformation in Action</a></li>
            <li className='mb-2'><a href="#why-choose-us?-what-sets-us-apart" className="hover:underline">D. Why Choose Us? What Sets Us Apart</a></li>
            <li className='mb-2'><a href="#how-it-benefits-your-business-(now-and-long-term)" className="hover:underline">E. How It Benefits Your Business (Now & Long-Term)</a></li>
            <li className='mb-2'><a href="#ready-to-transform-your-jewellery-brand?" className="hover:underline">F. Ready to Transform Your Jewellery Brand?</a></li>
            <li className='mb-2'><a href="#conclusion-a-new-era-of-jewellery-visuals" className="hover:underline">G. Conclusion-A New Era of Jewellery Visuals</a></li>
          </ul>
        </div>
      </nav>

      <section id="why-visuals-matter-in-jewellery-showcase-and-marketing" className="mb-8">
        <h2 className="text-2xl font-bold mb-4 font-grotesk uppercase tracking-wider bg-gradient-to-bl from-cyan-500 to-cyan-100 bg-clip-text text-transparent">A. Why Visuals Matter in Jewellery Marketing</h2>
        <p className="text-gray-300 font-poppins font-thin tracking-wide">
          In today’s digital-first economy, your product photos are your storefront. For jewellery brands, the challenge lies in replicating the sparkle, texture, and luxury of pieces that people would otherwise touch and try on. Traditional photography is expensive, logistically intense, and often fails to keep pace with growing online demands.      
        </p>
        <p>
          That’s where AI-powered model photography changes the game. By blending artistic direction with cutting-edge artificial intelligence, we help jewellery brands present their pieces with unmatched elegance, realism, and speed — without the need for physical photoshoots.
        </p>
         <p className="text-gray-300 font-poppins font-thin tracking-wide">
          Shoppers today make decisions in milliseconds. A stunning image can instantly evoke trust, desire, and curiosity. Poor visuals, on the other hand, create doubt and hesitation. With AI, we create model photos that:        
        </p>
        <ul className="text-gray-300 font-poppins font-thin tracking-wide">
          <li>Mimic real-life lighting and skin tones.</li>
          <li>Offer dynamic, elegant poses that suit your brand’s vibe.</li>
          <li>Showcase your pieces with impeccable clarity and detail.</li>
          <li>Save cost while maintaining luxury-grade quality.</li>
        </ul>
        <p className="text-gray-300 font-poppins font-thin tracking-wide">Whether you’re an emerging brand or an established retailer, these visuals do the heavy lifting in driving conversions, building trust, and enhancing perceived value.</p>

      </section>

      <section id="how-it-works-a-seamless-and-strategic-processs" className="mb-8">
        <h2 className="text-2xl font-bold mb-4 font-grotesk uppercase tracking-wider bg-gradient-to-bl from-cyan-500 to-cyan-100 bg-clip-text text-transparent">B. How It Works: A Seamless & Strategic Process</h2>
        <p className="text-gray-300 font-poppins font-thin tracking-wide">
          We’ve reimagined the product photography process to be <b>easy, fast, and remarkably effective:</b>
        </p>
        <div className="flex justify-center items-left min-h-[35rem] text-white pt-5"  id="roadmap">
      <div>
        <ol className="relative border-l border-gray-700">
          <li className={`mb-8 ml-6 ${inView1 ? 'animate-fadeInRight' : 'opacity-0'}`} ref={ref1}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-n-14 rounded-full -left-9 ring-8 ring-black">
              <svg aria-hidden="true" className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-18a10 10 0 110 20A10 10 0 0110 0z" /></svg>
            </span>
            <div className={`${inView1 ? 'animate-textFadeInRight' : 'opacity-0'}`}>
              <h3 className="flex items-center mb-1 text-lg font-semibold">Step 1: Submit Your Product Images</h3>
              <p className="text-base font-normal text-gray-400">Send us clean shots of your jewellery from multiple angles — even basic lighting is fine. We’ll guide you on best practices if needed.</p>
            </div>
          </li>
          <li className={`mb-8 ml-6 ${inView2 ? 'animate-fadeInRight' : 'opacity-0'}`} ref={ref2}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-n-14 rounded-full -left-9 ring-8 ring-black">
              <svg aria-hidden="true" className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-18a10 10 0 110 20A10 10 0 0110 0z" /></svg>
            </span>
            <div className={`${inView2 ? 'animate-textFadeInRight' : 'opacity-0'}`}>
              <h3 className="flex items-center mb-1 text-lg font-semibold">Step 2: Kickoff Call to Understand Your Brand</h3>
              <p className="text-base font-normal text-gray-400">We align on your style preferences, customer persona, ideal skin tone, and mood board references. You can be as involved or hands-off as you want.
</p>
            </div>
          </li>
          <li className={`mb-8 ml-6 ${inView3 ? 'animate-fadeInLeft' : 'opacity-0'}`} ref={ref3}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-n-14 rounded-full -left-9 ring-8 ring-black">
              <svg aria-hidden="true" className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-18a10 10 0 110 20A10 10 0 0110 0z" /></svg>
            </span>
            <div className={`${inView3 ? 'animate-textFadeInLeft' : 'opacity-0'}`}>
              <h3 className="flex items-center mb-1 text-lg font-semibold">Step 3: AI Model Integration Begins</h3>
              <p className="text-base font-normal text-gray-400">Our team uses advanced AI tools to blend your products with carefully curated model visuals. Each image is manually reviewed for accuracy and elegance.</p>
            </div>
          </li>
          <li className={`mb-8 ml-6 ${inView4 ? 'animate-fadeInRight' : 'opacity-0'}`} ref={ref4}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-n-14 rounded-full -left-9 ring-8 ring-black">
              <svg aria-hidden="true" className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-18a10 10 0 110 20A10 10 0 0110 0z" /></svg>
            </span>
            <div className={`${inView4 ? 'animate-textFadeInRight' : 'opacity-0'}`}>
              <h3 className="flex items-center mb-1 text-lg font-semibold">Step 4: Receive Your Final 4K Images</h3>
              <p className="text-base font-normal text-gray-400">In just 3–4 days, you’ll receive beautifully retouched, ready-to-use model photos. Files come in multiple formats (JPEG, PNG, WebP) optimized for your store, ads, and socials.</p>
            </div>
          </li>
          <li className={`mb-8 ml-6 ${inView5 ? 'animate-fadeInRight' : 'opacity-0'}`} ref={ref5}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-n-14 rounded-full -left-9 ring-8 ring-black">
              <svg aria-hidden="true" className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-18a10 10 0 110 20A10 10 0 0110 0z" /></svg>
            </span>
            <div className={`${inView5 ? 'animate-textFadeInRight' : 'opacity-0'}`}>
              <h3 className="flex items-center mb-1 text-lg font-semibold">Step 5: Easy Handover & Future Flexibility</h3>
              <p className="text-base font-normal text-gray-400">We send everything with a neat handover folder — no messy file hunts. Need edits? We’ve got you. Want new campaigns later? We can plug in anytime.</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
      </section>

      <section id="#before-and-after-the-transformation-in-action" className="mb-8">
        <h2 className="text-2xl font-bold mb-4 font-grotesk uppercase tracking-wider bg-gradient-to-bl from-cyan-500 to-cyan-100 bg-clip-text text-transparent">C. Before & After Showcase: The Transformation in Action</h2>
        <hr></hr>
        <h3 className="text-xl font-bold mb-4 font-grotesk uppercase tracking-wider bg-gradient-to-bl from-cyan-500 to-cyan-100 bg-clip-text text-transparent mt-4">Rings</h3>
        <img
        src={rings}
        className="mx-auto m-10"
        width={800}
        height={200}
        alt="rings"
      />
        <p className="text-gray-300 font-poppins font-thin tracking-wide"><b>Before: </b>Flat-lay on white background</p>
        <p className="text-gray-300 font-poppins font-thin tracking-wide"><b>After</b> Elegant hand pose with perfect lighting, natural shadows, and a soft liveliness that brings the product to life.</p>
        <h3 className="text-xl font-bold mb-4 font-grotesk uppercase tracking-wider bg-gradient-to-bl from-cyan-500 to-cyan-100 bg-clip-text text-transparent mt-4">Earrings</h3>
        <img
        src={earrings}
        className="mx-auto m-10"
        width={800}
        height={200}
        alt="earrings"
      />
        <p className="text-gray-300 font-poppins font-thin tracking-wide"><b>Before: </b>Flat-lay on white background</p>
        <p className="text-gray-300 font-poppins font-thin tracking-wide"><b>After</b> Worn by a realistic AI model with close-up angles that showcase shine, movement, and ear contouring.</p>
        <h3 className="text-xl font-bold mb-4 font-grotesk uppercase tracking-wider bg-gradient-to-bl from-cyan-500 to-cyan-100 bg-clip-text text-transparent mt-4">Bracelet</h3>
        <img
        src={bracelet}
        className="mx-auto m-10"
        width={800}
        height={200}
        alt="bracelet"
      />
        <p className="text-gray-300 font-poppins font-thin tracking-wide"><b>Before: </b>Bracelet placed on a Black surface</p>
        <p className="text-gray-300 font-poppins font-thin tracking-wide"><b>After: </b>Styled on wrist with subtle arm movement, giving it depth and luxury appeal.</p>
        <h3 className="text-xl font-bold mb-4 font-grotesk uppercase tracking-wider bg-gradient-to-bl from-cyan-500 to-cyan-100 bg-clip-text text-transparent mt-4">Necklace</h3>
        <img
        src={pendent}
        className="mx-auto m-10"
        width={800}
        height={200}
        alt="pendent"
      />
        <p className="text-gray-300 font-poppins font-thin tracking-wide"><b>Before: </b>Necklace in hand</p>
        <p className="text-gray-300 font-poppins font-thin tracking-wide"><b>After: </b>Styled on neckline with precise detail, warm lighting, and natural skin tone — it feels real, desirable, and aspirational.</p>
      </section>

      <section id="#why-choose-us?-what-sets-us-apart" className="mb-8">
        <h2 className="text-2xl font-bold mb-4 font-grotesk uppercase tracking-wider bg-gradient-to-bl from-cyan-500 to-cyan-100 bg-clip-text text-transparent">D. Why Choose Us? What Sets Us Apart</h2>
        <ul className="text-gray-300 font-poppins font-thin tracking-wide">
            <li><b>Hyper-realistic AI Model Photography:</b> Every image feels genuine and emotionally engaging — not artificial.</li>
            <li><b>Crystal-Clear Quality:</b> Delivered in 4K resolution with perfect detailing, shadows, and lighting.</li>
            <li><b>Multiple File Versions:</b> Optimized for website, print, ads, Instagram — we provide formats that fit your world.</li>
            <li><b>Fast Turnaround:</b> Get everything in 3–4 days. Need it faster? We accommodate rush requests.</li>
            <li><b>Affordable & Scalable:</b> No studios, no crew, no hiring. Our pricing is cost-effective and scalable for all business sizes.</li>
            <li><b>End-to-End Support:</b> Easily request seasonal updates, new model variations, or social edits — we’re just an email away.</li>
          </ul>
      </section>

      <section id="#how-it-benefits-your-business-(now-and-long-term)" className="mb-8">
        <h2 className="text-2xl font-bold mb-4 font-grotesk uppercase tracking-wider bg-gradient-to-bl from-cyan-500 to-cyan-100 bg-clip-text text-transparent">E. How It Benefits Your Business (Now & Long-Term)</h2>
          <ul className="text-gray-300 font-poppins font-thin tracking-wide">
            <li><b>Increased Trust & Conversions:</b> Realistic, professional images increase buyer confidence.</li>
            <li><b>Reduced Photo Costs:</b> Save thousands on shoots, models, stylists, and retouching.</li>
            <li><b>Speed to Market:</b> Launch new campaigns in days, not weeks.</li>
            <li><b>Consistency Across Channels:</b> Maintain a unified, high-end brand look across website, ads, and socials.</li>
            <li><b>Future-Proofed Visuals:</b> Easily request seasonal updates, new model variations, or social edits — we’re just an email away.</li>
          </ul>
        <blockquote className="text-gray-300 font-poppins font-thin tracking-wide">
          Let your jewellery speak — with elegance, realism, and clarity.
        </blockquote>
      </section>

      <section id="#ready-to-transform-your-jewellery-brand?" className="mb-8">
        <h2 className="text-2xl font-bold mb-4 font-grotesk uppercase tracking-wider bg-gradient-to-bl from-cyan-500 to-cyan-100 bg-clip-text text-transparent">F. Ready to Transform Your Jewellery Brand?</h2>
        <p className="text-gray-300 font-poppins font-thin tracking-wide">
          In a market driven by perception, your imagery does more than just showcase products — it defines your brand. With our AI-powered model photography, you’re not just upgrading pictures; you’re investing in long-term brand value, customer trust, and higher ROI.
        </p>
        <p className="text-gray-300 font-poppins font-thin tracking-wide">
          From seamless onboarding to crystal-clear 4K assets, we take care of everything — so you can focus on what matters: growing your business. Whether you’re launching a new collection, revamping your website, or scaling your social presence, our visuals will give you the edge that captivates and converts.
        </p>
        <p className="text-gray-300 font-poppins font-thin tracking-wide">
          Your jewellery deserves more than a plain product shot. It deserves to shine in its full glory — with elegance, emotion, and excellence.
        </p>
        <Button
            className= "mt-10 "
            href="https://startwithus.notion.site/1d023ad8484f80e0ac4bd9e1b9376db7?pvs=105" white
          >
            Get It Now
        </Button>
      </section>
    </div>
  );
};

export default JewelleryBlog;

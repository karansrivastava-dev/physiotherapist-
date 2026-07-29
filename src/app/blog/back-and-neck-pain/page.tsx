import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogPost() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 bg-white">
      <article className="max-w-3xl mx-auto px-6 lg:px-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-brand-primary font-semibold mb-8 hover:opacity-80 transition-opacity">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
        <FadeIn>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-brand-secondary leading-tight mb-6">
            Back & Neck Pain: Why It Happens and How Physiotherapy Can Help You Live Pain-Free
          </h1>
          <div className="flex items-center gap-4 text-brand-grey text-sm font-medium mb-12 border-b border-gray-100 pb-8">
            <span>29 July 2026</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1} className="prose prose-lg max-w-none text-brand-grey space-y-6">
          <p className="text-xl font-medium text-brand-secondary italic">
            "It's just a little pain..." — Until It Starts Controlling Your Life
          </p>
          
          <p>I've heard this sentence thousands of times.</p>
          
          <p>Patients often tell me, "I thought the pain would go away on its own." Unfortunately, many people ignore back or neck pain until it begins affecting their sleep, work, driving, or even simple daily activities like bending down or looking over their shoulder.</p>
          
          <p>After treating patients for over 15 years, I can confidently say one thing:</p>
          
          <p className="font-bold text-brand-secondary">Pain is your body's way of asking for attention—not something you should simply learn to live with.</p>
          
          <p>The good news? Most cases of back and neck pain can be treated successfully without surgery when diagnosed and managed early.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">Understanding Back & Neck Pain</h2>
          
          <p>Your spine is one of the most important structures in your body. It supports your weight, protects your spinal cord, and allows you to move freely.</p>
          
          <p>The muscles, joints, ligaments, and discs surrounding your spine work together every day. When one of these structures becomes irritated, strained, or injured, pain develops.</p>
          
          <p>The pain may be mild in the beginning but can gradually become severe if left untreated.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">Common Causes of Back & Neck Pain</h2>
          
          <p>Modern lifestyles have made these problems more common than ever. Some of the most frequent causes include:</p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>Sitting for long hours without proper posture</li>
            <li>Working on laptops or mobile phones continuously</li>
            <li>Poor workstation ergonomics</li>
            <li>Lifting heavy objects incorrectly</li>
            <li>Lack of physical activity</li>
            <li>Muscle weakness</li>
            <li>Stress and muscle tension</li>
            <li>Sports injuries</li>
            <li>Age-related degeneration</li>
            <li>Disc problems such as slipped or herniated discs</li>
          </ul>
          
          <p>Sometimes the pain develops suddenly after an injury, while in many people it builds up slowly over months.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">Common Symptoms</h2>
          
          <p>Back and neck pain doesn't always feel the same for everyone. You may experience:</p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>Dull aching pain</li>
            <li>Sharp or stabbing pain</li>
            <li>Muscle tightness</li>
            <li>Neck stiffness</li>
            <li>Difficulty turning your head</li>
            <li>Pain while sitting for long periods</li>
            <li>Pain that increases after standing</li>
            <li>Headaches starting from the neck</li>
            <li>Shoulder pain</li>
            <li>Pain radiating into the arms or legs</li>
            <li>Tingling or numbness</li>
            <li>Muscle weakness</li>
          </ul>
          
          <p className="font-bold">These symptoms should never be ignored, especially if they continue for more than a few days.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">Why Does the Pain Keep Coming Back?</h2>
          
          <p>This is probably the most common question patients ask me. The answer is simple.</p>
          
          <p>Painkillers often reduce the pain temporarily, but they don't fix the actual problem. If weak muscles, poor posture, joint stiffness, or incorrect movement patterns remain untreated, the pain usually returns.</p>
          
          <p>Physiotherapy focuses on identifying and treating the root cause instead of simply masking the symptoms.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">How Physiotherapy Helps</h2>
          
          <p>Every patient is different. That's why effective physiotherapy begins with a detailed assessment rather than using the same exercises for everyone.</p>
          
          <p>Your treatment plan may include:</p>
          
          <h3 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">Comprehensive Physical Assessment</h3>
          <p>We carefully evaluate: Posture, Spine mobility, Muscle strength, Joint movement, Flexibility, Balance, Functional activities, and Pain patterns. Understanding the real cause allows us to create the most effective treatment plan.</p>

          <h3 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">Manual Therapy</h3>
          <p>Hands-on techniques can help: Reduce muscle tension, Improve joint mobility, Relieve stiffness, Improve circulation, and Decrease pain naturally. Many patients notice immediate relief after manual therapy sessions.</p>

          <h3 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">Therapeutic Exercises</h3>
          <p>Exercise is one of the most powerful long-term treatments. Your program may focus on: Core strengthening, Neck stabilization, Back strengthening, Flexibility training, Stretching tight muscles, Improving posture, and Functional movement training.</p>
          
          <h3 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">Posture Correction</h3>
          <p>Poor posture places unnecessary stress on your spine. Small changes in the way you sit, stand, walk, or work can significantly reduce pain and prevent future problems.</p>

          <h3 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">Education & Lifestyle Advice</h3>
          <p>Treatment doesn't stop in the clinic. We also teach you: Safe lifting techniques, Proper sleeping positions, Workplace ergonomics, Home exercise routines, and Daily habits that protect your spine. The goal is not just pain relief—it is preventing the pain from returning.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">Home Tips to Reduce Back & Neck Pain</h2>
          
          <ul className="list-none space-y-4">
            <li><strong>Sit Correctly:</strong> Keep your back supported and your feet flat on the floor. Avoid slouching.</li>
            <li><strong>Take Regular Breaks:</strong> If you work at a desk, stand up and move every 30–45 minutes. Even a short walk can reduce muscle stiffness.</li>
            <li><strong>Stay Active:</strong> Complete bed rest is rarely recommended. Gentle movement usually helps recovery.</li>
            <li><strong>Strengthen Your Core:</strong> Strong abdominal and back muscles provide better support to your spine.</li>
            <li><strong>Avoid Looking Down at Your Phone for Long Periods:</strong> This habit places extra strain on your neck and upper back. Hold your phone closer to eye level whenever possible.</li>
            <li><strong>Sleep Smart:</strong> Choose a supportive mattress and pillow. Sleeping positions matter more than many people realize.</li>
          </ul>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">When Should You See a Physiotherapist?</h2>
          
          <p>Don't wait until the pain becomes unbearable. Seek professional assessment if:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Pain lasts more than one week</li>
            <li>Pain keeps returning</li>
            <li>Pain spreads into your arms or legs</li>
            <li>You feel numbness or tingling</li>
            <li>Daily activities become difficult</li>
            <li>Sitting or walking becomes painful</li>
            <li>You have reduced movement in your neck or back</li>
          </ul>
          <p>Early treatment often leads to faster recovery.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">Can Back & Neck Pain Be Prevented?</h2>
          
          <p>Absolutely. Most spine problems are preventable with the right habits. Regular exercise, maintaining a healthy weight, good posture, proper lifting techniques, and early physiotherapy intervention can greatly reduce the risk of chronic pain. Taking care of your spine today is an investment in your future health.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">A Message From Your Physiotherapist</h2>
          
          <p>After treating patients for many years, I've learned that every person wants the same thing—to return to a normal, active, pain-free life.</p>
          <p>The encouraging news is that most people improve significantly with the right assessment, personalized treatment, and consistent exercises. You don't have to accept pain as a part of daily life. The sooner you seek help, the easier it is to recover.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">Frequently Asked Questions (FAQs)</h2>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-brand-secondary text-lg">Is physiotherapy effective for back and neck pain?</h4>
              <p>Yes. Physiotherapy is one of the most effective non-surgical treatments for many types of back and neck pain. It focuses on reducing pain, improving movement, and preventing recurrence.</p>
            </div>
            <div>
              <h4 className="font-bold text-brand-secondary text-lg">How many physiotherapy sessions will I need?</h4>
              <p>The number of sessions depends on your condition, severity, overall health, and treatment goals. Some patients improve within a few visits, while chronic conditions may require a longer rehabilitation plan.</p>
            </div>
            <div>
              <h4 className="font-bold text-brand-secondary text-lg">Should I rest if I have back pain?</h4>
              <p>Complete bed rest is usually not recommended. Gentle movement and guided exercises often help recovery better than prolonged inactivity. Your physiotherapist will advise what is appropriate for your condition.</p>
            </div>
            <div>
              <h4 className="font-bold text-brand-secondary text-lg">Can poor posture really cause neck and back pain?</h4>
              <p>Yes. Poor posture increases stress on the muscles and joints of the spine. Over time, this can lead to pain, stiffness, headaches, and reduced mobility.</p>
            </div>
            <div>
              <h4 className="font-bold text-brand-secondary text-lg">Will I need surgery?</h4>
              <p>Most cases of back and neck pain improve with conservative treatment such as physiotherapy. Surgery is generally considered only in specific conditions after medical evaluation.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">Final Thoughts</h2>
          
          <p>Your spine supports you every single day. Taking care of it should never be an afterthought. If you're experiencing persistent back or neck pain, don't wait for it to worsen. Early physiotherapy can help relieve pain, restore movement, and get you back to doing the things you enjoy.</p>
          
          <p className="font-bold text-brand-secondary text-xl mt-8">A pain-free life is possible—and we're here to help you achieve it.</p>
        </FadeIn>
      </article>
    </div>
  );
}

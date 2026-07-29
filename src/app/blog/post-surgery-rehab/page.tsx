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
            Post-Surgery Rehabilitation: The Key to a Faster, Safer, and Stronger Recovery
          </h1>
          <div className="flex items-center gap-4 text-brand-grey text-sm font-medium mb-12 border-b border-gray-100 pb-8">
            <span>29 July 2026</span>
            <span>•</span>
            <span>9 min read</span>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1} className="prose prose-lg max-w-none text-brand-grey space-y-6">
          <p className="text-xl font-medium text-brand-secondary italic">
            "Surgery Is Only the First Step—Recovery Is Where Healing Truly Begins"
          </p>
          
          <p>Many patients believe that once the surgery is over, the difficult part is behind them.</p>
          
          <p>After more than 15 years of working with post-surgical patients, I can tell you that surgery repairs the problem, but rehabilitation restores your life.</p>
          
          <p>Whether you've had a knee replacement, ACL reconstruction, shoulder surgery, spinal surgery, or fracture fixation, the success of your operation depends greatly on what happens afterward.</p>
          
          <p>Without proper rehabilitation, stiffness, weakness, pain, and reduced mobility can delay recovery and limit your long-term results.</p>
          
          <p className="font-bold text-brand-secondary">The good news is that with a structured physiotherapy program, most patients regain their strength, confidence, and independence safely and effectively.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">What Is Post-Surgery Rehabilitation?</h2>
          
          <p>Post-surgery rehabilitation is a personalized physiotherapy program designed to help your body heal after an operation.</p>
          
          <p>The goal is not only to reduce pain but also to restore movement, rebuild strength, improve balance, and help you return to your normal daily activities as safely as possible.</p>
          
          <p>Every rehabilitation program is tailored to your surgery, your health, your lifestyle, and your personal goals.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">Why Is Rehabilitation So Important After Surgery?</h2>
          
          <p>After surgery, your body naturally protects the operated area. As a result, you may experience:</p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>Pain</li>
            <li>Swelling</li>
            <li>Joint stiffness</li>
            <li>Muscle weakness</li>
            <li>Limited movement</li>
            <li>Difficulty walking</li>
            <li>Reduced balance</li>
            <li>Loss of confidence during movement</li>
          </ul>
          
          <p>If these issues are not addressed early and appropriately, recovery can become slower and more challenging.</p>
          
          <p>Physiotherapy helps your body recover in the right way while reducing the risk of future complications.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">Surgeries We Commonly Provide Rehabilitation For</h2>
          
          <p>Over the years, I've helped patients recover after many different types of orthopedic and musculoskeletal surgeries, including:</p>
          
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc pl-6 mb-6">
            <li>Total Knee Replacement (TKR)</li>
            <li>Total Hip Replacement (THR)</li>
            <li>ACL Reconstruction</li>
            <li>Meniscus Repair</li>
            <li>Shoulder Rotator Cuff Surgery</li>
            <li>Shoulder Replacement</li>
            <li>Spine Surgery</li>
            <li>Fracture Fixation</li>
            <li>Ligament Repair</li>
            <li>Tendon Repair</li>
            <li>Arthroscopic Knee Surgery</li>
            <li>Arthroscopic Shoulder Surgery</li>
            <li>Ankle Surgery</li>
            <li>Wrist and Hand Surgery</li>
            <li>Foot Surgery</li>
          </ul>
          
          <p>Every surgery requires a different rehabilitation approach, which is why individualized treatment is so important.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">Common Challenges After Surgery</h2>
          
          <p>Every patient heals differently, but many experience similar difficulties during the early stages of recovery. These may include:</p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>Pain while moving</li>
            <li>Swelling around the operated area</li>
            <li>Difficulty bending or straightening a joint</li>
            <li>Weak muscles</li>
            <li>Difficulty climbing stairs</li>
            <li>Trouble walking without support</li>
            <li>Poor balance</li>
            <li>Fear of movement</li>
            <li>Fatigue</li>
            <li>Reduced flexibility</li>
          </ul>
          
          <p className="font-bold text-brand-secondary">These challenges are normal—but they should improve gradually with the right rehabilitation plan.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">Our Approach to Post-Surgery Rehabilitation</h2>
          
          <p>No two patients recover in exactly the same way. Your rehabilitation begins with a detailed assessment to understand your surgery, current condition, and recovery goals.</p>
          
          <h3 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">Comprehensive Assessment</h3>
          <p>Before starting treatment, we carefully evaluate: Surgical procedure performed, Pain level, Swelling, Wound healing status (as appropriate), Joint mobility, Muscle strength, Walking pattern, Balance, Functional abilities, and Daily activity limitations.</p>
          <p>This allows us to create a safe, personalized rehabilitation program.</p>

          <h3 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">Pain and Swelling Management</h3>
          <p>The first stage of rehabilitation focuses on helping you feel more comfortable. Treatment may include: Gentle movement exercises, Manual therapy (when appropriate), Positioning advice, Ice or heat therapy, Compression techniques, and Elevation guidance.</p>
          <p>Reducing pain and swelling makes movement easier and promotes healthy healing.</p>

          <h3 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">Restoring Joint Mobility</h3>
          <p>After surgery, joints often become stiff due to swelling and reduced activity. Gentle mobility exercises help restore normal movement while protecting the healing tissues.</p>
          <p>Improving range of motion early can make everyday activities much easier.</p>

          <h3 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">Strengthening Weak Muscles</h3>
          <p>Muscle weakness develops quickly after surgery. Your rehabilitation program may include: Muscle activation exercises, Progressive strengthening, Resistance training, Core stability exercises, and Functional strengthening.</p>
          <p>As your recovery progresses, exercises become more challenging to match your improving abilities.</p>

          <h3 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">Balance and Walking Training</h3>
          <p>Many patients lose confidence while walking after surgery. We help restore safe movement through: Balance exercises, Walking retraining, Stair climbing practice, Gait correction, and Weight-bearing progression.</p>
          <p>Our goal is to help you move safely and independently.</p>

          <h3 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">Functional Rehabilitation</h3>
          <p>Recovery isn't complete until you can confidently perform your daily activities. Your program may include training for: Sitting and standing, Walking longer distances, Climbing stairs, Getting in and out of bed, Driving (when medically appropriate), Returning to work, and Returning to recreational activities.</p>
          <p>For active individuals and athletes, sport-specific rehabilitation may also be included.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">Benefits of Physiotherapy After Surgery</h2>
          
          <p>A structured rehabilitation program can help: Reduce pain, Minimize swelling, Improve flexibility, Restore joint movement, Rebuild muscle strength, Improve balance, Increase confidence, Prevent stiffness, Improve walking, Reduce the risk of complications, Speed up functional recovery, and Support a safe return to normal life.</p>
          <p>The earlier rehabilitation begins—when approved by your surgeon—the better the long-term outcome is often likely to be.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">What Can You Do at Home?</h2>
          
          <p>Recovery doesn't only happen during clinic visits. Your daily habits play a major role in healing.</p>
          
          <ul className="list-none space-y-4">
            <li><strong>Follow Your Exercise Program:</strong> Perform the exercises recommended by your physiotherapist exactly as instructed. Consistency is more important than intensity.</li>
            <li><strong>Stay Active Within Your Limits:</strong> Avoid complete bed rest unless specifically advised by your surgeon. Gentle movement helps circulation and promotes recovery.</li>
            <li><strong>Protect the Surgical Area:</strong> Follow all weight-bearing and movement precautions given by your healthcare team. Trying to do too much too soon may delay healing.</li>
            <li><strong>Eat a Healthy Diet:</strong> Protein, vitamins, minerals, and adequate hydration support tissue repair and recovery.</li>
            <li><strong>Get Enough Sleep:</strong> Quality sleep allows your body to heal and rebuild damaged tissues.</li>
          </ul>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">When Should You Start Physiotherapy?</h2>
          
          <p>The timing depends on your surgery. Some patients begin physiotherapy within 24–48 hours after surgery, while others may need to wait longer based on the surgeon's recommendations.</p>
          <p>Your physiotherapist will always work closely with your medical advice and recovery guidelines to ensure treatment is safe and appropriate.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">When Should You Contact Your Healthcare Team?</h2>
          
          <p>While mild discomfort is expected after surgery, seek medical advice immediately if you experience:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Severe or worsening pain</li>
            <li>Increasing redness or warmth around the incision</li>
            <li>Persistent fever</li>
            <li>Excessive swelling</li>
            <li>Unusual drainage from the surgical site</li>
            <li>Sudden inability to move the operated limb</li>
            <li>Calf pain or significant swelling</li>
            <li>Shortness of breath or chest pain (seek emergency care immediately)</li>
          </ul>
          <p>Prompt attention to these symptoms can help prevent serious complications.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">Frequently Asked Questions (FAQs)</h2>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-brand-secondary text-lg">Is physiotherapy necessary after surgery?</h4>
              <p>In most orthopedic procedures, yes. Rehabilitation is an essential part of recovery and helps restore movement, strength, and function while reducing the risk of long-term stiffness or weakness.</p>
            </div>
            <div>
              <h4 className="font-bold text-brand-secondary text-lg">How long will rehabilitation take?</h4>
              <p>Recovery varies depending on the type of surgery, your age, overall health, and how consistently you follow your rehabilitation program. Some patients recover within a few weeks, while others may require several months.</p>
            </div>
            <div>
              <h4 className="font-bold text-brand-secondary text-lg">Will physiotherapy be painful?</h4>
              <p>Some discomfort is normal during rehabilitation, especially when regaining movement after surgery. However, treatment should not cause severe pain. Your physiotherapist will adjust the program according to your comfort and healing stage.</p>
            </div>
            <div>
              <h4 className="font-bold text-brand-secondary text-lg">Can I do my exercises at home?</h4>
              <p>Yes. Home exercises are a vital part of recovery. Your physiotherapist will teach you safe and appropriate exercises to continue between clinic visits.</p>
            </div>
            <div>
              <h4 className="font-bold text-brand-secondary text-lg">When can I return to work or sports?</h4>
              <p>The timeline depends on your surgery and the physical demands of your job or sport. Your physiotherapist and surgeon will guide you based on your progress and functional recovery.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">A Message From Your Physiotherapist</h2>
          
          <p>After helping patients recover from surgery for more than 15 years, I've learned that healing is not just about the operation—it's about the journey afterward.</p>
          <p>Every small milestone matters. The first pain-free step, the first time climbing stairs comfortably, or the moment you return to doing what you love—these are the victories that make rehabilitation worthwhile.</p>
          <p>Recovery takes patience, consistency, and the right guidance.</p>
          <p>With personalized physiotherapy, expert support, and your commitment to the process, you can regain your strength, restore your confidence, and return to an active, independent life.</p>
          
          <p className="font-bold text-brand-secondary text-xl mt-8">Your surgery was the beginning of recovery. Together, we'll help you make the most of it.</p>
        </FadeIn>
      </article>
    </div>
  );
}

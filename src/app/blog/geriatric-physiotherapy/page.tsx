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
            Geriatric Physiotherapy: Helping Seniors Stay Active, Independent, and Pain-Free
          </h1>
          <div className="flex items-center gap-4 text-brand-grey text-sm font-medium mb-12 border-b border-gray-100 pb-8">
            <span>29 July 2026</span>
            <span>•</span>
            <span>10 min read</span>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1} className="prose prose-lg max-w-none text-brand-grey space-y-6">
          <p className="text-xl font-medium text-brand-secondary italic">
            "Growing Older Doesn't Mean Giving Up Your Independence"
          </p>
          
          <p>One of the most rewarding parts of my profession has been working with older adults.</p>
          
          <p>Over the past 15 years, I've had the privilege of helping hundreds of seniors regain their confidence after illness, surgery, falls, or simply the physical changes that come with aging.</p>
          
          <p>A common concern I hear is:</p>
          
          <p className="font-bold text-brand-secondary">"Doctor, maybe this is just because I'm getting old."</p>
          
          <p>While aging naturally brings changes to our muscles, bones, and joints, constant pain, repeated falls, or losing independence should never be accepted as a normal part of aging.</p>
          
          <p>With the right physiotherapy, many older adults can improve their strength, mobility, balance, and overall quality of life.</p>
          
          <p>Our goal isn't simply to add years to life—it's to help you enjoy those years with greater comfort, confidence, and independence.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">What Is Geriatric Physiotherapy?</h2>
          
          <p>Geriatric Physiotherapy is a specialized branch of physiotherapy that focuses on improving the health, mobility, and functional independence of older adults.</p>
          
          <p>As we age, our bodies naturally become less flexible, muscles lose strength, balance may decline, and joints can become stiffer.</p>
          
          <p>Physiotherapy helps manage these changes through safe, evidence-based exercises and personalized treatment plans.</p>
          
          <p>The primary goals are to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Reduce pain</li>
            <li>Improve mobility</li>
            <li>Increase strength</li>
            <li>Improve balance</li>
            <li>Prevent falls</li>
            <li>Restore independence</li>
            <li>Enhance confidence in daily activities</li>
            <li>Improve overall quality of life</li>
          </ul>
          
          <p>Every treatment plan is tailored to the individual's health condition, lifestyle, and personal goals.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">Common Conditions We Treat</h2>
          
          <p>Older adults may experience a variety of conditions that affect movement and independence.</p>
          
          <p>We commonly help patients with:</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc pl-6 mb-6">
            <li>Osteoarthritis</li>
            <li>Knee pain</li>
            <li>Hip pain</li>
            <li>Back pain</li>
            <li>Neck pain</li>
            <li>Frozen shoulder</li>
            <li>Osteoporosis</li>
            <li>Balance disorders</li>
            <li>Walking difficulties</li>
            <li>Muscle weakness</li>
            <li>Stroke rehabilitation</li>
            <li>Parkinson's disease</li>
            <li>Joint replacement recovery</li>
            <li>Fracture rehabilitation</li>
            <li>General age-related mobility decline</li>
            <li>Chronic pain</li>
            <li>Deconditioning after prolonged illness or hospitalization</li>
          </ul>
          
          <p>Whether the issue developed gradually or followed an injury or surgery, physiotherapy can play an important role in recovery.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">Why Does Mobility Decline with Age?</h2>
          
          <p>As we grow older, several natural changes occur in the body.</p>
          
          <p>These include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Reduced muscle mass</li>
            <li>Decreased bone density</li>
            <li>Joint stiffness</li>
            <li>Reduced flexibility</li>
            <li>Slower reflexes</li>
            <li>Reduced balance</li>
            <li>Lower endurance</li>
            <li>Changes in posture</li>
          </ul>
          
          <p>These changes can make everyday activities such as walking, climbing stairs, getting out of a chair, or carrying groceries more challenging.</p>
          
          <p className="font-bold text-brand-secondary">The good news is that many of these changes can be improved with regular movement and guided physiotherapy.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">Signs You May Benefit from Geriatric Physiotherapy</h2>
          
          <p>You or your loved one may benefit from physiotherapy if you experience:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Difficulty walking</li>
            <li>Frequent falls or fear of falling</li>
            <li>Joint pain</li>
            <li>Muscle weakness</li>
            <li>Difficulty climbing stairs</li>
            <li>Reduced balance</li>
            <li>Trouble standing up from a chair</li>
            <li>Stiffness after waking up</li>
            <li>Fatigue during daily activities</li>
            <li>Reduced confidence while moving</li>
          </ul>
          <p>These challenges should not be ignored. Early intervention often leads to better long-term outcomes.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">Our Approach to Geriatric Physiotherapy</h2>
          
          <p>Every senior has different goals.</p>
          <p>Some want to walk independently again. Others want to return to gardening, visit friends, play with grandchildren, or simply move around the house without fear of falling.</p>
          <p>That's why every treatment begins with a comprehensive assessment.</p>
          
          <h3 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">Comprehensive Assessment</h3>
          <p>Before creating a treatment plan, we evaluate: Medical history, Pain levels, Joint movement, Muscle strength, Balance, Walking pattern, Functional abilities, Flexibility, Fall risk, and Daily activity limitations.</p>
          <p>This assessment helps us understand not only your physical condition but also the activities that matter most to you.</p>

          <h3 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">Pain Management</h3>
          <p>Pain often discourages movement, which can lead to further weakness and stiffness.</p>
          <p>Treatment may include: Manual therapy, Gentle joint mobilization, Soft tissue techniques, Therapeutic exercises, Heat or cold therapy (when appropriate), and Movement education.</p>
          <p>Reducing pain allows patients to move more comfortably and confidently.</p>

          <h3 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">Strength Training</h3>
          <p>Muscle strength naturally decreases with age, but it can often be improved at any stage of life.</p>
          <p>Your program may include: Leg strengthening, Core stability exercises, Upper body strengthening, Functional resistance exercises, and Sit-to-stand practice.</p>
          <p>Stronger muscles help support joints, improve mobility, and reduce the risk of falls.</p>

          <h3 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">Balance and Fall Prevention</h3>
          <p>Falls are one of the most common causes of injury among older adults. Improving balance is therefore a major focus of geriatric physiotherapy.</p>
          <p>Treatment may include: Balance exercises, Walking practice, Coordination training, Step training, Weight-shifting exercises, and Confidence-building activities.</p>
          <p>Preventing a fall is always better than treating one.</p>

          <h3 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">Walking and Mobility Training</h3>
          <p>Walking is essential for independence. We help patients improve: Walking speed, Walking confidence, Step length, Endurance, Use of walking aids (if needed), and Stair climbing.</p>
          <p>Small improvements in walking often make a big difference in everyday life.</p>

          <h3 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">Functional Independence Training</h3>
          <p>Recovery is about more than exercise. We help patients perform daily activities more safely, including: Getting in and out of bed, Standing from a chair, Using the bathroom safely, Dressing independently, Reaching overhead, Carrying light household items, and Climbing stairs.</p>
          <p>Our goal is to help you remain as independent as possible.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">Benefits of Geriatric Physiotherapy</h2>
          
          <p>With a personalized rehabilitation program, many seniors experience:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Reduced pain</li>
            <li>Improved balance</li>
            <li>Increased muscle strength</li>
            <li>Better posture</li>
            <li>Improved flexibility</li>
            <li>Easier walking</li>
            <li>Reduced risk of falls</li>
            <li>Greater confidence</li>
            <li>Increased independence</li>
            <li>Better overall quality of life</li>
          </ul>
          <p>Even small improvements can make everyday tasks easier and more enjoyable.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">Tips for Healthy Aging</h2>
          
          <p>Healthy aging is supported by consistent daily habits.</p>
          
          <ul className="list-none space-y-4">
            <li><strong>Keep Moving:</strong> Regular movement is one of the best ways to maintain strength and mobility. Even short walks or gentle exercises can make a difference.</li>
            <li><strong>Don't Ignore Pain:</strong> Persistent pain should always be evaluated rather than accepted as "normal aging."</li>
            <li><strong>Improve Home Safety:</strong> Reduce fall risks by: Removing loose rugs, Improving lighting, Installing grab bars where needed, and Keeping walkways free from clutter. A safer home supports greater independence.</li>
            <li><strong>Stay Hydrated and Eat Well:</strong> Proper nutrition and hydration help maintain muscle strength, bone health, and energy levels.</li>
            <li><strong>Continue Your Exercises:</strong> The best results come from consistency. A few minutes of guided exercises each day can lead to meaningful improvements over time.</li>
          </ul>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">Supporting a Loved One</h2>
          
          <p>Family members play an important role in recovery. You can help by:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Encouraging regular exercises</li>
            <li>Offering emotional support</li>
            <li>Assisting safely when needed</li>
            <li>Creating a safe home environment</li>
            <li>Celebrating progress, no matter how small</li>
          </ul>
          <p>Recovery is often easier when families work together.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">When Should You See a Physiotherapist?</h2>
          
          <p>Consider scheduling an assessment if you or a loved one experiences: Frequent falls, Difficulty walking, Persistent joint pain, Muscle weakness, Difficulty getting out of bed or a chair, Reduced balance, Recovery after surgery or hospitalization, or Reduced independence in daily activities.</p>
          <p>Early physiotherapy can help prevent minor mobility issues from becoming major limitations.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">Frequently Asked Questions (FAQs)</h2>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-brand-secondary text-lg">Is physiotherapy safe for older adults?</h4>
              <p>Yes. Geriatric physiotherapy is specifically designed to match each person's health, abilities, and medical conditions. Exercises are gentle, progressive, and tailored to individual needs.</p>
            </div>
            <div>
              <h4 className="font-bold text-brand-secondary text-lg">Can physiotherapy help prevent falls?</h4>
              <p>Yes. Balance training, strength exercises, and walking practice can significantly reduce the risk of falls and improve confidence while moving.</p>
            </div>
            <div>
              <h4 className="font-bold text-brand-secondary text-lg">Is it too late to start exercising?</h4>
              <p>No. Research consistently shows that older adults can improve strength, balance, and mobility at almost any age with appropriate guidance and regular practice.</p>
            </div>
            <div>
              <h4 className="font-bold text-brand-secondary text-lg">How often will I need physiotherapy?</h4>
              <p>The number of sessions depends on your condition and recovery goals. After your assessment, your physiotherapist will recommend a treatment schedule that suits your needs.</p>
            </div>
            <div>
              <h4 className="font-bold text-brand-secondary text-lg">Can physiotherapy be provided at home?</h4>
              <p>Yes. If travelling is difficult, many seniors benefit from home visit physiotherapy, allowing treatment to take place safely in a familiar environment.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">A Message From Your Physiotherapist</h2>
          
          <p>After more than 15 years of caring for older adults, I've learned something important:</p>
          <p className="font-bold text-brand-secondary">Growing older doesn't mean you have to stop doing the things you love.</p>
          <p>Whether your goal is walking independently, climbing stairs comfortably, visiting family, enjoying your morning walks, or simply living with less pain, physiotherapy can help you achieve it.</p>
          <p>Every step forward—no matter how small—is a step toward greater independence.</p>
          <p>With personalized treatment, expert guidance, and consistent effort, it's possible to move with more confidence, reduce pain, and enjoy a healthier, more active life.</p>
          
          <p className="font-bold text-brand-secondary text-xl mt-8">Because healthy aging isn't about avoiding movement—it's about moving well, staying independent, and living life to the fullest. We're here to support you every step of the way.</p>
        </FadeIn>
      </article>
    </div>
  );
}

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
            Home Visit Physiotherapy Services: Expert Care in the Comfort of Your Home
          </h1>
          <div className="flex items-center gap-4 text-brand-grey text-sm font-medium mb-12 border-b border-gray-100 pb-8">
            <span>29 July 2026</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1} className="prose prose-lg max-w-none text-brand-grey space-y-6">
          <p className="text-xl font-medium text-brand-secondary italic">
            "Healing Doesn't Always Have to Begin at a Clinic"
          </p>
          
          <p>Over the years, I've met many patients who wanted physiotherapy but simply couldn't travel.</p>
          
          <p>Some were recovering from surgery. Others struggled with severe pain, mobility issues, old age, or neurological conditions. Many family members would tell me,</p>
          
          <p className="font-bold text-brand-secondary">"We know physiotherapy will help, but getting them to the clinic is difficult."</p>
          
          <p>That's exactly why Home Visit Physiotherapy Services exist.</p>
          
          <p>Quality physiotherapy shouldn't be limited by distance or mobility. With professional home visits, you receive the same personalized care, treatment, and guidance—without leaving the comfort and safety of your home.</p>
          
          <p>For many patients, receiving treatment at home isn't just more convenient—it can also make rehabilitation more comfortable and effective.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">What Is Home Visit Physiotherapy?</h2>
          
          <p>Home Visit Physiotherapy is a professional physiotherapy service where a licensed physiotherapist visits your home to assess, treat, and guide your recovery.</p>
          
          <p>Instead of traveling to a clinic, your treatment comes to you.</p>
          
          <p>Your physiotherapist brings the knowledge, clinical expertise, and treatment techniques needed to help you recover safely in your own environment.</p>
          
          <p>The goal remains the same:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Reduce pain</li>
            <li>Improve mobility</li>
            <li>Restore strength</li>
            <li>Increase independence</li>
            <li>Support faster recovery</li>
            <li>Improve quality of life</li>
          </ul>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">Who Can Benefit from Home Visit Physiotherapy?</h2>
          
          <p>Home physiotherapy is suitable for many people, including:</p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>Senior citizens with limited mobility</li>
            <li>Patients recovering after surgery</li>
            <li>Individuals recovering from fractures</li>
            <li>Stroke survivors</li>
            <li>Parkinson's disease patients</li>
            <li>Patients with neurological conditions</li>
            <li>Individuals with severe back or neck pain</li>
            <li>Arthritis patients</li>
            <li>Patients with balance problems</li>
            <li>People recovering after hospitalization</li>
            <li>Individuals with sports injuries who require temporary home care</li>
            <li>Patients with chronic pain</li>
            <li>Anyone who finds travelling difficult due to pain or disability</li>
          </ul>
          
          <p>Every patient's needs are different, and home-based care allows treatment to be tailored to those individual circumstances.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">Conditions We Commonly Treat at Home</h2>
          
          <p>Our home visit physiotherapy services include rehabilitation for:</p>
          
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc pl-6 mb-6">
            <li>Back pain</li>
            <li>Neck pain</li>
            <li>Knee pain</li>
            <li>Shoulder pain</li>
            <li>Hip pain</li>
            <li>Arthritis</li>
            <li>Joint stiffness</li>
            <li>Sports injuries</li>
            <li>Post-surgical rehabilitation</li>
            <li>Stroke rehabilitation</li>
            <li>Balance disorders</li>
            <li>Walking difficulties</li>
            <li>Muscle weakness</li>
            <li>Frozen shoulder</li>
            <li>Sciatica</li>
            <li>Parkinson's disease</li>
            <li>Neurological rehabilitation</li>
            <li>Fall prevention programs</li>
            <li>Elderly rehabilitation</li>
          </ul>
          
          <p>Whether your condition is recent or long-standing, early physiotherapy can improve recovery and help you regain confidence in movement.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">Why Choose Physiotherapy at Home?</h2>
          
          <p>One of the biggest advantages of home visits is that treatment happens in the environment where you actually live.</p>
          
          <p>Instead of practicing movements in a clinic alone, we can help you perform everyday tasks more safely in your own surroundings.</p>
          
          <p>This allows us to identify challenges that might not be visible during a clinic visit. For example, we can advise you on:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Safe walking inside your home</li>
            <li>Stair climbing techniques</li>
            <li>Getting in and out of bed</li>
            <li>Sitting and standing safely</li>
            <li>Bathroom safety</li>
            <li>Fall prevention</li>
            <li>Home exercise routines</li>
            <li>Ergonomic improvements</li>
          </ul>
          <p>These practical recommendations often make a significant difference in everyday life.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">What Happens During a Home Visit?</h2>
          
          <p>Every home visit begins with listening to your concerns. Understanding your symptoms, medical history, daily routine, and personal goals helps us create a treatment plan that's right for you.</p>
          
          <p>During the first visit, we may assess: Pain levels, Joint mobility, Muscle strength, Balance, Walking pattern, Functional abilities, Flexibility, Posture, and Daily movement challenges.</p>
          
          <p>Based on this assessment, we develop a personalized rehabilitation plan.</p>

          <h3 className="text-2xl font-bold text-brand-secondary mt-8 mb-4">Personalized Treatment at Your Doorstep</h3>
          <p>Your treatment may include:</p>

          <h4 className="text-xl font-bold text-brand-secondary mt-6 mb-3">Manual Therapy</h4>
          <p>Hands-on techniques can help reduce pain, improve joint movement, and relieve muscle tightness.</p>

          <h4 className="text-xl font-bold text-brand-secondary mt-6 mb-3">Therapeutic Exercises</h4>
          <p>A customized exercise program is designed according to your condition and recovery stage. Exercises may focus on: Strength, Flexibility, Balance, Coordination, Endurance, and Functional movement.</p>

          <h4 className="text-xl font-bold text-brand-secondary mt-6 mb-3">Gait and Balance Training</h4>
          <p>For patients recovering from surgery, stroke, or neurological conditions, walking safely is often one of the biggest goals. We provide guided gait training to improve confidence, stability, and independence.</p>

          <h4 className="text-xl font-bold text-brand-secondary mt-6 mb-3">Post-Surgery Rehabilitation</h4>
          <p>Home visits are especially beneficial after surgeries such as: Knee replacement, Hip replacement, Spine surgery, Fracture fixation, Ligament reconstruction, and Shoulder surgery. Early rehabilitation can help reduce stiffness, restore movement, and improve overall recovery.</p>

          <h4 className="text-xl font-bold text-brand-secondary mt-6 mb-3">Elderly Rehabilitation</h4>
          <p>As we age, maintaining strength and balance becomes increasingly important. Home physiotherapy helps older adults: Stay active, Improve mobility, Reduce fall risk, Maintain independence, and Build confidence in daily activities.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">The Benefits of Home Visit Physiotherapy</h2>
          
          <p>Patients often tell us they appreciate home treatment because it allows them to focus entirely on recovery without the stress of travel. Benefits include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>One-to-one personalized care</li>
            <li>Comfortable home environment</li>
            <li>No travel or waiting time</li>
            <li>Reduced fatigue</li>
            <li>Family involvement in recovery</li>
            <li>Better understanding of your daily challenges</li>
            <li>Customized home exercise guidance</li>
            <li>Improved safety during rehabilitation</li>
            <li>Greater convenience for elderly patients</li>
            <li>Flexible appointment scheduling</li>
          </ul>
          
          <p>For many families, home visits provide reassurance that their loved one is receiving professional care without unnecessary strain.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">How Family Members Can Help</h2>
          
          <p>Recovery is often a team effort. Family support can make rehabilitation more successful. Simple ways to help include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Encouraging regular exercises</li>
            <li>Assisting safely when needed</li>
            <li>Keeping walking areas free from obstacles</li>
            <li>Providing emotional support</li>
            <li>Helping maintain a consistent routine</li>
          </ul>
          <p>Small acts of encouragement can make a big difference in a patient's confidence and motivation.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">Home Exercise: An Important Part of Recovery</h2>
          
          <p>Physiotherapy doesn't end when the session is over. We provide easy-to-follow home exercises that fit your abilities and recovery goals.</p>
          <p>Consistency is the key. Even 15–20 minutes of guided exercises each day can contribute to better strength, improved mobility, and long-term recovery.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">When Should You Consider a Home Visit?</h2>
          
          <p>Home physiotherapy may be the right choice if:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Traveling causes significant pain</li>
            <li>You recently had surgery</li>
            <li>You have difficulty walking</li>
            <li>You rely on a walker or wheelchair</li>
            <li>You are recovering from a stroke</li>
            <li>You experience frequent falls</li>
            <li>You care for an elderly family member</li>
            <li>Leaving home is physically challenging</li>
            <li>You prefer personalized treatment in a familiar environment</li>
          </ul>
          <p>Early physiotherapy often leads to better outcomes and a smoother recovery.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">Frequently Asked Questions (FAQs)</h2>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-brand-secondary text-lg">Is home physiotherapy as effective as clinic treatment?</h4>
              <p>Yes. For many conditions, home physiotherapy is highly effective. Your physiotherapist provides individualized treatment, exercises, education, and rehabilitation in your own environment. Some specialized equipment may only be available in a clinic, but many patients achieve excellent results with home-based care.</p>
            </div>
            <div>
              <h4 className="font-bold text-brand-secondary text-lg">What should I prepare before the visit?</h4>
              <p>Wear comfortable clothing, keep a small open space available for movement if possible, and have any relevant medical reports, scans, or prescriptions ready. If you use walking aids, keep them nearby.</p>
            </div>
            <div>
              <h4 className="font-bold text-brand-secondary text-lg">How long is a home physiotherapy session?</h4>
              <p>Most sessions typically last between 45 and 60 minutes, depending on your condition and treatment plan.</p>
            </div>
            <div>
              <h4 className="font-bold text-brand-secondary text-lg">Can family members be present during treatment?</h4>
              <p>Absolutely. Family members are encouraged to participate, especially when they assist with daily care or need guidance on safe mobility and home exercises.</p>
            </div>
            <div>
              <h4 className="font-bold text-brand-secondary text-lg">How many sessions will I need?</h4>
              <p>The number of sessions depends on your condition, recovery goals, and progress. After your initial assessment, your physiotherapist will recommend a personalized treatment schedule.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">A Message From Your Physiotherapist</h2>
          
          <p>After more than 15 years of treating patients, I've learned that recovery isn't just about exercises—it's about helping people regain their independence, confidence, and quality of life.</p>
          <p>Sometimes, the best place to begin that journey isn't in a clinic.</p>
          <p className="font-bold text-brand-secondary">It's at home.</p>
          <p>Whether you're recovering from surgery, managing chronic pain, helping an elderly loved one, or rebuilding strength after illness, professional physiotherapy can come to you—making recovery safer, more comfortable, and more convenient.</p>
          <p>You don't have to delay treatment because travelling is difficult.</p>
          
          <p className="font-bold text-brand-secondary text-xl mt-8">Expert physiotherapy is only a home visit away, and we're here to help you recover where you feel most comfortable—at home.</p>
        </FadeIn>
      </article>
    </div>
  );
}

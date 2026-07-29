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
            Women's Health Physiotherapy: Supporting Every Woman Through Every Stage of Life
          </h1>
          <div className="flex items-center gap-4 text-brand-grey text-sm font-medium mb-12 border-b border-gray-100 pb-8">
            <span>29 July 2026</span>
            <span>•</span>
            <span>11 min read</span>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1} className="prose prose-lg max-w-none text-brand-grey space-y-6">
          <p className="text-xl font-medium text-brand-secondary italic">
            "Your Health Changes Throughout Life—Your Care Should Too"
          </p>
          
          <p>Over the past 15 years, I've had the privilege of treating women from every stage of life—young athletes, expectant mothers, new mothers, working professionals, and women navigating menopause.</p>
          
          <p>One thing they all had in common was this:</p>
          
          <p>They often believed that pain, weakness, or bladder leakage was simply "a normal part of being a woman."</p>
          
          <p className="font-bold text-brand-secondary">It isn't.</p>
          
          <p>While a woman's body naturally goes through incredible changes during pregnancy, childbirth, aging, and hormonal transitions, you don't have to live with pain or discomfort.</p>
          
          <p>Women's Health Physiotherapy is designed to help you move comfortably, recover confidently, and enjoy an active, healthy life.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">What Is Women's Health Physiotherapy?</h2>
          
          <p>Women's Health Physiotherapy is a specialized area of physiotherapy that focuses on conditions unique to women.</p>
          
          <p>It aims to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Reduce pain</li>
            <li>Improve strength</li>
            <li>Restore movement</li>
            <li>Support pregnancy and postpartum recovery</li>
            <li>Strengthen the pelvic floor</li>
            <li>Improve bladder and bowel control</li>
            <li>Enhance overall quality of life</li>
          </ul>
          
          <p>Every woman is different, which is why treatment is always personalized to your symptoms, lifestyle, and goals.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">Conditions We Commonly Treat</h2>
          
          <p>Women's Health Physiotherapy can help with many conditions, including:</p>
          
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc pl-6 mb-6">
            <li>Pregnancy-related back pain</li>
            <li>Neck and shoulder pain during pregnancy</li>
            <li>Pelvic girdle pain</li>
            <li>Sciatica during pregnancy</li>
            <li>Postpartum recovery</li>
            <li>Diastasis Recti (abdominal muscle separation)</li>
            <li>Pelvic floor weakness</li>
            <li>Urinary leakage (stress or urge incontinence)</li>
            <li>Pelvic pain</li>
            <li>Pain during daily activities</li>
            <li>Core muscle weakness</li>
            <li>Post-Caesarean (C-section) rehabilitation</li>
            <li>Postural problems</li>
            <li>Menopause-related musculoskeletal pain</li>
            <li>Osteoporosis-related movement guidance</li>
          </ul>
          
          <p className="font-bold text-brand-secondary">Many women silently live with these problems, assuming they are unavoidable. In reality, most can be improved with the right physiotherapy approach.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">Why Women's Bodies Need Specialized Care</h2>
          
          <p>A woman's body experiences unique physical and hormonal changes throughout life.</p>
          
          <p>These changes can affect:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Muscles</li>
            <li>Ligaments</li>
            <li>Joints</li>
            <li>Core stability</li>
            <li>Pelvic floor muscles</li>
            <li>Balance</li>
            <li>Posture</li>
          </ul>
          
          <p>Pregnancy, childbirth, hormonal changes, and aging all place different demands on the body.</p>
          
          <p>Women's Health Physiotherapy addresses these changes safely and effectively.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">Pregnancy: Staying Active and Comfortable</h2>
          
          <p>Pregnancy is one of life's most beautiful journeys—but it can also bring physical challenges.</p>
          
          <p>As your baby grows, your body naturally adapts. You may experience: Lower back pain, Pelvic pain, Hip discomfort, Neck pain, Leg cramps, Swelling, Poor posture, and Balance changes.</p>
          
          <p>Physiotherapy helps you stay comfortable while preparing your body for childbirth.</p>
          
          <p>Treatment may include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Gentle strengthening exercises</li>
            <li>Pregnancy-safe stretching</li>
            <li>Posture correction</li>
            <li>Breathing techniques</li>
            <li>Pelvic floor training</li>
            <li>Walking advice</li>
            <li>Safe movement education</li>
          </ul>
          
          <p>Remaining active during pregnancy, under professional guidance, often leads to better comfort and confidence.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">Postpartum Recovery: Healing After Childbirth</h2>
          
          <p>Giving birth is an incredible achievement, but recovery takes time.</p>
          
          <p>Many new mothers focus entirely on caring for their baby while ignoring their own recovery.</p>
          
          <p>Common postpartum concerns include: Weak abdominal muscles, Back pain, Pelvic floor weakness, Difficulty lifting the baby, Neck and shoulder pain from feeding, Fatigue, Reduced core strength, and Poor posture.</p>
          
          <p>A personalized rehabilitation program helps you regain strength safely while adapting to the physical demands of motherhood.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">Understanding Pelvic Floor Health</h2>
          
          <p>The pelvic floor is a group of muscles that supports the bladder, uterus, and bowel.</p>
          
          <p>These muscles play an important role in: Bladder control, Bowel control, Core stability, Pregnancy support, and Childbirth recovery.</p>
          
          <p>When these muscles become weak or dysfunctional, women may experience: Urinary leakage, Pelvic heaviness, Reduced stability, and Difficulty controlling bladder urges.</p>
          
          <p>Pelvic floor physiotherapy focuses on improving muscle strength, coordination, and function in a safe, private, and respectful environment.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">Diastasis Recti: More Than Just a "Mummy Tummy"</h2>
          
          <p>During pregnancy, the abdominal muscles naturally stretch to accommodate the growing baby.</p>
          
          <p>Sometimes, these muscles remain separated after delivery. This condition is called Diastasis Recti.</p>
          
          <p>It may contribute to: Weak core muscles, Back pain, Poor posture, Difficulty lifting, and Reduced abdominal strength.</p>
          
          <p>With guided physiotherapy exercises, many women can improve abdominal function safely without surgery.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">Menopause and Healthy Aging</h2>
          
          <p>Hormonal changes during menopause can affect muscles, joints, and bones.</p>
          
          <p>Many women notice: Joint stiffness, Muscle weakness, Reduced balance, Back pain, Neck pain, and Reduced flexibility.</p>
          
          <p>Physiotherapy helps women stay active, improve strength, maintain bone health, and continue enjoying daily life with confidence.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">Our Approach to Women's Health Physiotherapy</h2>
          
          <p>Every treatment begins with listening.</p>
          
          <p>We understand that many women feel uncomfortable discussing pelvic health or postpartum concerns.</p>
          
          <p>Our priority is creating a supportive, respectful, and confidential environment where you feel heard and understood.</p>
          
          <p>Your assessment may include: Medical history, Pain assessment, Posture evaluation, Movement analysis, Core strength testing, Pelvic stability assessment, and Functional activity assessment.</p>
          
          <p>Based on your needs, we create a treatment plan tailored specifically for you.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">Treatment May Include</h2>
          
          <p>Depending on your condition, your rehabilitation program may involve: Manual therapy, Gentle strengthening exercises, Core stability training, Pelvic floor muscle training, Stretching exercises, Breathing techniques, Postural correction, Functional movement training, Education for daily activities, and a Home exercise program.</p>
          
          <p>Every exercise is carefully selected according to your stage of recovery and comfort level.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">Benefits of Women's Health Physiotherapy</h2>
          
          <p>Women often notice improvements in: Pain reduction, Better posture, Improved core strength, Stronger pelvic floor muscles, Better bladder control, Easier daily activities, Improved confidence, Faster postpartum recovery, Better balance, Increased mobility, and Improved quality of life.</p>
          
          <p>The goal isn't simply recovery—it's helping you enjoy every stage of life with confidence.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">Simple Tips for Everyday Health</h2>
          
          <ul className="list-none space-y-4">
            <li><strong>Stay Active:</strong> Regular gentle exercise supports muscle strength and overall health.</li>
            <li><strong>Practice Good Posture:</strong> Whether you're working, feeding your baby, or lifting your child, good posture reduces unnecessary strain.</li>
            <li><strong>Lift Safely:</strong> Bend your knees, engage your core, and avoid twisting while lifting.</li>
            <li><strong>Don't Ignore Symptoms:</strong> Bladder leakage, pelvic pain, or persistent back pain should never be dismissed as "normal." Early treatment usually leads to better outcomes.</li>
            <li><strong>Continue Your Exercises:</strong> Consistency is more important than intensity. Even a few minutes each day can support long-term recovery.</li>
          </ul>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">When Should You See a Women's Health Physiotherapist?</h2>
          
          <p>Consider booking an assessment if you experience:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Persistent back or pelvic pain</li>
            <li>Pain during or after pregnancy</li>
            <li>Difficulty returning to exercise after childbirth</li>
            <li>Urinary leakage</li>
            <li>Weak abdominal muscles</li>
            <li>Pain while lifting your baby</li>
            <li>Neck or shoulder pain related to feeding</li>
            <li>Ongoing discomfort months after delivery</li>
            <li>Difficulty performing daily activities</li>
          </ul>
          <p>Seeking help early can make recovery easier and more effective.</p>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">Frequently Asked Questions (FAQs)</h2>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-brand-secondary text-lg">Is Women's Health Physiotherapy only for pregnant women?</h4>
              <p>No. It supports women of all ages, including adolescents, mothers, and women going through menopause or recovering from surgery.</p>
            </div>
            <div>
              <h4 className="font-bold text-brand-secondary text-lg">Is pelvic floor physiotherapy safe?</h4>
              <p>Yes. Pelvic floor physiotherapy is safe, evidence-based, and always performed with your informed consent and comfort as the highest priority.</p>
            </div>
            <div>
              <h4 className="font-bold text-brand-secondary text-lg">How soon after childbirth can I begin physiotherapy?</h4>
              <p>This depends on your delivery and overall recovery. Many women can begin gentle physiotherapy soon after birth, while others may need additional healing time. Your physiotherapist will guide you based on your individual needs.</p>
            </div>
            <div>
              <h4 className="font-bold text-brand-secondary text-lg">Can physiotherapy help with urinary leakage?</h4>
              <p>In many cases, yes. Pelvic floor muscle training and individualized rehabilitation can significantly improve bladder control for many women.</p>
            </div>
            <div>
              <h4 className="font-bold text-brand-secondary text-lg">Do I need a referral to see a physiotherapist?</h4>
              <p>In many cases, you can book directly. However, if you've had recent surgery or have specific medical concerns, your physiotherapist may work alongside your doctor or obstetrician to ensure safe care.</p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-brand-secondary mt-12 mb-6">A Message From Your Physiotherapist</h2>
          
          <p>Over the years, I've learned that many women quietly put their own health last while caring for everyone else.</p>
          <p>But your health matters too.</p>
          <p>Whether you're preparing for motherhood, recovering after childbirth, managing pelvic health concerns, or simply looking to move without pain, you deserve expert care that understands the unique needs of your body.</p>
          <p>You don't have to accept discomfort as "just part of life."</p>
          <p>With the right guidance, personalized physiotherapy, and a supportive treatment plan, you can regain strength, restore confidence, and continue living the active life you deserve.</p>
          
          <p className="font-bold text-brand-secondary text-xl mt-8">Because when women feel strong, they live stronger—and we're here to support you every step of the way.</p>
        </FadeIn>
      </article>
    </div>
  );
}

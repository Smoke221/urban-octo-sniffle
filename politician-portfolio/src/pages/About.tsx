import FadeInSection, { StaggerContainer, StaggerItem } from '../components/ui/FadeInSection';
import { heroImg, hero2Img } from '../data/gallery';
import SectionTitle from '../components/ui/SectionTitle';
import { achievements } from '../data/achievements';
import { MapPin, Users, Award, GraduationCap } from 'lucide-react';

const quickFacts = [
  { label: 'Party', value: 'Indian National Congress (INC)' },
  { label: 'Current Office', value: 'Member of the Legislative Council (MLC), Karnataka' },
  { label: 'Date of Birth', value: 'January 1, 1983' },
  { label: "Father's Name", value: 'Veeranagouda Badarli' },
  { label: 'Education', value: 'B.Com, Commerce Graduate' },
  { label: 'Permanent Address', value: 'Post Badarli, Tq Sindhanur, Dist Raichur' },
  { label: 'Occupation', value: 'Agriculture & Social Service' },
  { label: 'Party Roles', value: 'State President KPYCC (2017–21) · AICC Member (2019–21) · General Secretary KPCC (2022–present)' },
  { label: 'Foundation', value: 'Basanagouda Badarli (BB) Foundation — est. 2018' },
  { label: 'Key Issues', value: 'Youth empowerment, Education reform, Agriculture & Regional development in Raichur' },
  { label: 'Community', value: 'Lingayat' },
  { label: 'Elected (MLC)', value: 'Early 2024 (Legislative Assembly quota)' },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero banner */}
      <div className="bg-navy py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)`,
          backgroundSize: '30px 30px',
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block text-xs font-semibold font-inter uppercase tracking-widest text-saffron bg-saffron/10 px-3 py-1 rounded-full mb-4">
                About
              </span>
              <h1 className="font-poppins font-black text-4xl md:text-5xl text-white leading-tight mb-4">
                Basanagouda <span className="text-saffron">Badarli</span>
              </h1>
              <p className="font-kannada text-saffron/80 text-lg mb-2">ಬಸನಗೌಡ ಬದರ್ಲಿ — ಜನರ ಮೆಚ್ಚಿನ ನಾಯಕ</p>
              <p className="text-gray-300 font-inter text-base leading-relaxed max-w-lg">
                Member of the Legislative Council (MLC), Karnataka · Indian National Congress (INC)
                · Sindhanur, Raichur District
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-56 h-72 rounded-2xl overflow-hidden shadow-2xl border-2 border-saffron/30">
                <img src={heroImg} alt="Basanagouda Badarli" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <p className="font-kannada text-white text-sm font-medium">ಬಸನಗೌಡ ಬದರ್ಲಿ</p>
                  <p className="text-white/70 text-xs font-inter">MLC · Karnataka</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <FadeInSection className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <SectionTitle tag="Biography" title="His Story" />
                <div className="space-y-5 text-gray-600 font-inter leading-relaxed">
                  <p>
                    Born on January 1, 1983, in Post Badarli village, Sindhanur Taluk, Raichur
                    District, Basanagouda Badarli (son of Veeranagouda Badarli) grew up in a farming
                    family that valued hard work, community service, and political engagement.
                    Agriculture is in his blood — he continues to be involved in farming and leads
                    cooperative societies in the region to this day.
                  </p>
                  <p>
                    His political journey began in 2006 when he joined the NSUI (National Students'
                    Union of India) as Sindhanur Taluk President. He was elevated to NSUI Raichur
                    District President by 2008, and moved into the Youth Congress in 2009 as
                    Sindhanur Taluk Youth Congress President. By 2010 he was appointed State
                    Secretary of the Karnataka Pradesh Youth Congress Committee (KPYCC), and from
                    2011 to 2017 he served as President of the Koppal Parliament Youth Congress
                    Committee — a six-year tenure that built his organisational depth across
                    Raichur and Koppal districts.
                  </p>
                  <p>
                    The peak of his Youth Congress career came in 2017 when he was elected State
                    President of the KPYCC with a record-breaking margin of over 9,000 votes. During
                    his tenure (2017–2021), he digitized the youth wing's membership and conducted
                    extensive statewide "Janadhikara" rallies. He simultaneously served as an AICC
                    (All India Congress Committee) Member from 2019 to 2021, and has been General
                    Secretary of the KPCC (Karnataka Pradesh Congress Committee) since 2022.
                  </p>
                  <p>
                    In 2018, Badarli founded the Basanagouda Badarli (BB) Foundation to
                    institutionalize his social service work. The foundation has organized mass
                    marriage ceremonies (51 couples in 2023, 72 in 2025, 5001 in 2026), free health
                    camps, job fairs, and annual Dasoha Seva programs for Srishaila pilgrims. During
                    the COVID-19 pandemic, the BB Foundation distributed over 42,000 masks, gave
                    1,512 vaccines free of cost, and provided Remdesivir injections to 45 critically
                    ill patients — at no charge.
                  </p>
                  <p>
                    In early 2024, Badarli was elected to the Karnataka Legislative Council via the
                    Legislative Assembly quota. On May 3, 2026 — marking exactly one year as MLC —
                    he hosted a landmark Samuhika Madive (mass marriage) for 5001 couples in
                    Sindhanur, attended by Deputy Chief Minister D.K. Shivakumar. He has delivered
                    over ₹42 crore in development works — roads, water, health, and education — in
                    his first year in office.
                  </p>
                  <p>
                    He operates a Jana Spandana (People's Pulse) office at Kustagi Road, Basava
                    Nagar, Sindhanur (inaugurated March 26, 2023) for direct citizen grievance
                    redressal. He is also a core member of the government-appointed panel tasked
                    with reviving student union elections in Karnataka after a 37-year hiatus, and
                    the foremost voice pushing for Sindhanur to become a separate district —
                    a cause that has reached the feasibility report stage with the State Revenue
                    Department.
                  </p>
                </div>
              </div>
            </FadeInSection>

            {/* Quick Facts sidebar */}
            <FadeInSection direction="right">
              <div className="bg-surface rounded-2xl overflow-hidden border border-gray-100 sticky top-24">
                <div className="h-48 overflow-hidden">
                  <img src={hero2Img} alt="Basanagouda Badarli" className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-6">
                  <h3 className="font-poppins font-bold text-navy text-lg mb-5 pb-3 border-b border-gray-200">
                    Quick Facts
                  </h3>
                  <div className="space-y-4">
                    {quickFacts.map(fact => (
                      <div key={fact.label}>
                        <p className="text-xs font-semibold font-inter text-saffron uppercase tracking-wider mb-1">
                          {fact.label}
                        </p>
                        <p className="text-sm font-inter text-navy leading-relaxed">{fact.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Political Lineage */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <SectionTitle
              tag="Political Lineage"
              title="Roots in"
              titleHighlight="Karnataka Politics"
              subtitle="Basanagouda Badarli comes from a family with deep political roots in the Sindhanur constituency."
              center
            />
          </FadeInSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {[
              { icon: MapPin, label: 'Hometown', value: 'Post Badarli, Sindhanur, Raichur District — a farming village where his roots run deep' },
              { icon: Users, label: 'Political Family', value: 'Nephew of Hampanagouda Badarli, 5-time MLA from Sindhanur; brother Somanagouda Badarli is a RDCC Director' },
              { icon: Award, label: 'Cooperative Leadership', value: 'President of Krushi Mitra Vividoddesh Souhardha Sahakari Sangh, Sindhanur (2017–present)' },
              { icon: GraduationCap, label: 'Education & Foundation', value: 'B.Com graduate; founded BB Foundation in 2018 for mass welfare programs across Kalyana Karnataka' },
            ].map(item => (
              <StaggerItem key={item.label}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                  <div className="w-12 h-12 rounded-xl bg-saffron/10 mx-auto mb-4 flex items-center justify-center">
                    <item.icon size={22} className="text-saffron" />
                  </div>
                  <p className="font-poppins font-semibold text-navy text-sm mb-2">{item.label}</p>
                  <p className="text-gray-500 text-xs font-inter leading-relaxed">{item.value}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Full Achievements Timeline */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <SectionTitle
              tag="Achievements"
              title="Full Timeline of"
              titleHighlight="Milestones"
              subtitle="A comprehensive record of Basanagouda Badarli's impact across Karnataka."
              light
              center
            />
          </FadeInSection>

          <div className="mt-8 relative before:absolute before:left-5 md:before:left-1/2 before:top-0 before:bottom-0 before:w-0.5 before:bg-gold/30 before:-translate-x-0.5">
            {achievements.map((item, idx) => (
              <FadeInSection key={item.id} delay={idx * 0.06} className="relative mb-8">
                <div className={`flex items-start gap-6 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content card */}
                  <div className={`pl-12 md:pl-0 md:w-[calc(50%-2rem)] ${idx % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <div className="bg-navy-light border border-white/10 rounded-2xl p-5">
                      <span className="inline-block bg-saffron text-white text-xs font-bold font-inter px-3 py-1 rounded-full mb-3">
                        {item.year}
                      </span>
                      <h4 className="font-poppins font-bold text-white text-base mb-2">{item.title}</h4>
                      <p className="text-gray-400 text-sm font-inter leading-relaxed">{item.description}</p>
                      <span className="inline-block mt-2 text-xs font-inter text-saffron/70">{item.category}</span>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-3 md:left-1/2 top-4 w-4 h-4 rounded-full bg-saffron border-4 border-navy shadow-lg -translate-x-0.5" />
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

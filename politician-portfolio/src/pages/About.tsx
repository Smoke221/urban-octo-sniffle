import FadeInSection, { StaggerContainer, StaggerItem } from '../components/ui/FadeInSection';
import { heroImg, hero2Img } from '../data/gallery';
import SectionTitle from '../components/ui/SectionTitle';
import { achievements } from '../data/achievements';
import { MapPin, Users, Award, GraduationCap } from 'lucide-react';

const quickFacts = [
  { label: 'Party', value: 'Indian National Congress (INC)' },
  { label: 'Current Office', value: 'Member of the Legislative Council (MLC), Karnataka' },
  { label: 'Hometown', value: 'Sindhanur, Raichur District' },
  { label: 'Past Roles', value: 'President of Karnataka Pradesh Youth Congress Committee (KPYCC)' },
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
                    Basanagouda Badarli is a prominent leader within the Indian National Congress
                    (INC) in Karnataka, currently serving as a Member of the Legislative Council
                    (MLC). He is a rising figure in the state's political landscape, particularly
                    known for his background in youth leadership.
                  </p>
                  <p>
                    He was elected to the Karnataka Legislative Council in early 2024 via the
                    Legislative Assembly (MLAs) quota. As of 2026, he is a key member of the
                    government-appointed panel tasked with reviving student union elections in
                    Karnataka's colleges and universities — a major policy shift aimed at grooming
                    future grassroots leaders.
                  </p>
                  <p>
                    He has recently been vocal about his commitment to public service in the
                    Sindhanur region (Raichur district), often emphasizing his dedication to the
                    welfare of the local population. He operates a Jana Spandana (People's Pulse)
                    office in Sindhanur for direct citizen grievance redressal.
                  </p>
                  <p>
                    Badarli gained state-wide recognition in 2017 when he was elected as the
                    President of the Karnataka Pradesh Youth Congress Committee (KPYCC) with a
                    record-breaking margin of over 9,000 votes. During his tenure, he was credited
                    with digitizing the youth wing's membership and conducting extensive grassroots
                    "Janadhikara" rallies across the state.
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
              { icon: MapPin, label: 'Hometown', value: 'Sindhanur, Raichur District' },
              { icon: Users, label: 'Political Family', value: 'Nephew of Hampanagouda Badarli, 5-time MLA from Sindhanur' },
              { icon: Award, label: 'Community', value: 'Lingayat — a key demographic in Karnataka politics' },
              { icon: GraduationCap, label: 'Education Focus', value: 'Champion of student empowerment and digital literacy' },
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

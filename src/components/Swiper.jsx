import React from 'react';

const cardData = [
  {
    id: 1,
    step: '1/5',
    title: 'Event Registration',
    subtitle: 'Easy Event Registration, Whether Online or On-Site',
    description:
      'Registration is the first step to any successful event, and our solutions ensure it’s seamless—no matter the type or size. From customizable online forms with secure payment gateways to convenient on-site kiosks, we’ve got every detail covered.',
    image: '/images/Frame-Event-1.png',
  },
  {
    id: 2,
    step: '2/5',
    title: 'Event Ticketing',
    subtitle: 'Personalized Ticketing Solutions',
    description:
      'Start generating revenue the moment tickets go on sale. Our end-to-end ticketing solution—online and on-site— features secure payments, real-time tracking, a branded event app, and POS integration, all tailored to your audience.',
    image: '/images/FrameEventTicket-2.png',
  },
  {
    id: 3,
    step: '3/5',
    title: 'Check-In Badge',
    subtitle: 'Smart Badge - Physical & Mobile Options',
    description:
      'Simplify event check-ins and boost networking with Quick Events advanced on-site badging solutions. From custom M-Badges and physical badges to facial recognition, ensure faster entry, seamless branding, and efficient access control..',
    image: '/images/check.png',
  },
  {
    id: 4,
    step: '4/5',
    title: 'Email Automation',
    subtitle: 'Smart Badge - Physical & Mobile Options',
    description:
      'Simplify event check-ins and boost networking with Quick Events advanced on-site badging solutions. From custom M-Badges and physical badges to facial recognition, ensure faster entry, seamless branding, and efficient access control.',
    image: '/images/FreeEvent-4.png',
  },
  {
    id: 5,
    step: '5/5',
    title: 'Event Registration',
    subtitle: 'Easy Event Registration, Whether Online or On-Site',
    description: ['Customer can buy tickets', 'Agenda', 'Sponsore', 'Speakers'],
    image: '/images/Frame-Event-1.png',
  },
];

export default function Swiper() {
  return (
    <section className="w-full mt-10 scroll-smooth pb-20 xl:px-[0px] px-[16px] space-y-10">
      {cardData.map((card, index) => {
        const baseWidth = 1100;
        const reduction = index * 32;
        const cardWidth = baseWidth - reduction;

        // ✅ Conditional inline style for card with id === 5
        const isMd = typeof window !== 'undefined' && window.innerWidth >= 768;
        const cardStyle =
          card.id === 5
            ? {
                position: isMd ? 'sticky' : 'relative',
                top: isMd ? '110px' : 'auto',
                zIndex: 10,
                marginBottom: '5rem',
              }
            : {
                position: 'sticky',
                top: '110px',
                zIndex: 10,
                marginBottom: '5rem',
              };

        return (
          <div key={card.id} style={cardStyle}>
            <div
              className="card bg-gray-100 mx-auto rounded-[10px] shadow-lg h-auto sm:h-[530px] transition-all duration-300"
              style={{ width: `${cardWidth}px`, maxWidth: '95%' }}
            >
              <div className="h-full p-4 sm:p-6">
                <div className="w-fit text-sm font-semibold text-green-600 bg-gray-200 px-3 py-1 rounded shadow">
                  {card.step}
                </div>

                <div className="text-[24px] sm:text-[30px] text-green-600 tracking-wider text-center mt-4">
                  {card.title}
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-6 sm:gap-10 items-center sm:items-start">
                  <div className="w-full sm:w-[50%]">
                    <p className="text-[#0E3044] text-[22px] sm:text-[26px] font-semibold">
                      {card.subtitle}
                    </p>

                    {Array.isArray(card.description) ? (
                      <ul className="list-disc ml-5 text-[#5F6368] text-[16px] sm:text-[18px] font-normal font-sans mt-4 space-y-3">
                        {card.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-[#5F6368] text-[16px] sm:text-[18px] font-normal font-sans mt-4 text-justify">
                        {card.description}
                      </p>
                    )}
                  </div>

                  <div className="w-full sm:w-[50%]">
                    <img
                      src={card.image}
                      alt={`Image for ${card.title}`}
                      className="w-full h-auto max-h-[365px] rounded-[10px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

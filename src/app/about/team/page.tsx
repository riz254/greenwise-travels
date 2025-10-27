"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero2";

// 1️⃣ Define a Type for Team Member
type TeamMember = {
  name: string;
  title: string;
  image: string;
  bio: string;
};

const team: TeamMember[] = [
  {
    name: "KEN OBAT",
    title: "Team Leader",
    image: "/images/images/Ken 3.jpg",
    bio: `
    With over a decade of experience in travel and tourism, having worked with some of the 
    leading travel, hospitality and conservation organizations, Ken possesses a deep 
    understanding of Africa as a destination. He has also worked as an outbound travel 
    consultant and this, in conjunction with his personal travels, has exposed him to other 
    renowned and little-known destinations across the world giving him an all-round clear 
    understanding of the global travel scene.

    Ken’s love for tourism can be traced back to his childhood. Growing up in the hilly parts 
    of Nyanza in rural Kenya, he’d always marvel at the beauty of the hills and his occasional 
    travels to other parts of the country exposed him to other magnificent natural features. 
    Upon completion of his high school education, Ken enrolled for a degree in Travel and 
    Tourism Management at Moi University, which exposed him to the reality of tourism as an 
    economic activity and the challenges faced in developing the industry. 

    During his study, he developed particular interest in Sustainable Tourism and Community-Based 
    Tourism and committed to play a significant role towards making Kenya a model destination 
    in these areas. His interest in sustainability led to the establishment of Greenwise Travels 
    and later earned him a Commonwealth Scholarship at Leeds Beckett University in the United 
    Kingdom to study MSc. Responsible Tourism Management.

    Over the years, Ken has implemented successful sustainability programs both as an employee 
    and consultant. While serving in various capacities, he has been instrumental in aligning 
    organizational visions with sustainability principles, all while maintaining a strong passion 
    for entrepreneurship and meaningful change. These experiences culminated in the establishment 
    of Greenwise Travels and Niko Green Consulting.

    Ken is also an alumnus of UNLEASH INNOVATION LAB (https://unleash.org), having been part 
    of the inaugural class of 2017 held in Denmark. UNLEASH is a global innovation lab that 
    brings together top 1,000 SDG talents from around the world to co-create disruptive solutions 
    for the Sustainable Development Goals (SDGs).
  `,
  },
  {
    name: "NICKSON OTIENO",
    title: "Sustainability Advisor",
    image: "/images/images/Nickson.jpg",
    bio: `Nickson Otieno is a Licensed Architect, a sustainability expert, and an Eisenhower Fellow
                            who is
                            championing the transition to an inclusive, sustainable and resilient built environment
                            through
                            design,
                            research, training and technology. He has over 13 years of post-graduate leadership and
                            innovation
                            experience in co-designing and delivering climate-smart built environment programs ranging
                            from
                            green
                            building, clean energy, biodiversity conservation, sustainable waste and water management,
                            and
                            use of
                            digital technologies to strengthen urban governance for sustainability. He has provided
                            policy
                            advice to
                            the Government of Kenya and consulted for different organizations including UN Agencies such
                            as
                            UN
                            Environment, UN-Habitat, World Health Organization (WHO), and UNDP.
                            Nickson has also been involved in convening and participating in several
                                multidisciplinary
                                networks,
                                conferences and professional exchange programs. Nickson is a Partner at Trimax
                                Architects Ltd
                                and the
                                Founding CEO of Niko Green Ltd, the parent company of Greenwise Travels.
                                Nickson’s role at Greenwise entails designing and implementing our sustainability
                                projects and
                                advising
                                the team on sustainability matters.
                                For more information about Nickson, please visit his portfolio - https://nicksonotieno.com/`,
  },
  {
    name: "MILLICENT AKINYI",
    title: "Marketing & Administration Manager",
    image: "/images/images/Millicent 3.jpg",
    bio: `Millicent has been part of the company since inception and has played a key role in establishing
                        all the
                        requisite internal and external structures of the company. Her passion for travel and joy of
                        sharing the
                        beauty of Africa, and the rest of the world, with our guests is enough motivation to ensure that
                        everything is in place to ensure the smooth running of our programs. She strongly believes in
                        the
                        collective approach to problem solving and always encourages team work amongst individual staff
                        members and across departments.
        A graduate of Diplomacy and International Studies, ‘Madam Diplomat’ as we fondly call her is
                            the
                            glue
                            that holds the team together. Her empathy and wit in problem solving ensure that every team
                            member
                            receives the support needed to deliver on their responsibilities. Additionally, her keen
                            attention to detail
                            has granted her an additional responsibility of Quality Control and, as a standard practice,
                            no
                            piece of
                            work is presented either to clients or partners without passing through her ‘eagle-eyes’ for
                            scrutiny. On
                            the same front, she’s in charge of making critical decisions regarding partner selection
                            such as
                            accommodation and transportation partners, all of whose selection are matched with their
                            abilities to
                            meet our prescribed quality and sustainability standards.`,
  },
  {
    name: "MORTEN RISOM NIELSEN",
    title: "Partner & Scandinavia Representative",
    image: "/images/images/Morten 3.jpg",
    bio: `Morten has travelled from the hottest deserts in California to the coldest glaciers in New
                        Zealand, and
                        everything in between. Even though he is born and raised in Denmark he sees himself not as a
                        Dane, but
                        as a global citizen. He gets up every morning with the mind set of taking care of mother
                        nature and our
                        future generations, and believes that the best way to do so is by interacting with the
                        different people
                        and cultures who all shares the same home, planet Earth. Besides that, he works as a
                        full-time
                        consultant within Circular Economy, and volunteers in a Danish Youth and Environmental NGO.
                        He loves
                        sailing, running and know how to survive in the wilderness.
    Morten and Ken met first time at the UNLEASH Innovation Lab in 2017, where they worked
                            together on
                            a project that received the third prize in the SDG category of Responsible Consumption and
                            Production.
                            Their common passion for travel and sustainability formed the foundation for the
                            partnership. As the
                            company’s link with the Scandinavian market, Morten’s duty entails marketing the company’s
                            product
                            and preaching the message of sustainable travel to Africa.`,
  },
  {
    name: "CYNTHIA PATRICIA PLIEGO",
    title: "Mexico Representative",
    image: "/images/images/person_4.jpg",
    bio: `Cynthia is a nature conservation driven biologist from Mexico. She has been part of
                        AgroDer´s team
                        since 2007, a civil society consultancy and advisory firm where she has coordinated and
                        led

                        multidisciplinary groups of consultants in a nationwide scale working in national and
                        international
                        projects with NGOs, private companies, farmer organizations and government.
              She has strong experience in strategic planning, nature conservation, agriculture and
                        food production,
                        feasibility
                        studies and diagnostics, sustainable development, market intelligence and business
                        advice. Key projects
                        and initiatives: nationally, the Water Reserves National Program,
                        identification/economic valuation of
                        ecosystem services, the national REDD+ strategy; internationally, the Integrated Water
                        Management
                        Cooperation between The Netherlands and Mexico, Securing Water for Food: a grand
                        challenge for
                        development (USAID grant challenge), Water Footprint.
                        Cynthia is the coordinator for AgroDer in an IKI
                        (International Climate Initiative) 5 year-long project to build resilience in small
                        communities in
                        Dominican Republic, Guatemala, Cuba and Mexico through Ecosystem based Adaptation
                        mechanisms,
                        innovative financial instruments and Ecosystem Services economic valuation along with
                        partners from
                        each country and Germany. Cynthia is a SDG Global Talent at UNLEASH Lab held in Denmark
                        in 2017;
                        Network Capital Country Head – Mexico; Mexico City Chapter Lead in the Circle of Young
                        Intrapreneurs;
                        was a member of the Follow-up Group for the development of the Biodiversity Strategy of
                        Mexico City; a
                        member and participant of the National Forest Council; and AgroDer´s representative in
                        the Civil Society
                        Committee at COP 13 Convention on Biological Diversity, Cancun 2016.`,
  },
  {
    name: "ERIKA DRAZEN",
    title: "USA Representative",
    image: "/images/images/Erika Drazen 3.jpg",
    bio: `Erika has traveled to all six inhabited continents and hopes one day to travel to
                            Antarctica as well. She
                            loves learning about diversity on earth: in cultures, nature, and through art. She
                            travels in order to foster
                            understanding and compassion and learn how best to achieve social impact around the
                            world.
                            She also is a firm believer that tourism can be an immense force for good if done
                            sustainably and equitably.
                            Erika
                            works on issues of climate change, sustainable development, social impact,
                            environmental justice and
                            tropical forest conservation.
                             Erika and Ken met at the UNLEASH Innovation Lab 2017
                            in Denmark, where
                            they both worked on the category of Responsible Consumption and Production. She
                            currently lives in
                            Washington DC, has a Master of Business Administration (MBA) and a Master of
                            Environmental Science
                            (MESc) from Yale University, and loves spending time with her adorable dog Arnold.`,
  },
];

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <>
      <Navbar />
      <Hero />
      <section className="bg-green-50 !py-20">
        <div className="!mx-auto !px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 !mb-6">
            Meet The Team
          </h2>
          <p className="max-w-3xl !mx-auto text-gray-700 !mb-12">
            We are pleased to introduce you to the amazing team behind Greenwise
            Travels. Drawn from diverse backgrounds, their collective knowledge
            and experience deliver exceptional results for our clients.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 !px-4 md:!px-16">
            {team.map((member, index) => (
              <div
                key={index}
                className="relative cursor-pointer group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => setSelectedMember(member)}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={900}
                  height={900}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-lime-700 bg-opacity-60 opacity-0 group-hover:opacity-90 transition-all duration-300 flex flex-col justify-center items-center text-white">
                  <h3 className="text-3xl font-bold mb-1">{member.name}</h3>
                  <p className="text-xl font-medium">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedMember && (
          <div
            className="fixed inset-0 backdrop-blur-lg bg-black/30 flex justify-center items-center z-50"
            onClick={() => setSelectedMember(null)}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl w-[90%] md:w-3/4 lg:w-2/3 p-6 relative animate-fadeIn flex flex-col md:flex-row gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl"
                onClick={() => setSelectedMember(null)}
              >
                &times;
              </button>
              <Image
                src={selectedMember.image}
                alt={selectedMember.name}
                width={900}
                height={900}
                className="rounded-lg w-full md:w-1/2 object-cover !mb-4"
              />
              <div className="md:w-1/2 w-full flex flex-col justify-left">
                <h3 className="!text-4xl font-bold text-green-800 !mb-1">
                  {selectedMember.name}
                </h3>
                <p className="text-gray-600 font-bold !text-2xl !mb-3">
                  {selectedMember.title}
                </p>
                <p className="text-gray-900 !text-sm overflow-y-auto !p-3 !pb-10  leading-relaxed">
                  {selectedMember.bio}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}

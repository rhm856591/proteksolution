// utils.js
const services = [
  {
    name: "Fly Management",
    imageUrl: "https://i0.wp.com/synergyhygienepest.com/wp-content/uploads/2021/09/no-fly-ban-sign-anti-260nw-1520598752-e1630517895390.jpg?w=260&ssl=1",
    description: `
      Flies are not just annoying but also a major health hazard. They are notorious carriers of pathogens that can lead to diseases such as food poisoning, diarrhea, and other bacterial infections. These pests thrive in unsanitary conditions and can contaminate food, utensils, and surfaces.

      Our fly management services include:
      - Identification: We identify the fly species to understand the severity and sources of the infestation.
      - Treatment: We use eco-friendly insecticides, UV light traps, and fly baits that target flies effectively.
      - Prevention: We provide practical advice on waste management, proper sanitation, and sealing potential entry points.

      Our solutions are tailored to ensure a fly-free environment while prioritizing safety and sustainability.
    `,
  },
  {
    name: "Rodent Management",
    imageUrl: "https://i0.wp.com/synergyhygienepest.com/wp-content/uploads/2021/09/istockphoto-1170255863-612x612-1.jpg?w=612&ssl=1",
    description: `
      Rodents like rats and mice are a threat to both property and health. They can gnaw through walls, wires, and furniture, causing significant damage. Additionally, they carry diseases such as hantavirus and leptospirosis, posing serious health risks.

      Our rodent management services include:
      - Comprehensive Inspection: We inspect your property to locate rodent nests and entry points.
      - Targeted Solutions: Using traps, baiting systems, and rodenticides, we eliminate rodents effectively.
      - Prevention: We seal entry points, provide structural reinforcements, and offer sanitation advice to prevent re-infestations.

      With a focus on humane practices and safety, our rodent management ensures your space is rodent-free.
    `,
  },
  {
    name: "Cockroach Management",
    imageUrl: "https://i0.wp.com/synergyhygienepest.com/wp-content/uploads/2021/09/cockroach-prohibition-sign-warning-no-260nw-1464048509-e1630764192723.jpg?resize=150%2C150&ssl=1",
    description: `
      Cockroaches are among the most resilient pests, capable of surviving in extreme conditions. They spread bacteria, allergens, and diseases, contaminating food and surfaces they come into contact with.

      Our cockroach management approach involves:
      - Detection: Locating cockroach hideouts, nests, and pathways.
      - Treatment: Applying professional-grade gel baits, sprays, and traps to eradicate cockroaches and heir eggs.
      - Maintenance: Offering tips on reducing food and water sources that attract cockroaches and sealing entry points.

      We ensure long-term protection against these unhygienic pests, giving you peace of mind.
    `,
  },
  {
    name: "Termite Management",
    imageUrl: "https://i0.wp.com/synergyhygienepest.com/wp-content/uploads/2021/08/istockphoto-525058267-612x612-1-e1630432432917.jpg?resize=150%2C150&ssl=1",
    description: `
      Termites can silently destroy wooden structures, furniture, and other cellulose-based materials in your property. Known as "silent destroyers," they can cause expensive damages if left unchecked.

      Our termite management includes:
      - Advanced Detection: Using modern tools like moisture meters and infrared thermography to locate infestations.
      - Effective Treatment: Applying chemical barriers, liquid termiticides, and bait systems to eradicate termites.
      - Prevention: We offer wood treatment and regular monitoring to ensure your property remains termite-free.

      Protect your investment with our comprehensive and eco-friendly termite control solutions.
    `,
  },
  {
    name: "Lizard Management",
    imageUrl: "https://i0.wp.com/synergyhygienepest.com/wp-content/uploads/2021/09/download-1.png?w=259&ssl=1",
    description: `
      Lizards can be unsettling in homes and workplaces. Although generally harmless, their presence can cause discomfort. Our humane and eco-friendly lizard management services ensure safe removal and prevention.

      Services include:
      - Removal: Using safe traps and repellents to relocate lizards without harming them.
      - Habitat Modification: Eliminating insect populations that attract lizards and sealing entry points.
      - Prevention: Advising on practices like proper lighting and landscaping adjustments to deter lizards.

      We provide effective lizard control while respecting wildlife and maintaining eco-friendly practices.
    `,
  },
  {
    name: "Mosquito Management",
    imageUrl: "https://i0.wp.com/synergyhygienepest.com/wp-content/uploads/2021/09/mosquito-danger-sign-template-element-poster-card-emblem-logo-illustration_124137-1506.jpg?resize=370%2C370&ssl=1",
    description: `
      Mosquitoes are more than just an annoyance—they are vectors for diseases such as malaria, dengue, and Zika virus. Effective mosquito control requires a strategic approach.

      Our mosquito management includes:
      - Larval Control: Treating stagnant water with eco-friendly larvicides to prevent breeding.
      - Adult Mosquito Reduction: Using fogging and traps to target adult mosquitoes.
      - Prevention: Educating on eliminating standing water and installing mosquito screens for long-term control.

      Our solutions are safe, effective, and environmentally friendly, ensuring your space is mosquito-free.
    `,
  },
  {
    name: "Ant Management",
    imageUrl: "https://i0.wp.com/synergyhygienepest.com/wp-content/uploads/2021/08/165306539-ants-banned-on-a-white-background-red-sign-e1630432532204.jpg?resize=150%2C150&ssl=1",
    description: `
      Ants can invade homes and workplaces, contaminating food and causing structural damage. Our ant management services target the problem at its source.

      Key steps include:
      - Identification: Identifying ant species to determine the most effective treatment.
      - Treatment: Applying baits, sprays, and natural repellents to eliminate colonies.
      - Prevention: Sealing cracks and crevices, and offering advice on food storage.

      We ensure long-term ant control with eco-friendly and effective methods.
    `,
  },
  {
    name: "Bed Bug Management",
    imageUrl: "https://i0.wp.com/synergyhygienepest.com/wp-content/uploads/2021/08/no-bed-bugs-anti-bedbug-insect-prohibition-sign-pest-control-cimicidae-icon-red-crossed-circle-bloodsucker-disinfection-192381674-e1630432559327.jpg?resize=150%2C150&ssl=1",
    description: `
      Bed bugs are notorious for causing discomfort and sleepless nights. These pests feed on human blood and can multiply rapidly if not addressed.

      Our bed bug management process includes:
      - Inspection: Thoroughly examining mattresses, furniture, and cracks for signs of infestation.
      - Treatment: Using heat treatments, steam cleaning, and insecticides to eradicate bed bugs and their eggs.
      - Prevention: Advising on cleanliness practices and early detection to avoid future infestations.

      We ensure complete eradication, allowing you to sleep peacefully again.
    `,
  },
  {
    name: "Spider Management",
    imageUrl: "https://i0.wp.com/synergyhygienepest.com/wp-content/uploads/2021/08/88935557-no-bugs-vector-sign-e1630432618258.jpg?resize=150%2C150&ssl=1",
    description: `
      Spiders, while beneficial for controlling other pests, can become a nuisance indoors. Our spider management services ensure safe and effective control.

      Services include:
      - Inspection: Identifying spider species and removing webs and egg sacs.
      - Treatment: Applying non-toxic sprays and traps to reduce spider populations.
      - Prevention: Advising on landscaping practices and sealing cracks to prevent entry.

      We help create a spider-free environment with minimal impact on the ecosystem.
    `,
  },
  {
    name: "Wood Borer Management",
    imageUrl: "https://i0.wp.com/synergyhygienepest.com/wp-content/uploads/2021/09/wood-borer-control-services-500x500-1.jpg?resize=150%2C150&ssl=1",
    description: `
      Wood borers can damage furniture and wooden structures by boring holes and reducing wood integrity. 

      Our wood borer management services include:
      - Inspection: Identifying affected areas and species.
      - Treatment: Using specialized chemicals to eliminate wood borers and protect wood.
      - Prevention: Providing wood treatments and sealing solutions to avoid future infestations.

      We ensure your wooden assets remain intact and protected.
    `,
  },
  {
    name: "Weed Management",
    imageUrl: "https://i0.wp.com/synergyhygienepest.com/wp-content/uploads/2021/09/no-marijuana-sign-illustration-vector-260nw-1025315086-e1630766655971.jpg?resize=150%2C150&ssl=1",
    description: `
      Weeds compete with plants for nutrients, water, and sunlight, affecting gardens and landscapes. Our weed management ensures a healthy and beautiful outdoor environment.

      Services include:
      - Weed Control: Applying herbicides and manual removal for immediate results.
      - Prevention: Educating on mulching, proper watering, and soil health.
      - Maintenance: Regular follow-ups to prevent regrowth.

      Keep your gardens weed-free and thriving with our professional services.
    `,
  },{
    name: "Bee Management",
    imageUrl: "https://i0.wp.com/synergyhygienepest.com/wp-content/uploads/2021/09/no-bee-ban-sign-anti-260nw-1520598749-e1630766792256.jpg?resize=150%2C150&ssl=1",
    description: `
      Bees are vital for the environment, but when they nest too close to human activity, they can pose a risk. Our bee management services focus on safe and humane methods to protect both you and the bees.

      Services include:
      - Assessment: Identifying the type of bees and the location of their nests.
      - Removal and Relocation: Using professional equipment to safely remove and relocate the colony to a suitable environment.
      - Prevention: Advising on sealing entry points and managing attractants to discourage re-nesting.

      We prioritize the safety of people while ensuring the conservation of these essential pollinators.
    `,
  },
  {
    name: "Tick Management",
    imageUrl: "https://i0.wp.com/synergyhygienepest.com/wp-content/uploads/2021/09/download-1-e1630766938306.jpg?resize=150%2C150&ssl=1",
    description: `
      Ticks are dangerous pests that can transmit diseases such as Lyme disease and Rocky Mountain spotted fever. Effective tick management is essential for protecting your family and pets.

      Our tick management process includes:
      - Inspection: Identifying areas prone to ticks, such as grassy or wooded regions.
      - Treatment: Applying safe and targeted acaricides to eliminate ticks from your property.
      - Prevention: Educating on landscaping practices, pet protection, and early detection to reduce tick habitats.

      Our solutions provide long-lasting protection against ticks, ensuring a safer environment for all.
    `,
  },
  {
    name: "Microbial Management",
    imageUrl: "https://i0.wp.com/synergyhygienepest.com/wp-content/uploads/2021/08/istockphoto-1039485458-612x612-1-e1630432823961.jpg?resize=150%2C150&ssl=1",
    description: `
      Microbes such as bacteria, viruses, and fungi can pose serious health risks if left unchecked. Our microbial management services ensure a clean and safe environment by targeting harmful microorganisms.

      Services include:
      - Inspection: Identifying microbial hotspots and understanding the severity of contamination.
      - Treatment: Using eco-friendly disinfectants and advanced methods like fogging or UV-C light to eliminate pathogens.
      - Maintenance: Offering regular sanitation schedules and tips to prevent microbial regrowth.

      We help create a healthier space for homes and businesses by combating invisible threats effectively.
    `,
  },
];

export default services;


// const services = [
//   {
//     name: "Fly Management",
//     imageUrl: "https://i0.wp.com/synergyhygienepest.com/wp-content/uploads/2021/09/no-fly-ban-sign-anti-260nw-1520598752-e1630517895390.jpg?w=260&ssl=1",
//     description: "Fly infestations are not only annoying, but they also pose significant health risks. Flies are known to carry and spread various diseases, such as food poisoning, diarrhea, and even infections. Our fly management services provide effective and eco-friendly solutions to keep your environment free from flies. We use a combination of traps, repellents, and insecticides to address the root cause of the fly problem.",
//   },
//   {
//     name: "Rodent Management",
//     imageUrl: "https://i0.wp.com/synergyhygienepest.com/wp-content/uploads/2021/09/istockphoto-1170255863-612x612-1.jpg?w=612&ssl=1",
//     description: "Rodents, particularly rats and mice, can cause extensive damage to your property, contaminate food, and spread diseases. Our rodent management service includes trapping, baiting, exclusion methods, and sealing entry points to prevent future infestations.",
//   },
//   {
//     name: "Cockroach Management",
//     imageUrl: "https://i0.wp.com/synergyhygienepest.com/wp-content/uploads/2021/09/cockroach-prohibition-sign-warning-no-260nw-1464048509-e1630764192723.jpg?resize=150%2C150&ssl=1",
//     description: "Cockroaches are known carriers of allergens and bacteria. We use professional-grade insecticides, baits, and traps to eliminate cockroaches and their eggs, providing guidance to prevent future infestations.",
//   },
//   {
//     name: "Termite Management",
//     imageUrl: "https://i0.wp.com/synergyhygienepest.com/wp-content/uploads/2021/08/istockphoto-525058267-612x612-1-e1630432432917.jpg?resize=150%2C150&ssl=1",
//     description: "Termites are destructive pests that can damage the structure of your property. We use advanced detection tools and a combination of chemical treatments and baiting systems to eradicate termites.",
//   },
//   {
//     name: "Lizard Management",
//     imageUrl: "https://i0.wp.com/synergyhygienepest.com/wp-content/uploads/2021/09/download-1.png?w=259&ssl=1",
//     description: "We provide humane lizard management services using non-toxic repellents and traps to relocate lizards, while offering advice to seal entry points and reduce favorable habitats.",
//   },
//   {
//     name: "Mosquito Management",
//     imageUrl: "https://i0.wp.com/synergyhygienepest.com/wp-content/uploads/2021/09/mosquito-danger-sign-template-element-poster-card-emblem-logo-illustration_124137-1506.jpg?resize=370%2C370&ssl=1",
//     description: "Our mosquito management services focus on reducing populations using environmentally-friendly larvicides, traps, and repellents, while advising on eliminating stagnant water to prevent breeding.",
//   },
//   {
//     name: "Ant Management",
//     imageUrl: "https://i0.wp.com/synergyhygienepest.com/wp-content/uploads/2021/08/165306539-ants-banned-on-a-white-background-red-sign-e1630432532204.jpg?resize=150%2C150&ssl=1",
//     description: "Our ant management service focuses on identifying nests and using baits, sprays, and natural repellents to eliminate ants. We also help prevent future infestations by sealing entry points.",
//   },
//   {
//     name: "Bed Bug Management",
//     imageUrl: "https://i0.wp.com/synergyhygienepest.com/wp-content/uploads/2021/08/no-bed-bugs-anti-bedbug-insect-prohibition-sign-pest-control-cimicidae-icon-red-crossed-circle-bloodsucker-disinfection-192381674-e1630432559327.jpg?resize=150%2C150&ssl=1",
//     description: "Our bed bug management services include heat treatment, chemical solutions, and steam cleaning to eradicate bed bugs at all stages. We also provide advice on how to prevent future infestations.",
//   },
//   {
//     name: "Spider Management",
//     imageUrl: "https://i0.wp.com/synergyhygienepest.com/wp-content/uploads/2021/08/88935557-no-bugs-vector-sign-e1630432618258.jpg?resize=150%2C150&ssl=1",
//     description: "We use non-toxic sprays, traps, and web removal techniques to control spider populations while recommending landscaping practices to minimize spider habitats.",
//   },
//   {
//     name: "Wood Borer Management",
//     imageUrl: "https://i0.wp.com/synergyhygienepest.com/wp-content/uploads/2021/09/wood-borer-control-services-500x500-1.jpg?resize=150%2C150&ssl=1",
//     description: "We offer wood borer control by using specialized chemicals to treat wood-boring insects and provide wood treatment solutions to protect against future infestations.",
//   },
//   {
//     name: "Weed Management",
//     imageUrl: "https://i0.wp.com/synergyhygienepest.com/wp-content/uploads/2021/09/no-marijuana-sign-illustration-vector-260nw-1025315086-e1630766655971.jpg?resize=150%2C150&ssl=1",
//     description: "Our weed management services use both chemical and organic solutions to control existing weeds and prevent new growth, offering tips for maintaining a weed-free garden.",
//   },
//   {
//     name: "Bee Management",
//     imageUrl: "https://i0.wp.com/synergyhygienepest.com/wp-content/uploads/2021/09/no-bee-ban-sign-anti-260nw-1520598749-e1630766792256.jpg?resize=150%2C150&ssl=1",
//     description: "Our bee management services focus on safe removal and relocation of bees, ensuring no harm comes to the colony while preventing them from entering your premises.",
//   },
//   {
//     name: "Tick Management",
//     imageUrl: "https://i0.wp.com/synergyhygienepest.com/wp-content/uploads/2021/09/download-1-e1630766938306.jpg?resize=150%2C150&ssl=1",
//     description: "We help control ticks with targeted treatments to reduce their numbers, preventing the spread of tick-borne diseases like Lyme disease.",
//   },
//   {
//     name: "Microbial Management",
//     imageUrl: "https://i0.wp.com/synergyhygienepest.com/wp-content/uploads/2021/08/istockphoto-1039485458-612x612-1-e1630432823961.jpg?resize=150%2C150&ssl=1",
//     description: "Our microbial management service targets harmful microbes with eco-friendly solutions to ensure the safety and cleanliness of your space.",
//   }
// ];
  
//   // Export the services array
//   export default services;
  
//   // utils.js

// const precautions = {
//     flyManagement: [
//       "Avoid exposure to insecticides for long periods.",
//       "Keep food and drinks covered to prevent contamination.",
//       "Seal windows and doors to prevent flies from entering after treatment.",
//       "Keep children and pets away from treated areas until it's safe."
//     ],
//     rodentManagement: [
//       "Ensure traps and baits are placed in areas inaccessible to children or pets.",
//       "After treatment, clean up any dead rodents promptly to avoid attracting other pests.",
//       "Seal all holes and gaps in the structure to prevent re-entry."
//     ],
//     cockroachManagement: [
//       "Keep food in sealed containers and clean up food crumbs to avoid attracting cockroaches.",
//       "Avoid contact with pesticides or baits, especially in kitchen areas.",
//       "Keep pets away from treated areas until it's safe."
//     ],
//     termiteManagement: [
//       "Keep away from treated areas during the application of chemicals.",
//       "Avoid disturbing treated surfaces for a few days to ensure the chemical is effective.",
//       "Regularly inspect your property to ensure the problem doesn’t return."
//     ],
//     lizardManagement: [
//       "Make sure traps and repellents are placed in areas where children and pets cannot access.",
//       "Seal potential entry points to avoid further infestations.",
//       "Avoid disturbing the lizards if they are trapped; relocation should be done by professionals."
//     ],
//     mosquitoManagement: [
//       "Remove standing water from your property to eliminate mosquito breeding grounds.",
//       "Use mosquito nets or repellents if you're sensitive to mosquito bites.",
//       "Keep pets indoors or in treated areas to prevent exposure to pesticides."
//     ],
//     antManagement: [
//       "Clean up food sources and seal trash bins to avoid attracting ants.",
//       "Be cautious around bait stations if you have pets.",
//       "Use natural repellents or sprays in food areas instead of chemical options."
//     ],
//     bedBugManagement: [
//       "Follow proper guidelines when washing and drying bedding and clothing to kill bed bugs.",
//       "Avoid disturbing treated areas immediately after treatment.",
//       "Inspect second-hand furniture or clothing thoroughly before bringing them into your home."
//     ],
//     spiderManagement: [
//       "Avoid touching or disturbing spider webs.",
//       "Wear gloves when cleaning areas where spiders are likely to hide.",
//       "Make sure treatments are safe for children and pets before applying in living areas."
//     ],
//     woodBorerManagement: [
//       "After treatment, avoid using the affected furniture or wooden items until fully dried and safe.",
//       "Ensure that pets do not chew on treated wood.",
//       "Use protective gear (gloves, mask) when handling treated wood to avoid contact with chemicals."
//     ],
//     weedManagement: [
//       "Avoid walking on freshly treated areas to prevent chemical exposure.",
//       "Keep children and pets off treated lawns for at least 24 hours.",
//       "Use organic methods if you're concerned about the impact of herbicides on the environment."
//     ]
//   };
  
//   // Export the precautions object
// //   export default precautions;
  
import React from "react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import ProgramsHero from "@/components/programs/ProgramsHero";
import ProgramBlock from "@/components/programs/ProgramBlock";
import Testimonials from "@/components/programs/Testimonials";
import TourCta from "@/components/whatwedo/TourCta";

const INFANT_IMG = "https://media.base44.com/images/public/6ac988f8698bd7e02be4bfc7/a8acba8c7_generated_image.png";
const TODDLER_IMG = "https://media.base44.com/images/public/6ac988f8698bd7e02be4bfc7/2277ea196_generated_image.png";
const PRESCHOOL_IMG = "https://media.base44.com/images/public/6ac988f8698bd7e02be4bfc7/a33095997_generated_image.png";
const AFTER_SCHOOL_IMG = "https://media.base44.com/images/public/6ac988f8698bd7e02be4bfc7/e54a5dbee_generated_image.png";

const programs = [
  {
    id: "infants",
    chip: "6 Weeks & Up",
    chipClass: "bg-coral-soft text-coral",
    chipDotClass: "bg-coral",
    title: "Infants",
    img: INFANT_IMG,
    alt: "A caregiver gently playing with a baby on a soft play mat in a bright infant room",
    reverse: false,
    paragraphs: [
      "We have carefully created an environment to enhance, stimulate and engage our infant children. Bright colors, vivid pictures, soft cuddly toys and playthings are always available to spark their imagination and promote exploration. Each day focuses on building word, voice, and sound recognition through stories and rhymes, songs, and music.",
      "Under the watchful eyes of our patient and loving caregivers, infants are guided through a daily series of fun activities designed to help your baby roll over, sit up, crawl, climb, and eventually walk — with a huge supply of hugs, laughs, and loving praise to nurture their growth and development.",
      "To make the transition from home to school and back smooth, caregivers communicate with you on an individual basis: you provide your baby's daily routine, and we use it as the guide for your baby's day with us.",
    ],
  },
  {
    id: "toddlers",
    chip: "Busy Little Explorers",
    chipClass: "bg-sun-soft text-ink",
    chipDotClass: "bg-sun",
    title: "Toddlers",
    img: TODDLER_IMG,
    alt: "Toddlers playing with sensory toys at a low wooden table in a bright classroom",
    reverse: true,
    paragraphs: [
      "A toddler is always on the go — and that is just fine. We keep them busy with both group and individual activities tailored to the expanding mind of your child, letting them explore and investigate their surroundings in a safe, controlled environment.",
      "Toddlers participate in as many daily activities as they like, from helping plate meals to assisting in cleaning up after themselves. We spend a lot of time focusing on reading and learning about the world around us.",
      "Hands-on fun fills every day — from painting and drawing to singing and playing with other children.",
    ],
  },
  {
    id: "preschoolers",
    chip: "Kindergarten Ready",
    chipClass: "bg-leaf-soft text-leaf",
    chipDotClass: "bg-leaf",
    title: "Preschoolers",
    img: PRESCHOOL_IMG,
    alt: "Preschoolers doing a group activity with puzzles and books at a light wood table",
    reverse: false,
    paragraphs: [
      "Young children learn from experiences, actions, observations, and interactions with people and things. Our focus is on each child's needs and development, with a written curriculum based on the knowledge of a child's development.",
      "Daily activities reflect our program's philosophy and goals: we foster independence by encouraging children to think, reason, question, and experiment, and our staff helps children use language to deal with their feelings. Social skills develop through cooperating, helping, taking turns, and talking through problem solving.",
      "Our staff communicates with you daily about your child's social, emotional, educational, and physical progress, with written progress reports twice a year and conferences always available. Parents and family members are welcomed visitors at all times.",
      "Pre-K students take part in Reading and Math Readiness — the alphabet, phonics, vocabulary, number recognition, measurements, and simple addition and subtraction — plus community helpers, safety awareness, movement and dancing, art, computers, and science. Children excel in kindergarten with the head start they receive at Christina's.",
    ],
  },
  {
    id: "school-age",
    chip: "Before & After School",
    chipClass: "bg-sky-soft text-sky",
    chipDotClass: "bg-sky",
    title: "Before And After School",
    img: AFTER_SCHOOL_IMG,
    alt: "School-age children doing homework and reading together in a bright after-school room",
    reverse: true,
    paragraphs: [
      "A safe, well-supervised and loving atmosphere for your elementary school age child. Working parents can put their minds at ease knowing their child is actively involved in dance, gym, computers, arts and crafts, and much, much more.",
      "The After School Program includes help with homework for children who need that little extra support, a nutritious breakfast for early arrivals, and an afternoon snack. We make sure every child arrives at school safely and on time — and the program can be extended on school holidays and early dismissal days with advance notice.",
      "The need is real: in Minnesota, 32% of K–12 children are responsible for taking care of themselves after school, while only 12% are involved in an afterschool program (Afterschool Alliance, America After 3 PM). Our Family Support Center conducts a full-scale afterschool program to help close that gap.",
    ],
  },
];

export default function Programs() {
  return (
    <div className="min-h-screen bg-cream text-ink font-body antialiased">
      <Navbar />
      <main>
        <ProgramsHero />
        <div className="bg-white">
          {programs.map((p) => (
            <ProgramBlock key={p.id} {...p} />
          ))}
        </div>
        <Testimonials />
        <TourCta />
      </main>
      <Footer />
    </div>
  );
}

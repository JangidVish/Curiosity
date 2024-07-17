import { cn } from "@/app/utils/cn";
import Marquee from "@/app/components/ui/marquee";

const reviews = [
  {
    name: "Samruddhi Achari",
    username: "Student at Pravi",
    body: "Very nice workshop, really help me alot in personal growth, in both technical and soft skill development. all the professional who taught us are really nice, kind and helping. Had a great session overall. Request: please conduct a session on ethical hacking and cyber security please.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Sanjana Deshinge",
    username: "Student at Pravi",
    body: "It was really a great and amazing workshop.It was really beyond my expectation where we were having hand-on experiences with learning so many skills like C++,soldering,app development and many more.So I want to thank you for teaching us supporting us and helping us with all the stuffs.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Mitali Swamy",
    username: "Student at Pravi",
    body: "It would be great if you could take sessions on cybersecurity as well with robotics",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Swanandi Bhosale",
    username: "Student at Pravi",
    body: "Very nice experience..everyone was very supportive,coordinative,helpful. Got to learn a lot of new things from u all , plz do take it again. We'll love to learn more new things from u .",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Purva Khedekar",
    username: "Student at Pravi",
    body: "Mind-opening and fun! The workshop exceeded my expectations and I'm excited to apply my new skills.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Madhura Dhake",
    username: "Student at Pravi",
    body: "Workshop was very exciting.Got to learn many new things.The professionals who taught us were very helpful,kind and nice.It was a great experience.Would love to attend more such sessions.",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Sakshi Wadikar",
    username: "Student at Pravi",
    body: "Workshop was so much fun got to learn many new things.",
    img: "https://avatar.vercel.sh/james",
  },
];


const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl p-4 bg-slate-800 shadow-md",
        // light styles
        // "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]  ",
        // // dark styles
        // "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15] " ,
      )}
    >
      <div className="flex flex-row items-center gap-2  ">
        <div className="flex flex-col">
          <figcaption className="text-lg font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

function MarqueeDemo() {
  return (
    <div className=" w-full dark:bg-black dark:bg-grid-white/[0.15] relative flex flex-col items-center justify-center sm:overflow-hidden bg-black border-b-4 min-h-screen " id="Feedback">
    <h1 className="text-4xl font-bold text-center mb-8 z-10">What Student Says</h1>
    <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <Marquee reverse pauseOnHover className="[--duration:20s] bg-black md:w-3/4">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 dark:from-background"></div>
    </div>
    </div>
  );
}

export default MarqueeDemo
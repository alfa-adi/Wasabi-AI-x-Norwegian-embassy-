export interface TranscriptSegment {
  id: string;
  startTime: string; // e.g. "00:33"
  endTime: string;   // e.g. "04:20"
  secondsStart: number;
  secondsEnd: number;
  speaker: string;
  speakerTitle: string;
  organization: string;
  theme: string;
  text: string;
}

export interface SpeakerProfile {
  name: string;
  role: string;
  organization: string;
  avatarColor: string;
  category: 'Diplomat / Govt' | 'Host / Wasabi AI' | 'Civil Society / NGO' | 'Industry / Tech' | 'Academia / Research';
  bio: string;
}

export const SPEAKERS: Record<string, SpeakerProfile> = {
  "Kartik Sharma": {
    name: "Kartik Sharma",
    role: "Lead - Policy & Partnerships",
    organization: "Wasabi AI",
    avatarColor: "bg-emerald-600",
    category: "Host / Wasabi AI",
    bio: "Leads policy initiatives at Wasabi AI and co-hosts the Digital at UNGA India engagements."
  },
  "H.E. Arvinn Gadgil": {
    name: "H.E. Arvinn Gadgil",
    role: "Ambassador of Norway to India",
    organization: "Royal Norwegian Embassy in New Delhi",
    avatarColor: "bg-blue-600",
    category: "Diplomat / Govt",
    bio: "Senior Norwegian diplomat bridging global policy, governance, bilateral AI cooperation, and ethics."
  },
  "Yashraj (Yash) Mukati": {
    name: "Yashraj (Yash) Mukati",
    role: "Founder & CEO",
    organization: "Wasabi AI",
    avatarColor: "bg-indigo-600",
    category: "Host / Wasabi AI",
    bio: "Entrepreneur and ISDM alumnus who transformed from feeling 'technologically handicapped' to building grassroots AI tools empowering communities."
  },
  "Sanjay Gupta": {
    name: "Sanjay Gupta",
    role: "Director",
    organization: "CHETNA NGO (Childhood Enhancement through Training and Action)",
    avatarColor: "bg-amber-600",
    category: "Civil Society / NGO",
    bio: "Advocate for marginalized and street-connected children, integrating AI training for educators and child safety."
  },
  "Gaurav": {
    name: "Gaurav",
    role: "Digital Health Lead",
    organization: "ARMMAN (Maternal & Child Health)",
    avatarColor: "bg-rose-600",
    category: "Civil Society / NGO",
    bio: "Pioneering AI and mobile tech to assist Auxiliary Nurse Midwives (ANMs) in tracking high-risk pregnancies."
  },
  "Vivek Prakash": {
    name: "Vivek Prakash",
    role: "Product Manager & Growth Head",
    organization: "SuperApp",
    avatarColor: "bg-purple-600",
    category: "Industry / Tech",
    bio: "Building multi-model AI environments that enable supervised, collaborative organizational intelligence."
  },
  "Vidhi": {
    name: "Vidhi",
    role: "Head of Responsible AI & Governance",
    organization: "Future Shift Labs",
    avatarColor: "bg-teal-600",
    category: "Academia / Research",
    bio: "Focuses on transitioning from knowledge to wisdom, ethics, and youth mental health chatbot governance."
  },
  "Prof. (Dr.) Charu Malhotra": {
    name: "Prof. (Dr.) Charu Malhotra",
    role: "Professor & Project Lead (MANAV AI)",
    organization: "Indian Institute of Public Administration (IIPA) & MeitY",
    avatarColor: "bg-orange-600",
    category: "Academia / Research",
    bio: "Longstanding AI researcher since 1983; leading India's MANAV Responsible AI framework with MeitY."
  },
  "Suresh Reddy": {
    name: "Suresh Reddy",
    role: "Director",
    organization: "SRF Foundation",
    avatarColor: "bg-cyan-600",
    category: "Civil Society / NGO",
    bio: "Focuses on transforming India's government school ecosystem (15 lakh schools) and teacher empowerment."
  },
  "Dr. Navneet": {
    name: "Dr. Navneet",
    role: "Founder & Lead",
    organization: "Sparshbio Foundation",
    avatarColor: "bg-sky-600",
    category: "Civil Society / NGO",
    bio: "Clinician and health-tech founder deploying frugal web apps for clinical guidance and non-profit automation."
  },
  "Ravishankar (Ravi)": {
    name: "Ravishankar (Ravi)",
    role: "DPI & Impact Strategist",
    organization: "DPI Social Impact Initiative",
    avatarColor: "bg-violet-600",
    category: "Civil Society / NGO",
    bio: "Works on citizen discovery problems, local-language access, and foundational digital rails."
  },
  "Representative, Embassy of El Salvador": {
    name: "Representative, Embassy of El Salvador",
    role: "Diplomatic Representative",
    organization: "Embassy of El Salvador in India",
    avatarColor: "bg-blue-700",
    category: "Diplomat / Govt",
    bio: "Sharing lessons from El Salvador's national AI agency and the need to tropicalize AI models for developing nations."
  },
  "Dr. Namita Wakhloo": {
    name: "Dr. Namita Wakhloo",
    role: "Founding Director, Land Rights Initiative; Senior Fellow",
    organization: "Centre for Policy Research (CPR)",
    avatarColor: "bg-red-700",
    category: "Academia / Research",
    bio: "Leading constitutional and policy scholar analyzing environmental, tribal (Adivasi), water, and land implications of AI infrastructure."
  },
  "Srikanth": {
    name: "Srikanth",
    role: "Head of CSR",
    organization: "Indian Oil Corporation Ltd. (IOCL)",
    avatarColor: "bg-amber-700",
    category: "Industry / Tech",
    bio: "Spearheading grassroots CSR initiatives including smart rural AI labs for children in rural Karnataka."
  },
  "Parishrut": {
    name: "Parishrut",
    role: "Founder & CEO",
    organization: "GoverniAI",
    avatarColor: "bg-indigo-700",
    category: "Industry / Tech",
    bio: "Works on public sector AI governance, defense deployments, AI red-teaming (LIME/SHAP), and DPI safety."
  },
  "Vishal": {
    name: "Vishal",
    role: "Grassroots Lead",
    organization: "Ladli Foundation",
    avatarColor: "bg-pink-600",
    category: "Civil Society / NGO",
    bio: "Empowers youth and women in vulnerable slums and rural regions, breaking technological intimidation."
  },
  "Aditi": {
    name: "Aditi",
    role: "Director of Capacity Building",
    organization: "Wadhwani AI",
    avatarColor: "bg-emerald-700",
    category: "Industry / Tech",
    bio: "Designs AI solutions for health and agriculture, testing real-world deployment across millions of beneficiaries."
  },
  "Yash (Embassy of Brazil)": {
    name: "Yash (Embassy of Brazil)",
    role: "Head of Trade & Tech",
    organization: "Embassy of Brazil in New Delhi",
    avatarColor: "bg-green-700",
    category: "Diplomat / Govt",
    bio: "Facilitating bilateral DPI and AI collaboration between India and Brazil, including the Brasília DPI Center with Co-Develop."
  },
  "Sangita": {
    name: "Sangita",
    role: "Industry Representative",
    organization: "NASSCOM",
    avatarColor: "bg-blue-800",
    category: "Industry / Tech",
    bio: "Focuses on technology skilling, demographic dividend, cybersecurity, and cloud adoption in India."
  },
  "Mamta Saikia": {
    name: "Mamta Saikia",
    role: "Chief Executive Officer",
    organization: "Bharti Airtel Foundation",
    avatarColor: "bg-rose-700",
    category: "Civil Society / NGO",
    bio: "Author of 'Money Matters, People Too' and leader in large-scale philanthropic education and technology adoption."
  }
};

export const TRANSCRIPT_SEGMENTS: TranscriptSegment[] = [
  {
    id: "seg-1",
    startTime: "00:00",
    endTime: "00:33",
    secondsStart: 0,
    secondsEnd: 33,
    speaker: "Kartik Sharma",
    speakerTitle: "Lead - Policy & Partnerships, Wasabi AI",
    organization: "Wasabi AI",
    theme: "Opening & Welcome",
    text: "I just request if people can settle down. Thank you."
  },
  {
    id: "seg-2",
    startTime: "00:33",
    endTime: "04:20",
    secondsStart: 33,
    secondsEnd: 260,
    speaker: "Kartik Sharma",
    speakerTitle: "Lead - Policy & Partnerships, Wasabi AI",
    organization: "Wasabi AI",
    theme: "Opening Remarks & Context Setting",
    text: "Good afternoon, ladies and gentlemen, esteemed guests. Thank you for joining in. I was thinking to put an AI prompt to start this conversation, but I thought that that would be too much forced to begin this conversation. Thank you for joining in. On behalf of Wasabi AI, my name is Kartik Sharma. I lead the policy space for Wasabi AI, and it's wonderful to host you at the Royal Norwegian Embassy. I am blank at this point because it is again very overwhelming for the past over one week we were trying to make this happen. We were trying to get the most relevant people from industries, from development organizations, corporates, and embassies as well. And it's such a good thing to see that everybody showed up on time, before time. I remember the first guest arrived at 12:30! So thank you, thank you so much.\n\nThis event is organized in the spirit of Digital at UNGA. We got three opportunities under this mandate: the first we did with Masters' Union, where we explored from the tech experts that how AI is evolving. We spoke to multiple kids who joined us; we were also joined by the chair of the UN Committee on the Rights of the Child. So we explored that synergy. And the second engagement we did, that was in a village of Haryana. So we brought that conversation of UNGA to a village to see that what is the insight, how do they respond to conversations which are happening—you know, maybe top 1% of the people who are leading this world are talking about. And the third and the final, most mandate which we have is here, in this space of people from diverse backgrounds, and to talk that how we can build an AI which is inclusive enough for people—for whom we are building this tool, this platform, for whom we are building this solution, for individuals and for systems and for national infrastructure.\n\nSo to begin this context—believe me, I did use Claude, I'll say! But I haven't used that. But to begin today's conversation, I would like to invite His Excellency, the Ambassador of Norway to India. Can we have a round of applause? Thank you. We have H.E. Arvinn Gadgil, Ambassador of Norway to India. And there is a very unique story: again, I have a written profile which we do in formal events, but a unique thing is that he has both Norwegian descent and Indian descent as well! So he's bridging the gap. Over a decade of his work, his work has primarily focused on building synergies towards humanity, diplomacy, and what not. And one thing which I was just searching and going through, that he has been a great champion for youth empowerment. And being a young guy, I really feel happy people doing so. So thank you, thank you so much. Without taking much time, I would just hand over to you. Can we have a round of applause?"
  },
  {
    id: "seg-3",
    startTime: "04:20",
    endTime: "18:42",
    secondsStart: 260,
    secondsEnd: 1122,
    speaker: "H.E. Arvinn Gadgil",
    speakerTitle: "Ambassador of Norway to India",
    organization: "Royal Norwegian Embassy in New Delhi",
    theme: "Keynote Address: Samudra Manthan, Amara's Law & Meaning of Human Agency",
    text: "Thank you so much, Kartik, and oh my! This is like, feeling like I'm in a concert stadium! You feel the echo of endless crowds. I don't know what's going on with the sound mixing, we'll see if we can fix that. Can you hear me without the microphone? Yeah, okay, let's do it that way.\n\nGuys, welcome to the Norwegian Embassy. It is wonderful to see all of you here, and as Kartik was saying, just the mix is almost overpowering: the kind of expertise that you converged into this room, the kind of experience, but also not least the perspectives, the vantage points that you have that are unique, and that has to and deserves to be a part of this conversation.\n\nI'd like to thank Wasabi AI, I'd like to thank ITU—what's it called now? International Telecommunication Union, that's the one—and the UN Development Programme for putting this together. We are merely a shell where you can come and fill it with valuable content. But let me just also say that for Norway, this is an important issue obviously, as it is for everyone. We are at the moment super excited about our collaboration with India on AI-related issues. We just signed another MoU—a Memorandum of Understanding, basically an agreement—that says a little bit about how we are going to cooperate with India in the future.\n\nFor us, I think we are in a phase where we'd like to understand how the world is coping with what is a mind-blowing pace of evolution in the technological field, and not least also in our public governance sphere. And India is—there's no other better place to study it than India. Not only because of the incredible progress this country has had on Digital Public Infrastructure (DPI), as well as its incredible pool of engineers and brilliant minds who will inevitably be part of fueling what this future is going to be like.\n\nSo I was thinking a little bit about how to contextualize these next few hours for you—and I know that I'm an uneducated fool in this context, but I'll try my best to give you one image that I think many of you know. And that's the image of the Samudra Manthan. Right? Samudra Manthan for me is a very powerful image in Hinduism. It tells many different stories; in fact, it's part of many different stories. But for me, it's the incredible effort that the Devas and Asuras together made to churn the ocean, to do the impossible, to find value where there was no apparent value.\n\nBut in the process, of course, a lot of bad stuff came out of it. Things that were not desired, things that humanity was not picture-fit for, or for that matter even the demons didn't like, right? So it's a story of how even the unlikely collaboration forced for a joint purpose will almost inevitably bring forward both evils and good.\n\nAnd this is of course—any AI conversation, any AI debate starts with that: is it good or evil? Is it good or bad? And I think while that is potentially a good perspective, I think the Samudra Manthan maybe gives us a different way of looking at it: simply accepting that there will be good and evil. And by accepting that, we start devising responses to that reality. And that's why I think it's a good image. It's something that maybe you can keep at the back of your mind as you discuss this.\n\nNow, what's important for this discussion as I have seen it envisioned and constructed is that it is a low-bar conversation. We're in an embassy, which is actually a terrible place for this discussion, right? Because what happens in an embassy? Everyone puts on a suit, looks all formal, and tries to say all the correct things. Please do not think that way. Think that this is a group full of innovators, people who have vantage points that are unique and that you have a unique chance to exploit today. And therefore, you need to use that chance to ask questions that are difficult, that may sound naive and banal, but are actually the key things that we are faced with.\n\nBecause, as you know better than anyone, there are some very, very fundamental questions that are coming out to all of us at the moment. And essentially, for me, it's a question not about what do we use technology for, but what is it to be human? It sounds like a grand question, an impossible question, a question that has been asked since the first philosophers of the Indus Valley. But it's still, perhaps in my lifetime, the first time this question has come up with such intensity. And maybe it's a little bit veiled behind all the hype around data centers and technology leaps and all of these oligarchs that take a lot of the attention. But essentially that question: what is it to be human in a time with such an exploding technological paradigm shift is what we need to keep in mind.\n\nAnd we can boil this down, right? You don't need to only talk about compute power, models, algorithms, and all of this new lingo that all of us have taught ourselves over the last few years. We can boil it down. Let me try it, okay? Let's talk about trust for a moment. How many here would trust an AI to choose where you would go on holiday? I would! Okay, let's try a slightly more difficult one: How many of you here would trust an AI to select their life partner? The question is maybe not that, but: do we have a choice? Another question of course that I often think about these days is right and wrong and justice. At what point do we allow technology to dictate what is justice? How many would allow an AI to dictate what you would watch on Netflix tonight? Kind of already happens! How many of you would allow an AI to determine whether or not you'll get a bank loan? Maybe they understand a little bit better than me how good my finances are. But how many of you would allow an AI to pass judgment on you in a court of law?\n\nThis is an interesting question for the very reason that those who look at these models that we are all dealing with at the moment are putting forward a ridiculous claim that is 100% true: that is that absolutely everything you can imagine a human being doing, we should imagine an AI doing. And the reason is not because that is going to happen, but because there's a slight likelihood that this will happen. And since there is such a slight likelihood for this happening, we have to imagine it! We have to imagine a situation where the AI basically can do everything that we as humans can do, as well or better, including passing judgment on you in a court of law.\n\nSo I'm raising this because it is these simple questions that bring this very complicated conversation down to a level and to a type that is possible for us to understand and discuss—everyone. And it's also what makes many of us afraid. And I think this is also a forum to share that. This is not a collective psychology session, but it could be a session where we actually talk about, from your different expert vantage points: what are you afraid of, as much as what is your biggest dream that this technology can bring about?\n\nWe know that India is one of the most positive markets in the world for AI. If you ask people in India, they generally will say AI is a good thing—at least for now. That is an opportunity, but so let's learn and understand what that means.\n\nMaybe one final thing just to say: there is an American technologist quite popular in the '70s called Roy Amara. He popularized something that was later called Amara's Law. Has anyone heard of Amara's Law? It's a rhetorical point. The idea is, he says the following: 'For any paradigmatic shift in technology, human beings have one fundamental response: and that is to overestimate its impact in the short run.' The second part of the law, however, is: 'But human beings also have an inevitable trend to underestimate the long-term effects.'\n\nOne of the examples that I've been thinking about is—does anyone remember the VHS, the VCR? I was thinking about it because recently there were all these demonstrations in Hollywood. Actors were coming out on the street and they were talking about our intellectual property being taken away from us, even our face and our bodies being used in models to create artificial images of us. This should not be allowed, and this will kill cinema! Well, basically, when the VCR came about, it was exactly the same argument: 'This will kill cinema! There's no way that cinema can survive an economy where you can simply just go to a shop and pick the movie you want and put it into your TV and watch it, right?' So they demonstrated—hundreds and hundreds of actors in Hollywood. Now, the short-term effect of that particular introduction of technology was relatively minor, right? In fact, what you saw was cinema attendance went up. There was more interest in movies! But the long-term effects—what do you have now? The idea that you could individually personalize your preferences on movie consumption—today it sounds like a ridiculous and banal idea, but then it was mind-blowing! Absolute mind-blowing. And we're here now; in fact, we've been here for a while.\n\nSo my point is, there will be an unlimited number of unknown unknowns as we try to chart the future of this paradigmatic change technology. So whenever we attack it, we need to be humble. Whenever we attack it, we have to understand that our own creativity and imagination will inevitably be limited to the extent that we will not see where this will end. That does not mean that the most maximalist version of this will be true, but most certainly no one in this room would be able to describe how the future looks 20 years from now.\n\nOkay, so as this conversation is divided into two main parts, you have two main tasks: seeing this from the individual perspective, trying to discuss what this means in terms of inclusion, and the keyword here is of course agency. And of course, as I haven't spoken to the organizers, but I'm assuming it's not an arbitrarily chosen word, because agency is particularly the thing that is being challenged by the agentic world that we are increasingly living in. And then secondly, of course, are the systems of impact: understanding the complexity and the systemic change that happens when this is introduced to our societies.\n\nAnd I need to draw your attention to a few Norwegian initiatives that have happened recently—Norway was part of an initiative you may have heard about this: Alexander Stubb, the President of Finland, and the Prime Minister of Norway Jonas Gahr Støre, together with 30 world leaders, including the Dutch Prime Minister, came together to ask for a global regulatory body. That was the headline—there's a few other articles as well, it's a statement of three quarters of a page, I recommend you have a look at it. India has not signed that yet. The point with that is: let's not simply sit around or let's not simply churn this ocean without creating some sort of security net that can capture the good things and store the evil things.\n\nAnd that's why we need that collaborative effort. That's why the United Nations General Assembly is the obvious place to have this conversation. You are officially part of that conversation right now, because there is no opting out! And that's the message of that initiative. Please study it, and we'd like your input and feedback on it. I've spoken far too much—it's a wonderful topic to speak on and I could speak more, but then you would have to invite me back. Thank you so much for listening to me, and best of luck with these few hours together. Use them, challenge each other, don't be afraid of making each other uncomfortable! That's why we are here. Good luck!"
  },
  {
    id: "seg-4",
    startTime: "18:42",
    endTime: "21:12",
    secondsStart: 1122,
    secondsEnd: 1272,
    speaker: "Kartik Sharma",
    speakerTitle: "Lead - Policy & Partnerships, Wasabi AI",
    organization: "Wasabi AI",
    theme: "Transition & Introducing Wasabi AI's Founder",
    text: "Thank you. Thank you so much. Can we have a proper round of applause?\n\nFor me specifically, when I was listening, I was like: damn, what a great description could be of Sagar Manthan! Because we talk both goods and bad. And AI, for someone it creates opportunity; for someone it is a big insecurity for them. And I think I'll copy this example with your permission, sir! I'll tell this: that it has both, and it's our choice where we go. But that's also really important: we map the possibilities, the possibilities which are limitless. And the most number of possibilities we can map, the better place we are to mitigate those risks which are going to come with this future technology which is already there.\n\nSo thank you so much. And moving ahead, I would love to invite Mr. Yashaswi Mukati, commonly known as Yash. He's the founder and CEO of Wasabi AI, the organization I am working with. And with over 10 years of working in development profession, he chose to come and work into the AI space, majorly building human capabilities. And one particular thing which I always remember while having a conversation with him: that what does it mean—an AI tool for a child in a far village of some corner of our country or anywhere in the world? What does that tool translate? Does this translate into some possibilities of learning, or making some extra penny, or utilizing that extra penny to get better education, making better health planning for their family, and breaking that vicious cycle?\n\nI think that's what Yash has been doing in India for over nine months since Wasabi started, but before that he has worked with multiple organizations as a impact strategist leading partnerships. And here we are at the Embassy with his efforts, having this partnership where we have people from diverse spaces coming together and talking at one thing: AI for Inclusion. So over to you, Yash. Thank you. Can we have a round of applause?"
  },
  {
    id: "seg-5",
    startTime: "21:12",
    endTime: "31:30",
    secondsStart: 1272,
    secondsEnd: 1890,
    speaker: "Yashraj (Yash) Mukati",
    speakerTitle: "Founder & CEO, Wasabi AI",
    organization: "Wasabi AI",
    theme: "Personal Genesis, Building Agency, and Framing Session Questions",
    text: "Thank you so much, Kartik. And I very specifically asked Kartik to give a formal—a really formal, a good, power-packed, like a Baahubali kind of an introduction! I believe he's delivered to it.\n\nLet me tell you a story. A young guy from a second-tier city had a lot of aspirations coming from that space, seeing the world out for all the glimmers of Delhi, of Mumbai, of around the world. Had so many dreams, wanted to become an entrepreneur, and seeing everything around all the Shark Tanks and everything. Finally identified something out there in the market: that okay, this is something which I can do. And not just from a commercial lens, but this was a problem that needed to be solved in a climate space. It was something which needed urgent attention. And there was nothing out there.\n\nSo that young guy reached out to a lot of his friends, asked, tried to enquire: how can I build something like this? What can we do? And ultimately felt very disheartened and disappointed that everyone, whoever is there, is telling him: it will take six months, it will take seven months, it will take 20 lakhs, 30 lakhs, so much of compute, so many engineers. And sitting at home, that was the time ChatGPT came in. And somehow stumbled upon ChatGPT and started just working around, just asking questions. And ended up building that platform in less than three days! Something for which he has struggled for over six months, ended up building it in three days, and on the fourth day had more than 12,000 subscribers—paid subscribers on that platform!\n\nThat person—that's me. And this is not a story about me building something; it's a story about me always looking at myself as someone who's technologically handicapped. Never thinking beyond Excel, because I knew that I cannot do anything beyond that. So that limiting factor I had. But the moment I built something of my own, something broke, something shattered: my beliefs of my own constraint shattered. And since that day, I can tell you, every single week I build something of use for myself, for some of my friends, or something for society. Some very basic tools, solutions I build.\n\nAnd what it gives me is a sense of agency: that no matter what, where I am in this world, if I am faced with a problem, I can solve it—with technology or without technology! Because it wasn't just about the technology, it was also about the belief which I had that I cannot, that I'm not a builder. And when I realized it, you know, that day when I saw over 12,000 subscribers and something I built—where I believed I could not build—being useful to so many people, it wasn't just the belief which was breaking, it was also my tears which were... And I wondered why I was crying, but you know, it's a very emotional moment to realize that you are so much, and you have spent your 25, 26, or whatever years of age not realizing it, not actualizing it.\n\nThe potential which AI gives is literally godly. What we could imagine—we couldn't imagine to do earlier. Things which were concentrated to the technological Brahmins—let's call them the B.Techs and the software engineers! So things which were concentrated over there, the capabilities and the magic, now that has democratized. Anyone can build, anyone can solve.\n\nAnd I think: what if we take this magic, we take this potential to the remotest parts of the country, where problems are huge? Problems have been there intergenerationally, but they haven't been a political problem, because they are somewhere down in the Bastar, somewhere down in the forest, right? Or anywhere—even in the huts of Delhi. If those problems are not political enough, then they will never be solved. What if a child can solve it? What if some women can simply solve that thing? What if someone who cares about their children, about their life, how they are growing up—they can take, they have that agency to decide: what I want to build and what I want to do with my life, with my children's future, and the kind of things which we provide for them?\n\nAnd that is the belief with which I'm working, we are working on Wasabi. It is a very personal mission. I believe—actually, I've been an entrepreneur for quite some time, and I've tried a lot of things. But for the first time I feel this. I've studied at ISDM—Gaurav is here, he is one of the founders for ISDM—and one thing which we have studied there: that you know, the mission comes from heart. It starts with my value systems: what I truly believe in, and what I believe in, and how I want to see that unfold in the larger world. And what I believe in is the sense of agency and empowerment for myself. I cannot be restricted. I hate being held in clutches of my own limitation. And it's really empowering, and it's really—that is for me the purpose of life: to be able to do what I want, solve things which actually bring barriers to my own aspirations. And that is what we are doing here.\n\nNow, talking about this whole thing—that's why, you know, it's been a lot of encouragement and gusto. For the last nine months since we have started, we've been on ground doing a lot of trainings, helping people build: women who have never gone to school, children in the government schools, class second, class third students who can barely write are building software! So something like that. Now I won't take much time introducing more about Wasabi. Let us get to the conversation.\n\nSo very specifically, what we have tried to do today over here is, instead of having a panel, instead of having some keynotes, we're trying to have a democratic conversation. Because it's rare that we convene such a room where we have representatives of multilateral organizations, embassies, missions, we have largest financial institutions and the backbones of those financial institutions, we have development organizations, academic institutions, and many more stakeholder groups who are here representing. And we want to gather those insights.\n\nSo the format of the day is going to be very simple. We'll start with a question, and then I don't want to facilitate unless you make me do that! We want to have an open conversation. So let me frame this for the central theme: Is everyone ready for a good conversation, right? Okay! So we're talking about when AI becomes accessible to everyone. Now, we know access—well, it's a major thing, it has been a major thing for decades. But right now, at least in India where we stand, access is not let's say the major issue, because a lot of us have that access. But what do we do of that access? Are we converting, are we bringing that access to capability, and using that capability to solve, using that capability to earn, using that capability to our own accord, to our agencies? And this is where I want to set the theme for the first session, first conversation.\n\nOne simple rule: we will go about, everyone can raise hands. Anyone who wants a mic, they can ask, otherwise we can just go around like that. We have a countdown for two minutes maximum—whoever wants to speak, you can take two minutes, and then we have a bell, so we'll ring a bell, so then you can conclude in next 10 seconds. So all set? I just want to say: what does agency through AI actually mean? When I think about this, there are two students, same class, both using AI, solving a problem. Both of them solving a problem and getting a similar kind of an answer. But one student just writes a prompt and asks for answers, and the other one goes and explores: how it is done? Why it is done? There's some response, then thinks about it, and then there is a lot of understanding, reasoning, contradiction, and everything. A lot of stakeholders who are here, I see you have been working on ground. I want to just open the conversation here and leave this question to all of you: What does it mean to build agency with AI? Yes. Gaurav, would you like to start? Sure, please."
  },
  {
    id: "seg-6",
    startTime: "31:30",
    endTime: "34:45",
    secondsStart: 1890,
    secondsEnd: 2085,
    speaker: "Sanjay Gupta",
    speakerTitle: "Director",
    organization: "CHETNA NGO",
    theme: "Educator Empowerment & AI Cartoon Generation with Child Consent",
    text: "Hi, my name is Sanjay Gupta. I am representing an NGO called Chetna that works for children. So for us, like the use of AI is an important system where we would like to empower the children whom we are working with. So the first thought which came into our mind was to empower the people who would actually teach children. So I'm referring to the educators basically who are part of our system.\n\nSo what struggle we were getting is that these educators in their everyday time, they need to report what they have learned from the field and gather the data. So there we had thought: how can AI be utilized for this purpose? So we had given some basic training on using ChatGPT for converting your day—how you witness a day—into a narrative which will be original, thoughtful. You should not say like this: 'Please give me a proposal to how to build...' No, give an input, give something. So that is how it is working very well, and you know, it has given me a sense of empowerment to the educator as well. And finally, it is actually going to the children.\n\nSo just one quick example I would say—I think we are the first probably, I'm just claiming, people can challenge us—is that we have developed a cartoon script using the actual child model with their consent, which is a good conversion of WhatsApp, converting image, and that image then using ChatGPT converting into a cartoon script! If time permits, that has come up very well. And the best part is that children are empowered; they have been shown how these images will be published, consent is taken. Is there a strong question: have we done something which is unethical, which I'm not clear about? That is my question for today. And we have not used the child imagery in Google or this thing; we have used WhatsApp for that purpose, which claims that we are end-to-end encrypted. Thank you."
  },
  {
    id: "seg-7",
    startTime: "34:45",
    endTime: "38:09",
    secondsStart: 2085,
    secondsEnd: 2289,
    speaker: "Gaurav",
    speakerTitle: "Digital Health Lead",
    organization: "ARMMAN (Maternal & Child Health)",
    theme: "Maternal Health, Guardrails, and On-the-Job AI Assistance for ANMs",
    text: "My name is Gaurav. I work with a maternal and child health non-profit organization called ARMMAN. We actually endeavor to deliver better health outcomes for pregnant women, young mothers, and their children by embedding technology in our interventions. Today, because of that, we are able to work across multiple states, reaching millions of people. We use across the tech stack including AI. We started using IVR, WhatsApp, doing tele-counseling, but now obviously a lot of AI and AI-based chatbots.\n\nLet me give you one example, and I'll talk about agency through that. One of the biggest problems in the country is that there are a lot of women who are dying because of preventable reasons, because they are not getting care at the right health facility in the right time. A lot of them suffer from what we call high-risk pregnancy parameters. Now, high-risk pregnancy is a very complex topic. There are multiple protocols around it, it's not easy to identify, it's not easy to actually give the right kind of management suggestions, to refer people to the right places. So how do you take this complex problem and try and create a solution which will create empowerment and agency—both are different things—within health workers to be able to do this?\n\nNow, our traditional models have been classroom trainings or maybe big courses that leaves you with learning which happens at a period of time; it doesn't last. And most of the effects of training go away over time. What ANMs (Auxiliary Nurse Midwives)—for example, who are one of the cadres of health workers—need is on-the-job assistance. So if a woman comes in, they need to diagnose, they need to give the right kind of suggestions to the woman, identify her, refer her—they need on-the-job assistance. Big problem out there: where do they go? Google is not necessarily reliable, because it's just too big a universe of information. AI, LLMs also too big, and there's too much hallucination which happens. They can't go to their seniors all the time—time is an issue, space of judgment is an issue.\n\nSo what we've done is we've taken clinically validated protocols which becomes the universe of knowledge, and trained an AI—we use a large language model, I think GPT-4.1—and we use Starling to actually make sure that this solution is made available to ANMs using both text and speech. Both! So an ANM can just dictate saying: 'This lady came with this problem, she was exhibiting these symptoms, what is it that we should do?' And the responses that the AI is able to give on a limited universe of information, thereby eliminating hallucination, ensuring faster response time and lower latency, results in a public health solution which not only benefits the mother and the child, but benefits the health worker. Because it creates that sense of confidence and self-belief that: 'Yes, I can do this. Main yeh kar sakti hoon.' And besides this, it also acts as a means of continuous learning. So it's not just a point of time; I can ask a question at any point of time. ANMs are way more busy than anyone in this room—way, way more busy! So for them to have something that responds in both text and speech, and has guardrails from a safety standpoint that the ANM does not start making clinical decisions—no clinical decisions, only advisory work, and only work which helps the ANM do their job. I'll stop there."
  },
  {
    id: "seg-8",
    startTime: "38:09",
    endTime: "40:21",
    secondsStart: 2289,
    secondsEnd: 2421,
    speaker: "Vivek Prakash",
    speakerTitle: "Product Manager & Growth Head",
    organization: "SuperApp",
    theme: "Supervision, Multimodal Collaboration, and Enterprise AI Workflows",
    text: "So yeah, we heard two perspectives: one from child, one from these workers and how they can manage. I talk completely from a generic point of view. Agency through AI is possible only when it is collaborative and supervised. Because AI hallucinates—we all have seen that. And currently, AI is nothing more than just a chat window in isolation, where you are managing your chat window personally, somebody else is managing, we're just seeing the output. We are not seeing all the context, all the input thrown by the child, all the supporting documents, supporting materials, the wordings—and we just see the output and kind of decide.\n\nSo when collaboration comes into the picture—see, we all actually tend for shortcuts, right? When you're getting the answer, you do not go into the deep research: why it came, how it came. And AI is going to stay, right? And these models which basically test that if it is generated by AI or not, I believe eventually AI will overpower those tests and it will start generating responses like humans. So supervision and collaboration is the key.\n\nAnd at SuperApp, we are working in that direction. I forgot to introduce myself: I'm Vivek Prakash, product manager and growth head at SuperApp. And here we just provide you the freedom of models, where you can select any model—the frontier models from Gemini, Claude, ChatGPT—and you can add your entire team, entire organization all in one place. The entire working, like from input to outcome, is witnessed, is supervised, is governed. It's not somebody who's throwing a document and they do not know how it has been processed. So I think that can lead to a good direction of how agency can happen through AI."
  },
  {
    id: "seg-9",
    startTime: "40:21",
    endTime: "42:47",
    secondsStart: 2421,
    secondsEnd: 2567,
    speaker: "Vidhi",
    speakerTitle: "Head of Responsible AI & Governance",
    organization: "Future Shift Labs",
    theme: "From Knowledge to Wisdom: Parable of Kung Fu & Youth Mental Health",
    text: "Hi, my name is Vidhi, and I'm head of Responsible AI Governance at Future Shift Labs. So when I read the question—how to distinguish between being able to operate a technology versus using it to exercise meaningful agency—I feel it's a journey from knowledge to wisdom. And very grateful that His Excellency started the conversation rather philosophical and mythological.\n\nI want to quote a Kung Fu parable that there is: it's called at the 18th level of Kung Fu mastery, we learn the capability of—we learn how powerful it is, we learn to hurt somebody with just a flick of a finger. But at the 36th level, which is the ultimate level, we learn when not to fight the foolish! So that knowledge to wisdom is the journey which creates the difference.\n\nAnd I'll give two examples here. For example, gentlemen lawyer here who was earlier talking: he has spent time, money, effort, patience in getting a legal expertise. And now this technology has come where I pick up my phone, I ask ChatGPT: 'What does this law mean?' and I'll just say, 'Oh, I know this law.' But do I have the wisdom to use that law at the right time, at the right space, in front of a judge? No.\n\nSo I believe that wisdom requires time, patience, everything. So when we talk about training people at a remote village or some place—great! But that module needs to be broader than just telling them the capability of this technology, but also telling them that probably it will take more time, patience, but to tell them that how to use that with creative wisdom.\n\nThe last example that I want to give is one research study that I was doing was on AI and mental health, and how Gen Z is using chatbots like ChatGPT as their emotional support or therapy. A therapist has spent years in setting some expertise, but then a ChatGPT comes in, tells them, gives them knowledge on random things about emotional support, and they are asking questions like: 'How do I talk to my father?' So that personal therapy is going through ChatGPT. So I believe that is from knowledge to wisdom is the journey."
  },
  {
    id: "seg-10",
    startTime: "42:47",
    endTime: "44:57",
    secondsStart: 2567,
    secondsEnd: 2697,
    speaker: "Participant / Legal Sector",
    speakerTitle: "Legal Practitioner & Policy Analyst",
    organization: "Legal Services Sector",
    theme: "AI as the Great Equalizer vs Guardrails & High-Risk Domains",
    text: "Just to chime into what she said: I think AI is extremely powerful, it is a great equalizer. But it does not replace human judgment and the legal expertise that I have. What has meaningfully changed work for us as well: associates don't run around doing redlining, checking precedence—they are coming up with strategic solutions. What has changed for the general user: say a traffic cop is handling someone, you can of course open up and you have pushback. You want to start a business, you don't know where to do registration, you can figure out which filings to execute.\n\nBut I want to talk about high-risk areas: healthcare, financial services, national security, telecom, and whatnot. We put them in the high-risk bracket, right? And I want to understand: how do you deal with deviation? What are the guardrails if there is a deviation? Do you use certified AI consultants? If there is a human-in-the-loop, how do you manage that?\n\n[Speaker from ARMMAN responds briefly]: Absolutely, human-in-the-loop, there's also a process of evaluation. When you're training an AI for a particular purpose, you have to make sure that there is a pre-post test, there is 100% evaluation which is done for a significant period of time till confidence is built with experts and users both evaluating answers before it becomes a public tool.\n\n[Legal Practitioner continues]: For us also in the legal services sector, now clients don't come to us with simple redlines or to compile data; they come to us for our judgment, right? To figure out what falls back in a particular high-value work."
  },
  {
    id: "seg-11",
    startTime: "44:57",
    endTime: "47:55",
    secondsStart: 2697,
    secondsEnd: 2875,
    speaker: "Senior Director / Impact Strategist",
    speakerTitle: "Senior Director",
    organization: "Development Sector & Commerce",
    theme: "Frugal AI, Artificial General Intelligence, and the Real Grassroots Divide",
    text: "I thought it's good to speak in the starting to understand the broader perspective from which we come and see. Of course, there are many people sitting here in the room who would be talking on the relevant side of it, how it is changing. My previous speaker has done me some favor by covering the points which I was wanting to mention.\n\nSo I was talking about: see, we talk about AI. There was a whole news around AI whether it was Sagar Manthan or everything. It is the same thing: we had calculator, then came the processor. Humans were required to work out with the processor in the rightful manner. Today it is AI, tomorrow there will be something else—GenAI, Agentic AI, X, X, X. We can keep guessing. But human intervention in any case is relevant, and I call it like 'Artificial General Intelligence'—like you can't just have AI intelligence, you need to have general which comes out with the presence of a human who is an expert in that area.\n\nNow, the expertise in few critical areas, whether it's healthcare, legal, and others where the emotions are required, it's supposed to be on a higher level versus others. So in any case, that's a given scenario. But when we talk about our country, what are we talking about? Gaurav talked about—so I would say the frugal AI solutions which are required to empower people. What we are talking about: access. Access is okay, happening, lots of bigger initiatives done by the government. But now how do you bridge that gap rather than broaden the gap?\n\nI have a technology, we are sitting here, we know English. Most of the people in India don't! 22 officially recognized languages, and there are many more which counts about low-resource languages. So how do we get the real, frugal AI solutions to a person—whether it's related to a farmer livelihood, whether it's to a particular survivor? Yashaswi, you gave your example: you had an access to people, you had a basic knowledge, you had computers, you had everything. You could then work it out—intent was clear, thing is clear. I am a person living in a rural background, I have nothing, maybe some education or may not be, but I have access to the phone. How can I use AI for my survival in a better way than what I am doing it currently? It could be even for my job, it could be for my daily routine work or accessing anything.\n\nSo that's what I would love this house to come out with the solutions, because that will help the chamber to project it to the government or to the industry which have to work in a collaborative way. All the input data which we have to put it in that box has to come through this collaboration. So that is really important, otherwise we will be talking about multiple solutions like Gaurav mentioned, human intervention, standardizing, validation—it will keep on happening. But we want it at a scale level: 1.4 billion, 4.5 billion—that's something. And that's why we talk about India being a part of Global South, or working on the LDCs or SIDS, all those areas. That is the only way we can reach out."
  },
  {
    id: "seg-12",
    startTime: "47:55",
    endTime: "49:16",
    secondsStart: 2875,
    secondsEnd: 2956,
    speaker: "Yashraj (Yash) Mukati",
    speakerTitle: "Founder & CEO, Wasabi AI",
    organization: "Wasabi AI",
    theme: "Responsibility at Population Scale: Who Owns the Onus for the Have-Nots?",
    text: "Thank you so much. So when we talk about population scale, at scale of 1.4 billion people, 1.4 billion is one part, but the other part is people. And when we talk about people, in the context of development, we don't talk necessarily about the 'haves'—we talk about the 'have-nots'. We talk about the people who are in the most marginalized places, who might not have the access which I had.\n\nIn that context, where does the responsibility lie? Where does the onus lie to actually help that population which is not a part of 1.4 billion, which is the majority of 1.4 billion, and that too just in the Indian context? But when we talk about the global context, that is more than 95% of the world which doesn't have access. And we have to think very specifically: do we give that responsibility to think about what access and agency means for them to the corporations which are building those technologies? Do we look at the government to build those things? Are development partners, implementers, funders looking at this? So what is the perspective in the room? I want to gather the insights around that."
  },
  {
    id: "seg-13",
    startTime: "49:16",
    endTime: "52:39",
    secondsStart: 2956,
    secondsEnd: 3159,
    speaker: "Prof. (Dr.) Charu Malhotra",
    speakerTitle: "Professor & Project Lead (MANAV AI)",
    organization: "Indian Institute of Public Administration (IIPA) & MeitY",
    theme: "MANAV Responsible AI Framework, Eastern Philosophy & Grassroots Systems",
    text: "So thanks, I'm Professor Charu from Indian Institute of Public Administration. I represent government as you can say, probably a think tank as well. So I would just start from where the question left us. I was invited by UNGA earlier to talk about how AI is responsible or not. And if some of you are aware, Dr. Parishrut is here, India has come up with MANAV framework, which is actually our responsible AI framework, and I work very closely with Ministry of Electronics and IT, MeitY per se.\n\nEven in New York, I said the same: I said what Eastern philosophies have always focused on is 'less for more'. That means we have frugal resources, we have lesser capabilities, more people on the wrong side of digital divide, and yet we have come up with way back in 2018 'AI for All'. Whereas Western philosophies have been more personally centric, individually centric, cost-benefit, cause-and-effect. So my vision is not to isolate the two, but to kind of bring them together, and that's the job I'm doing.\n\nAnd just for the knowledge of the whole house: the first AI program I wrote was way back in 1983—I think some of you were not even born! Using Fortran! And then I went on to write on AI and ethics, a paper for ITU which became very controversial, where I said that ethics in AI can be implemented only when we blend intellectual quotient with emotional quotient and spiritual quotient. And the jury debated, you know ITU how it is formed! But anyway, I still won the best paper award, and that model has been picked up now and is being implemented.\n\nSo what is the core point to answer? Number one: it is nobody's responsibility, but everybody's joint mission. Okay? That means startups, that means academia, that means industry, that means government policies, but more than that, I always say that means community. You have to make community participation as a core. And when would community participate? When the indigenous knowledge systems, the traditional knowledge systems at the grassroots—and I've gone to 600 villages to see how it works through IIT Delhi where I did my PhD—so when you blend traditional knowledge systems with modern systems is the time community finds a reckoning in the technology. And that is the time technology becomes more localized and yet globally competitive.\n\nAnd that is what my philosophy is. What do I do? I'm trying to work on AI versus AI in cybersecurity, trying to bring up a responsible AI framework for Government of India because I have that privilege. And last but not the least, all the Digital India initiatives, I'm trying to do their impact assessment—I've done I think almost 80 of them, right from Poshan Tracker, sir, please have a look at that when you talk of maternal health, and to Digi Yatra to Data Lake, trying to blend AI in these initiatives without intruding into privacy of those who matter the most. Thank you."
  },
  {
    id: "seg-14",
    startTime: "52:39",
    endTime: "53:25",
    secondsStart: 3159,
    secondsEnd: 3205,
    speaker: "Yashraj (Yash) Mukati",
    speakerTitle: "Founder & CEO, Wasabi AI",
    organization: "Wasabi AI",
    theme: "Monitoring Agency: Defining North Star Metrics for Implementers",
    text: "When we are saying agency, when we are saying capabilities, and we talk about monitoring: what do we monitor? What is our North Star metric over there? Are we monitoring how many people do we train? Does it mean, does it translate to agency? Or do we monitor how many products people build? Does that mean agency? What is it, or is there something else? And I want to hear it from an implementer's point of view: people who have implemented such kind of products at the grassroots. What is it that we track? What is it that we look at and say that this works? And even from a CSR perspective and a funder's perspective. Yes, sir."
  },
  {
    id: "seg-15",
    startTime: "53:25",
    endTime: "56:32",
    secondsStart: 3205,
    secondsEnd: 3392,
    speaker: "Suresh Reddy",
    speakerTitle: "Director",
    organization: "SRF Foundation",
    theme: "Education at Scale: 15 Lakh Schools, Producers vs Consumers of AI",
    text: "I am Suresh Reddy from SRF Foundation. So I'll take the example of education sector. As on today, we have 15 lakh schools, around 25 crore students studying there, and 95 lakh teachers. Out of 15 lakh schools, 11 lakh plus are the government schools, the real grassroots. One of the teachers, she is at the age of 53 years old. A day before yesterday, I was talking to her. They said that all the teachers of the government school, they have to appear for a Sunday exam, a test. That is a computer-based exam. She is 53 years old teacher in a school. She says that: 'I don't know how to write a test on a computer. I know how to use the mobile phone, but who uses the keyboard? If you want to type your name, surname, father name, I don't know anything!' So that is the state of affairs. I gave the example of one teacher, but I'm talking about the scale as the country goes.\n\nWhen I talk about the AI part, we have to see both important groups for agency: there are two kinds of people—one are the producers, other are the consumers. When you say AI platform, the producers are those who produce the AI tools, AI platforms. And internet is for the access. So if we provide the tools or platform, internet, you are providing the access to everybody in the country.\n\nSecond thing is: how they're going to use it? It's a personal, individual choice. It's not that everybody uses the same way. A mobile phone is there: mobile phone I use differently for my own purpose, personal or professional. Same thing somebody living in a tribal area, that person uses differently. Mobile phone is the same! Like AI tools or platforms are the same for everybody, but how do you use it? So there it requires some kind of hand-holding, a kind of hand-holding and supported structure. It happens eventually, whether you are there or not there, over a period of time. But if you want to make sure that the inclusiveness and the AI readiness is available where they can make use of it to solve their problems, then you have to take all along with you. From that point of view, you have to build their capabilities.\n\nSo monitoring, you said: what is that North Star metric? You have to have the monitoring indicators both for the producers and consumers. What are the tools they are creating, how they are effectively used? Even the mobile phone: iPhone is there, small normal phone is there. If you want to provide access to the people, that tool should be creating that how it is affordable, scalable, sustainable kind of thing, and also it is not misused. So you have to have the monitoring indicators for the producers and consumers."
  },
  {
    id: "seg-16",
    startTime: "56:32",
    endTime: "58:18",
    secondsStart: 3392,
    secondsEnd: 3498,
    speaker: "Participant / Health & Trust Lead",
    speakerTitle: "Initiative Lead",
    organization: "Rajkumari Trust & Partner NGOs",
    theme: "Redundant AI Solutions vs Collaborative Consumer Discovery",
    text: "I would like to add to Suresh's point. Something happened just half an hour back on this floor. Dr. Navneet is here from Rajkumari Trust, and with him we conceptualized an AI model for ANMs to make sure that pregnant women could record what is happening day to day. They have the agency, they don't have to wait or feel shy: 'Will my husband take me to a doctor or not?' There's a chatbot they can approach. And we were sharing it with Gaurav, and Gaurav said: 'Hey, we already have it! Why are you developing it?'\n\nSo I think a big thing is what Suresh said: all of us don't have to be producers of products, right? I really liked when she talked about frugal AI solutions. I think the real agency would come in when have-nots that we talked about at least knew where to go to find: 'Has somebody built a solution for the problem that I am facing?' to the point that Suresh said: consumers, right? Everybody, the parties that you said—organizations that are building AI, governments that are making sure that people have the access, companies that are providing internet—of course everybody has a role. But from consumer's point of view: do I know where to go to find what I need? I not necessarily need to become a somebody like you who makes a product with 12,000 subscribers. That's my intervention."
  },
  {
    id: "seg-17",
    startTime: "58:18",
    endTime: "59:48",
    secondsStart: 3498,
    secondsEnd: 3588,
    speaker: "Ravishankar (Ravi)",
    speakerTitle: "DPI & Impact Strategist",
    organization: "DPI Social Impact Initiative",
    theme: "The Discovery Problem: Solving Search & Access in Native Languages",
    text: "If I can add to that: so I think she hit the nail, and it will be a very difficult problem to solve. In our country, I believe—by the way, I'm Vishwanathan Ravi, and I lead the Digital Public Infrastructure platform. So discovery—if you're looking to solve the discovery problem, right? That's a very, very fundamental problem in India. I don't know which is my nearest ration shop. I don't know if I have migrated from one state to the other, what do I need to do? I'm struggling to find BDOs (Block Development Officers) who can enroll me back to a scheme. So there are so many things which are discovery.\n\nNow, the place where the most impact can happen or the agency can get introduced is discovery, okay? And discovery in a language of choice: Santali, Assamese, Bengali, whatever the language. So when search, when you're resolving for a search problem in the context of social impact, the monitoring will be difficult. I'm not sure if it's the real aim. When it comes to fulfillment, then perhaps yes. But in case of discovery, my limited understanding of whatever I've done so far: it's not measurable. It only will translate eventually to fulfillment, which will become measurable."
  },
  {
    id: "seg-18",
    startTime: "59:48",
    endTime: "62:16",
    secondsStart: 3588,
    secondsEnd: 3736,
    speaker: "Representative, Embassy of El Salvador",
    speakerTitle: "Diplomatic Representative",
    organization: "Embassy of El Salvador in India",
    theme: "Tropicalizing AI: Small Developing Nations Adapting Big Tech Frameworks",
    text: "So I know that we passed a couple of questions, but I'm from the Embassy of El Salvador, and we are a very small country in Central America—we're not in South America as people think! But the thing is, we just created an Artificial Intelligence Agency, and we are working in creating some new policies. So I was very intrigued about your expertise as part of the Government of India, because I think the responsibility really lies in a good part on the government.\n\nBecause you need to think about the context of every country. As a developing country, we are very small compared to Norway, compared to every other, or even India! So sometimes when we extract some knowledge and the things that are working for other countries are not quite similar to implementing that in America, in general. Because we have different contexts, different technology, different acknowledgments. So we really need to see what is working, but we have to make it—we call it 'tropicalize'. So we need to work on the measures that can be implemented in this case in El Salvador.\n\nBecause sometimes we are thinking big, we don't have the same economy, we don't have the same population, we don't have the same economical sectors, for example. So it's not very useful for some other countries that are as small as ours to implement those big ideas, because they are not going to work at all, as for example your country. So I think you need to see—all countries must be seeing the full picture about what is going to work for them, and then maybe create some measures as public servants to introduce them and to make it know more closer to the people. Because we have a vision as a country that if we are building AI, if we are trying to attract this kind of technology to our country, it's going to be people-centric."
  },
  {
    id: "seg-19",
    startTime: "62:16",
    endTime: "66:47",
    secondsStart: 3736,
    secondsEnd: 4007,
    speaker: "Dr. Namita Wakhloo",
    speakerTitle: "Founding Director, Land Rights Initiative; Senior Fellow",
    organization: "Centre for Policy Research (CPR)",
    theme: "The Bottom 60%: Adivasis, Land Rights, Water Scarcity & Data Center Displacements",
    text: "Hello everyone, I'm Namita Wakhloo. I'm founding director of the Land Rights Initiative and senior fellow at the Centre for Policy Research. I want to first thank the Norwegian Embassy and Wasabi for hosting this conversation. I wanted to start with just the title of the conversation: 'AI for Everyone'. And as I was sitting and listening to other people's observations, when we say like 'AI for Everyone', it also means that everyone ought to be part of the conversation. And right now, when we say there are 1.4 billion people in India, Mahatma Gandhi, the father of the nation, said India lives in its villages. And it's true: 80 years ago, 80% of India lived in its villages; it's true today that 60% of India lives in its villages. 46% of Indians are directly dependent upon land for their livelihood.\n\nSo many of the conversations we're having about the economy is a very small percentage of India as we see it, right? And what we see generally is that urban India seems to direct a lot of the policy conversations. And within urban policy also, we are seeing a move away from the fact that, you know—the Ambassador started with the story of the Samudra Manthan. What came after the Manthan was a fight between the demons and the gods! And that's really a lot of power tussle. And what happens in power tussles is that the marginalized lose, right? And who are the marginalized? There's marginalization based on economic class, digital divide, caste, gender. So I have this concept of the bottom 60%, which is like 60% of India's population: women, Dalits who have been historically marginalized and systematically discriminated, and Adivasis who also suffered.\n\nAnd it's not just that Adivasis are people who are indigenous. 13% of India's geographical area falls in what we call scheduled areas; 21% of India's land falls in forests. There's a significant overlap between forest land and scheduled areas, which means that all development projects of all kinds—and AI needs data centers, and those are also classified as essential infrastructure projects—all development projects have disproportionately impacted the Adivasis. Adivasis or Scheduled Tribes, they are 8.6% of India's population, yet they constitute 40% of people who have been displaced due to development projects from 1950 to 1999 in a period of 50 years—some more than once in one lifetime!\n\nSo that is the scale of displacement and devastation that we are talking about with a small percentage marginalized section of population. I've been working with Scheduled Tribes and Adivasis for a couple of decades, and I will start with an example of just—you know, we're talking about very big technology topics, but let's start with something very simple, like a road. You know, there is general understanding that a road is a good thing to build. But when you go and speak to the Adivasis, they're like: 'What kind of road is good for us? We want small roads, a road to take us to the nearest hospital so that we don't die. What we actually have are these huge highways being built to take resources out of the forest and to displace us further.'\n\nSo whenever we talk about any kind of technology, we need to have those people in the conversation to begin with, because their perspective is going to be quite different from ours. And they have to be part of the production of the technology as well as its regulation. Because the only thing that regulates power is law and regulation. Unfortunately, in India over the last two decades, we have seen this huge impact on deregulation driven by industry in part. And what that means is that right now we do not have a law on AI data centers. We don't even have—I mean, there are existing laws which can be used, but they are not being put into effect.\n\nThere are conflicts—I work on land acquisition and land conflicts—and there are serious conflicts over acquisition of land, water. Data centers consume a lot of water! There is no conversation about where these centers ought to be placed, are local communities going to be consulted? Which has been a problem with all development projects. Land acquisition and water utilization is a problem with all development and industrial projects. And yet, data centers have been deemed as essential projects in infrastructure, and yet there is no conversation, significant conversation, or attempts to regulate this before we even begin to start, and to minimize the imbalance of power. I'll stop for now."
  },
  {
    id: "seg-20",
    startTime: "66:47",
    endTime: "68:45",
    secondsStart: 4007,
    secondsEnd: 4125,
    speaker: "Srikanth",
    speakerTitle: "Head of CSR",
    organization: "Indian Oil Corporation Ltd. (IOCL)",
    theme: "Grassroots AI Labs: When 50km from Silicon Valley Still Means First Computer Touch",
    text: "Slightly different take: we have been discussing about AI accessibility and agency. So I'll just narrate a small example. We recently wrapped up a project wherein we have set up a smart AI lab in a village which is just 50 km away from Bangalore. To our surprise, we have noticed that many of the girl children, it was their first time laying their hands on a computer!\n\nSo now we are talking about a place which is just 50 km from the Silicon Valley of India. So I talk about agency later; for me, my priority is AI accessibility. I come from Indian Oil, I'm Srikanth, I head the CSR. So as a CSR practitioner, I have my footprints across every nook and corner of Bharat. India's popular imagination might revolve around cities like Delhi, Bombay, but the soul of India resides in villages. So how do I make AI accessible to these villages, to these remote hamlets? That is one way of looking at AI, and in fact I was looking forward for that discussion to happen in this room. Thank you."
  },
  {
    id: "seg-21",
    startTime: "68:45",
    endTime: "69:26",
    secondsStart: 4125,
    secondsEnd: 4166,
    speaker: "Yashraj (Yash) Mukati & Participant",
    speakerTitle: "Founder & CEO, Wasabi AI & Roundtable Participant",
    organization: "Wasabi AI & Forum",
    theme: "Generative AI vs Search: Are We Diverting from Foundational Needs?",
    text: "[Yash Mukati]: I want to react to what you just said: how do we make AI accessible in those spaces? Because access is there: people have phone, people have internet, then they can definitely have ChatGPT. So access is there, but what do they do with it?\n\n[Participant]: The moment we talk about generative AI as a means of access to AI, we are diverted from the very basic need for which AI has been built. Generative AI is nothing but a better version of a search engine. It's not giving any advantage economically or socially. The moment the discussion limits ourselves to generative AI, we are losing the broader view."
  },
  {
    id: "seg-22",
    startTime: "69:26",
    endTime: "70:35",
    secondsStart: 4166,
    secondsEnd: 4235,
    speaker: "NGO Representative",
    speakerTitle: "Program Lead",
    organization: "Children in Vulnerable Situations NGO",
    theme: "The Digital Intimidation Barrier: Fear of Damaging Devices in Slums",
    text: "Namaste. I work closely with street-connected children and vulnerable communities, and they have very limited access to technology. Because on a daily basis they are struggling with getting their basics, so they do not have an access to technology and even don't have time to think for all these things. So whenever we try to teach them through different means and interactive activities, sometimes it makes me feel like: are we making it wider, like more gap between privileged and non-privileged?\n\nThey do not have access to use what I am teaching through AI, so this is getting wider gap between the children who have the access and who do not have access. Which affects their confidence in overall, because sometimes they feel ashamed of asking a very normal concept because they do not have access. Everyone is ashamed of, but they have access to go and just check it, read and come back again, but they don't have. Thank you."
  },
  {
    id: "seg-23",
    startTime: "70:35",
    endTime: "72:39",
    secondsStart: 4235,
    secondsEnd: 4359,
    speaker: "Dr. Navneet",
    speakerTitle: "Founder & Lead",
    organization: "Sparshbio Foundation",
    theme: "Frugal Enterprise Tech: Building a ₹15 Lakh Web App for ₹50,000 Using AI",
    text: "Hi, I'm Dr. Navneet from Sparshbio Foundation. I listened to all of you about policy-making and policy perspectives and implementation perspectives. I put up a different perspective: like our organizational point of view, I would like to bring in.\nYou have mentioned the capability and being independent. We all know right now AI comes with a cost—a cost that everybody is talking about at a higher level basically. Everybody is trying to minimize the cost for that AI and all that. But we recently developed an organizational tool, you can say, or a web app for our own use using the AI, basically to streamlining our financial and project management aspects.\n\nWe used the emerging platforms to build that software app. And to my surprise, it is very cost-efficient and very effective. Like if I went to the open market to get that app developed, I'd definitely shell out ₹10 to ₹15 lakhs for that thing! But it cost me ₹50,000. And it is—my team is using it right now! And it is all because of the AI organizational like us who are growing right now, where optimizing costs is another challenge. And AI is helping us out in optimizing our own costs, and getting the latest technology, compliance, and streamlining the organizational structure. It is helping us out. So this is one very practical use case that we are having."
  },
  {
    id: "seg-24",
    startTime: "72:39",
    endTime: "76:01",
    secondsStart: 4359,
    secondsEnd: 4561,
    speaker: "Yashraj (Yash) Mukati",
    speakerTitle: "Founder & CEO, Wasabi AI",
    organization: "Wasabi AI",
    theme: "Ceiling vs Floor: Outsourcing Human Decision-Making to an AI Intelligence Layer",
    text: "So when we talk about AI or any larger technology or any policy matter, one way to look at it is from a ceiling point of view, right? We look at what the technology can do, what the best capability it brings and what it can do. And then we talk about at the floor level: that this is the bare minimum, this is where it is right now. Even someone with the least amount of access, least amount of capability has this much access. And that is where it becomes very interesting for me, and that is where Wasabi is also working at.\n\nAnd from that context, let me take this conversation forward: when we are talking from an individual lens, the conversation is different. But when we talk about it at the population scale, then we have to go back to what ma'am was saying about the data, the infrastructure, the regulations. And one thing we cannot undermine: that a lot of decisions which we take as a society, we have now outsourced decision-making!\n\nWhat the Deputy Ambassador was jokingly asking—how many of us will take advice from AI for life partner? Well, we might not be taking advice from AI for choosing a life partner, but we definitely are taking advice in so, so many things. And these are very integral parts of our daily lives as well as professional lives. And I'm sure most of us in this room have taken some professional decision based on what the suggestions or the discovery part of it—whatever the AI helped us discover, our decision was based on that.\n\nSo collectively, for an individual it means that discovery was fast. But collectively as a society, what we have done is: AI has become an intelligence layer for humanity. Right? AI is taking decisions and driving where we are moving as a society. And again going back to what the Deputy Ambassador was mentioning: that we tend to underestimate the potential of technology in the longer run. And this is where I feel that it has the largest impact or the space we should be very concerned about. And that is why we need to be very cautious about what kind of infrastructure as a society we are building.\n\nAnd this brings me to the conversation around the DPIs and DPGs. One part of it is about building the infrastructure: the data, the compute, and everything. But then comes: how do we incorporate that AI's intelligence layer about making better decisions? And well, I'll just open the floor and whoever wants to start with the conversation..."
  },
  {
    id: "seg-25",
    startTime: "76:01",
    endTime: "78:23",
    secondsStart: 4561,
    secondsEnd: 4703,
    speaker: "Parishrut",
    speakerTitle: "Founder & CEO, GoverniAI",
    organization: "GoverniAI",
    theme: "AI Winters, Red-Teaming, and Integrating AI into the Public Distribution System (PDS)",
    text: "Hi, I'm Parishrut, founder and CEO of GoverniAI. And this is the fourth stakeholder meet of Digital at UNGA, and we have been pulling up the inputs and we will be making this report and sharing it with the agencies at ITU and UNGA.\n\nSo before we get into DPI, I just would want to say: at GoverniAI we have been working with state governments and central government agencies, including our Defense Ministry. So across the path when the AI has came into the picture, the conversation where the AI was just a synonym to maybe ChatGPT, right? That's how—and even 1956 is when the benchmark 'AI' was coined. And the problem which our society will be facing because of the marginalized problem or because of the scarcity of the resources is the AI winters, right? Because earlier also the investments—the ELIZA chatbot also came in 1966, same as this Generative AI is just mere a chatbot at the end of the day, right?\n\nSo now when we will be bringing agency, it will be through the DPI, right? And 2001, since then we have the different mission mode projects also of the Digital Public Infrastructure. So I would want everyone's input: now we understand that there are some at an individual scale we have some issues and problems which marginalized communities have been facing. And trust me: when AI will be integrated in PDS (Public Distribution System), then we will be facing real problems—the problem of drift and deviations in the model. There are tools like LIME and SHAP; we have the teams of red-teaming at GoverniAI where we do audits of these AI systems. But I would want to really gauge, as Yash has mentioned: how each and every individual who has been present in this room representing their organizations, do share with us how we can enable it and their some issues or some anecdotes they have experienced in the existing DPI also."
  },
  {
    id: "seg-26",
    startTime: "78:23",
    endTime: "80:03",
    secondsStart: 4703,
    secondsEnd: 4803,
    speaker: "Participant / Youth & Education NGO",
    speakerTitle: "Education Lead",
    organization: "Youth & School Education NGO",
    theme: "Teaching Fundamentals First: The ABCs of AI Before Large-Scale Rollouts",
    text: "Hello everyone, I'm from an education NGO, and we do life skills programs. I see AI—the time when computers were introduced, everyone was very fearful of computers, right? And we did question that a lot of important skills that children develop while writing will be lost. But then now, still computer is—no one asks if you know computer, it is a very important skill you need to have. But still at a very early stage in play schools, always children are taught first how to draw horizontal, vertical lines, write ABC, right?\n\nSo I think AI should also be introduced in the same way, instead of us introducing AI on a larger scale for the marginalized or any population to utilize it. Instead, first we need to explain, especially our youth—because we work with youth, we work with school students—so we need to first explain them what AI is. Then only they'll be able to understand what conclusion are they getting out of AI.\n\nNow let's say for my side hustle, for my jewelry business, I have created an automation where the entire social media post, video, everything, my AI agent is making and posting it on my behalf. But then for someone else, maybe a rural woman sitting in a village, for her to use that, she first need to know what AI tools are there, how, what all things she need to tell that AI agent, and what all things she should not disclose to AI. Thank you."
  },
  {
    id: "seg-27",
    startTime: "80:03",
    endTime: "82:24",
    secondsStart: 4803,
    secondsEnd: 4944,
    speaker: "Co-Founder / Team, BodhBridge",
    speakerTitle: "Lead - Rural Tech Solutions",
    organization: "BodhBridge / Postman StudioWorks",
    theme: "NariBot: Voice-to-Ledger for Self-Help Group (SHG) Women on Bhashini",
    text: "On that note, picking up clues: so I've been working with rural and SHG women entrepreneurs for over five years. Postman StudioWorks is our startup, and we have impacted, supported over 5 lakh plus women. And this has been completely on the ground. I've been asked multiple times over the last half a decade: what is your business model? What are you trying to achieve? But we did not touch tech per se, even though I had built and scrapped five apps in between!\n\nSo this year we came up with something called as NariBot—and I would love to exchange notes, Gaurav, with you later. So NariBot sits on the Bhashini and AI4Bharat platform. We started off with: let us put the woman in the center when we are doing these capacity building trainings. As you said, continuity is an issue: how can she go home, take care of kids, household chores, and then remember what was taught in the training, and then implement it as well? What are we doing with her and the field teams?\n\nSo that was how NariBot came about, and we have a layer called the Voice-to-Ledger as well, where she says her economic activity and it starts generating the bookkeeping layer reports as well. This is also available to her via IVR, SMS, and WhatsApp. So coming to your point: how can we introduce them? There have to be humans in the loop. That was a beautiful movie also that was made! They have to be the faces that she's familiar with to introduce her to tech and design everything around her, and she tells you back what is working.\n\nSo what we are hearing from the field is: 'I was scared and shy to ask these questions, and the CRP meetings with the field teams, now I don't have to worry about. I can ask NariBot these questions.' And the field teams can see, instead of just seeing 15 days, 20 days what her journey, what her challenges are, they're seeing everyday conversations on the dashboard with row-level security across districts and states. So they are able to see what are the challenges she's overcoming.\n\nSo this design has happened with working with humans first, not directly jumping into tech. But I would love to see how we scale this, built as a DPI as well. So yes, I'm happy to share thoughts and exchange notes post this."
  },
  {
    id: "seg-28",
    startTime: "82:24",
    endTime: "83:33",
    secondsStart: 4944,
    secondsEnd: 5013,
    speaker: "Vishal",
    speakerTitle: "Grassroots Lead",
    organization: "Ladli Foundation",
    theme: "Digital Confidence: Overcoming Grassroots Fear of Breaking Expensive Hardware",
    text: "Hi, this is Vishal from Ladli Foundation Trust. So exclusion or inclusion, or when we talk about digital access or digital confidence—like there's something which a lot of grassroots are lacking at this point in time. We may talk about access, but when we talk about children, they have the access now, they have been exposed, but they are skeptical to use it full-fledged because of this fear ki woh kharab ho jayega ('that it will get broken').\n\nLike we face such instances because we work in areas like Indranagar in Tapi, Gujarat. And those are tribal areas, and people also have this fear ki woh kharab ho jayega, so they are very skeptical to use it full-fledged. So these are also a couple of things I think grassroots India faces, and I think it is something which we need to focus and look upon. So yeah, thank you."
  },
  {
    id: "seg-29",
    startTime: "83:33",
    endTime: "84:07",
    secondsStart: 5013,
    secondsEnd: 5047,
    speaker: "Yashraj (Yash) Mukati & Participant",
    speakerTitle: "Founder & CEO, Wasabi AI & DPI Consultant",
    organization: "Wasabi AI & Global DPI Practice",
    theme: "Clarifying the DPI & Inclusion Problem Statement",
    text: "[Participant]: Yash, if you could re-articulate what you're looking for? The first one was clearer in my head, maybe it's just me, I'm not clear what we're trying to...\n\n[Yash Mukati]: Let me do that once we hear from you."
  },
  {
    id: "seg-30",
    startTime: "84:07",
    endTime: "86:00",
    secondsStart: 5047,
    secondsEnd: 5160,
    speaker: "DPI Implementation Lead",
    speakerTitle: "Global DPI Architect",
    organization: "Co-Develop / Multi-Country DPI Implementation",
    theme: "Impact Statements, DIKSHA Lessons, and Graded Learning Pathways",
    text: "So we were talking about DPI, right? So DPI, I think having done DPI implementations in almost 15 countries, I think where it has to actually begin is getting the impact statement right first. If you don't have that right, you will not end up solving the correct problem correctly. There are two aspects to that particular statement.\n\nAn ID in India kind of helped deliver direct benefits over a point in time without leakages, right? When pandemic happened, DIKSHA picked up and helped us deliver education at home to several children. But if we were to rewind, will we do it the same way with AI is the question, right?\n\nCan you deliver the same course that QR code-based book and just that book showing up on a phone or a computer for a parent or for a student, or would you create graded learning pathways for different children with different capabilities using AI? So to distinguish what you are looking to do on a DPI, and having the—I think where we probably are shy as Indians is, you know, having a hand on your heart and saying: 'This is where I went wrong, and this is where I could have done better.' Unless and until those learnings surface for AI, friends like the friend who was there from El Salvador, we will end up making the same mistakes in that country.\n\nAnd probably trying to fit an elephant in a shoe box will also happen: that we're taking a very complicated approach to probably a problem which could have had a very beautiful, elegant solution. So there will have to be a lot of learnings to come in first to precede the right fitment of AI and solutioning for DPI."
  },
  {
    id: "seg-31",
    startTime: "86:00",
    endTime: "89:24",
    secondsStart: 5160,
    secondsEnd: 5364,
    speaker: "Yashraj (Yash) Mukati",
    speakerTitle: "Founder & CEO, Wasabi AI",
    organization: "Wasabi AI",
    theme: "The AI Intelligence Layer on Top of DPI: Data Bias and Sovereign Systems",
    text: "So when we are talking about the AI implementation at a population scale, the perspective which I want to bring out of the room or I want to understand is: having certain infrastructure, like basic infrastructure of digital infrastructure we have. But when we put in that infrastructure, we put a layer of intelligence: how does public system change? How does it evolve? Because it's not just about—now it is more about the interaction between the government, between the welfare state and the individual at any part of the country directly.\n\nAnd this is much more autonomous, and especially given the context of AI being part of it within that DPI. Because Aadhaar exists, but if I don't have an application of it, but within the Aadhaar ecosystem if there is a strong AI system which is helping do a lot of things: so how do we rely on it? What are the factors?\n\nThen the other which is very critical factor which is there is about the data. A lot of non-profits I have talked to, they have built their own model, they are trying to do certain things, and often end up not getting the kind of results which they want, because it feels like the data which they have picked, which they feel is the data of the people, somehow does not convey the reality of the people! So that is our assumption that this data is the right data, but is this data which can tell the right kind of information we want? The contextual reality is too wide.\n\nSo when I talk about whose realities does data and this system represent: how can we make more inclusive? What ma'am was talking about the exclusion part of it: so how do we go to communities which are not documented yet, or haven't been—who are extremely underrepresented? It feels like AI is not for them, because the data is not there.\n\nWhen we are talking about exclusion and complexity, Gaurav, a lot of pilots have worked, and pilots work in their microcosm. But the moment we try to go beyond and add more complexity and reach, they break. And then what sir said: that we should put a heart and say, 'Okay, this is where we failed.' We often don't, and we move forward with faulty things. So all these things are the spaces where I want to hear about the learnings. And specially talking about the last: we have seen so much of geopolitics, and there are countries which get crushed under it, there are countries which are restricting the access, then there are players who hold this access and all the others are at the receiving end. And I think more than the receiving end, we are at the mercy! So how do we create our order where we are not at the mercy—not as countries, not as society, not as section of society?"
  },
  {
    id: "seg-32",
    startTime: "89:24",
    endTime: "91:39",
    secondsStart: 5364,
    secondsEnd: 5499,
    speaker: "H.E. Arvinn Gadgil",
    speakerTitle: "Ambassador of Norway to India",
    organization: "Royal Norwegian Embassy in New Delhi",
    theme: "The Danger of Technocracy: How Over-Optimization Can 'Kill Politics'",
    text: "Yeah, I think I'll just try to make the question a bit more complicated! If you ask me: what's my worry about DPI implementation, DPI design, and follow-up? It's something that may sound a little bit banal at first, or maybe absurd at first, and that is: the killing off of politics.\n\nLet me explain. I can appreciate consultants like Deloitte, but who are designing many of these systems and helping doing it in an efficient way, but essentially they do not understand how politics works—no offense to you, sir! But you know, trying to find the best technocratic solution, the quickest, most efficient solution to develop a system is always their concern. That's how they are hired to do, and that's what they do. But they are horrible in understanding how political legitimacy comes about.\n\nWhat I mean by that is: we are running the risk of designing systems that are so foolproof, so tested by AI, and so difficult to pick apart and question that politics becomes irrelevant. Politics is a measure by or a means by which people can ask the right questions to systems, and thereby making them legitimate.\n\nWhat people think, I think erroneously think, is that the most efficient systems are always the best for democracies. That's not the case! You can have a very efficient system, but it can be completely illegitimate. That's not good for democracy, it's not good for people. And I worry that—again, this is making the question more complicated—I worry that your question unfortunately does not include enough of those concerns which has to do with the process of development.\n\nAnd if we get, you know, Mr. Mukati here to who can develop all our systems and do this perfectly, and we want to apply it immediately, we may actually lose the most valuable thing that we have in our countries: which is participation and legitimacy."
  },
  {
    id: "seg-33",
    startTime: "91:39",
    endTime: "93:05",
    secondsStart: 5499,
    secondsEnd: 5585,
    speaker: "Prof. (Dr.) Charu Malhotra",
    speakerTitle: "Professor & Project Lead (MANAV AI)",
    organization: "Indian Institute of Public Administration (IIPA) & MeitY",
    theme: "DPI Failures in Welfare: Exclusion, Ghost Data, and Living Persons Declared Dead",
    text: "So I'll just give my experience of working with 10 initiatives. So I'll just bring in what are the main concerns, and this paper is coming out just at the weekend by the Minister himself, where we are trying to bring out what's wrong.\n\nAnd number one: in a democratic setup like India, you can't say system did it. So opacity is one major problem when we use DPI, and we are all facing the brunt when we go to see Jeevan Pramaan Patra and why people are isolated. We have similar cases in Andhra Pradesh and as well as in Haryana, where people had to prove they are alive! Or they had to take this care because of the setup which was more at a population scale.\n\nSecond is data quality, which we talked about, but nobody owns the data. So all the data sources are coming from, like my paper says, unauthenticated sources. So when risks are pointed out, nobody is willing to take the ownership. But when the claps happen, everybody says it's my data!\n\nAnd third is the governance part itself: that is how do you govern the whole setup? So for DPI and DPG to work at a population scale, my study shows is that human-in-the-loop, which we've learned from Dr. Parishrut, is the most important thing, which is not just in terms of people manning it, but also looking at outliers and exceptions as the real cases, and not the other way around. Thank you."
  },
  {
    id: "seg-34",
    startTime: "93:05",
    endTime: "98:44",
    secondsStart: 5585,
    secondsEnd: 5924,
    speaker: "DPI Architect & Systems Expert",
    speakerTitle: "Pioneering Technologist & Systems Architect",
    organization: "eGov Foundation / Early UIDAI Architecture",
    theme: "The Origins of Indian DPI: From eGov Foundation (2002) to RS Sharma's ₹5 Twitter Challenge",
    text: "First of all, I think he is right and I am right! He mis-represented me, but anyway, we'll pass on that. So there are two types of systems: the systems which exist in India, and the systems which exist outside of India.\n\nThe systems which exist outside of India are actually the real systems, but deficient of any human touch, or a humanity touch, or a humane touch. In India, for example, I'll tell you: this morning I was actually with one of the Chief Minister's discussion. Before he went to his constituency, he was looking at a dashboard saying that how many people are getting what benefits, look at that, and then he prepared his notes to go and... So in India, systems are prepared by and for the elected majority. It's not for a citizen, it's not for business, it's not for bureaucrats. So it's a different context, and I think people agree, disagree on various facts, but the idea how the systems in India have been built is to actually benefit what you call to provide services for a political gain. Okay? Let's be very transparently clear about it.\n\nAnd that's good, because India went through a very, very torrid time, and then gained the independence, and therefore it was very important to build trust in the political system for the citizens and everyone. Therefore, there was a need for systems to actually go for a connect with the politics. So that's part one. So I'm just saying that please don't ever think that the systems are built, and consultants or system integrators will build systems without the knowledge or acknowledgment of the political ecosystem. Of course, it's not possible.\n\nSo one is a misnomer I want to actually remove. The second is: DPI is at a scale. I think forget about DPI: the word DPI, DPG came about 12, 11-12 years back. The first DPG in India which is now on the—which was created in 2002, so when Nandan started his first philanthropy along with Srikanth Nadhamuni, was in 2002. It was never called a DPI, DPG, or anything. It was called eGovernments Foundation, and that's how that started, and they did the Karnataka project.\n\nThe scale is about solving a problem, and scale is primarily three things: Do I have a kind of a last-mile ability to collect a data point? Now somebody talked about whether the data is verifiable or not: I think every single data is verifiable if we know where is the source. It's only upon us how much investment we do to actually get that data right, or the source identified.\n\nSo one is the data, but the second is: how do I actually run an approach and methodology to collect that data? UIDAI actually failed in the phase one! I think a lot of us were not engaged at that time, because it was long time back. And while we say that ID card is very, very successful today, 10 years it took to cross the legal battles to get a legitimacy for the ID system! ID project in India is not a technology project, it's a law. It's a legal contract, okay? While we talk about something else differently, but it's that.\n\nSo the second is about: how do we actually collect that, the approach part of it? UIDAI actually ran the camps. For disabled people, they actually did it differently. For people who are blind, because retinal scans were required, was done differently. People who actually doesn't have an address—mera ghar bargad ke ped ke bagal mein hai ('my house is next to the banyan tree')—so those were the kind of problems they solved.\n\nThird: how deeply, how at every single level I will incorporate technology? Today, UIDAI is the largest institution which includes AI at a sovereign infrastructure: their own data centers, they use AI. Please pick up the latest app of UIDAI: it will actually do wonders of services and solutions. On that platform, every other application is built. So UIDAI from that perspective has used tech. So if you need to create a project or a program at a scale, you need a technology to be embedded at the architecture level.\n\nAnd built with trust: I still remember, I think it was a hacker called Silver Fox, who challenged Dr. R.S. Sharma saying that 'I'll hack your account!' So R.S. Sharma said: 'This is the ₹5. Even if you take my ₹5, you can only take my ID number, but you'll never be able to reach my bank account.' Open challenge on Twitter at that time! And he failed.\n\nSo it's a security and technology architecture by design when a DPI scales. And I'm telling you because none of the other projects scale because they don't talk about technology and architecture or security at the design stage. Thank you."
  },
  {
    id: "seg-35",
    startTime: "98:44",
    endTime: "100:29",
    secondsStart: 5924,
    secondsEnd: 6029,
    speaker: "Namrata",
    speakerTitle: "Advisor",
    organization: "GIZ India",
    theme: "AI-Enabled vs AI-Driven: Participatory Research & Valuing Indigenous Knowledge",
    text: "Hi, I'm Namrata, I work with GIZ India. I am only focusing on the moving from population scale to AI-enabled. I think the key word here is 'AI-enabled' and not 'AI-driven'. A lot of the solutions that we see proudly touted by state governments and central governments is that plugging a techno-solution to a socio-economic problem. And I think that is where you lose politics, that's where you lose people.\n\nTo navigate a complexity and strengthen institutions, it's important first for the 'haves' to know that the 'have-nots' don't come in and they don't know knowledge. The have-nots come with their own knowledge! You can't plug a app in a farmer's face and say, 'I will tell you what pest problem you have.' The farmer who's been on the farm already knows how to detect! He or she have a different set of problems.\n\nOur point here to make it more inclusive and deliver value is to actually include the farmer at the table, and ask: 'What is it that you currently don't get through the extension workers, and can an AI build for that?' There's an academic term called Community-Based Participatory Research methods, not really used in this particular sector, but it treats the people as equal participatory researchers. You open-source projects, you deliver that value, you don't capitalize on it. There are frameworks where you don't say, 'Oh, the woman does not know how to do this.' Women have a different set of responsibilities and capabilities, and I think that is what we need to build systems that include that knowledge and don't leave that behind."
  },
  {
    id: "seg-36",
    startTime: "100:29",
    endTime: "104:05",
    secondsStart: 6029,
    secondsEnd: 6245,
    speaker: "Aditi",
    speakerTitle: "Director of Capacity Building",
    organization: "Wadhwani AI",
    theme: "Diagnostic Data Gaps: The Endometriosis Mystery & Perverse Metrics in Telemedicine",
    text: "I work with Wadhwani AI, which is a non-profit that has been working in AI for healthcare, agriculture, and vulnerable populations. Now, this whole scenario of a problem to solve: in my head, the problem in the context of a country like India is so large, so varied, so region-specific as well. The same problem looks very different across the entire country, given that there are about 800 languages in the country, the dialect changes every 500 meters, 1.4 billion population, largest in the world.\n\nThe problem is so complex. Seeing it from a top-down macro level, while it is extremely important, is not relevant when you go actually to the grassroots level or to even smaller geographies. Because again, how it looks like in a state like Tamil Nadu will be very different to how it looks like in Delhi.\n\nNow, to give you an example, and most of us over here would also know how AI applications are actually built, right? From the time of conceptualization and when it is in fact even thought through, you think of whether this is relevant to a particular smaller population and geographical location first. Thinking about it as a population-level impact comes much later, as it should. You first go to a specific location, you speak to the particular users or to the governments over there, to particular agencies, you find out what is the problem, whether this is a use case that requires AI to be solved in the first place! That is before you even think of developing something.\n\nOnce you start developing something, you again go back to the ground, you find out from your users in maybe a sandbox setting or a limited user testing setting, whether what we have developed up to this point is again relevant to you as well, or have we lost the message somewhere internally in our organization on the way? After that, once you even go and pilot on the ground, again you go back to a limited population. You figure out whether it is relevant or not: have you missed out on any relevant piece of information that makes this application null and void on the field actually, from how it was developed by a small pool of engineers, data scientists, etc.?\n\nDeployment comes much later, and it might even require you to have gone back to the thinking table, brainstorming table along with all the stakeholders multiple times. Even post-deployment, the idea is for you to keep going back, assessing: model evaluation, impact evaluation, all of those trend studies periodically and not one-off! Because again, context keeps changing. Today, if the health scenario is such, tomorrow a pandemic can come and completely change the entire scenario. There are epidemics, new epidemics have been happening very often; you have got globalization happening. The scenario in a particular geography is constantly evolving. You cannot build an AI model today and expect it to be relevant even like 10 years later—let alone 10 years later, 10 weeks later it may not be relevant!\n\nSo just going back to the ground before even thinking at the macro level: the smaller pieces need to be added together before it is relevant for a population scale impact. And that too might look like probably 28 different models for 28 different states, and that is a very simplified version of even saying it. So just wanted to put that across."
  },
  {
    id: "seg-37",
    startTime: "104:05",
    endTime: "108:11",
    secondsStart: 6245,
    secondsEnd: 6491,
    speaker: "Dr. Namita Wakhloo",
    speakerTitle: "Founding Director, Land Rights Initiative; Senior Fellow",
    organization: "Centre for Policy Research (CPR)",
    theme: "Why Efficiency Fails Without Equity: 10 Men in Silicon Valley vs Democratic Deliberation",
    text: "I just wanted to pick up on the Ambassador's point about equity. Because there is a lot of talk about policy in India and digitization, and the entire body of my work is about the fact that no policy can be efficient if it's not equitable. Because if it's not equitable, it is going to face challenges and that will slow it down. That's number one.\n\nI want to pick up on what Suresh also said: I just want to say that this framework is a little condescending, because we're talking about producers and consumers of AI. In all your conversations, like the producers are out there and then how can it be helpful to everyone as a consumer? But I am saying, and I said earlier as well: they need to be part of the conversation! We need to be part of the producers. We don't want 10 men sitting in Silicon Valley to decide what kind of AI we are building, right?\n\nWomen need to be part of that conversation, senior citizens need to be part of that conversation, the rural and the marginalized need to be part of that conversation about building these systems to begin with. And they are not part of this conversation, and that's the problem.\n\nThe second thing I want to say is that to the point that the gentleman made: I actually completely disagree! So I think that the reason—I mean, the Aadhaar project, as with many initiatives in India, the reason they face challenges is because they started without a law! Actually, there should have been a law passed to regulate what this technology was going to do at the initial stages, because it was going to have a huge impact on the rights of the people. But that was not done.\n\nAnd that is the case in general: instead of making laws and then rolling out policies, we tend to roll out executive policies which infringe on people's rights, and then legalize them later once it is too difficult and it has already been scaled to such an extent that so many resources have gone in, that you know... So I think the challenges come because we don't follow the process. And we need to follow the process.\n\nIf you look at the rates of legislation of the Indian Parliament, they are just going down. And yet a lot of significant changes are being made at the executive level by bureaucracies and by people who are whispering in the ears of people in the corridors of power. And those do not involve the kind of deliberative engagement that democracy requires, which is why we have people on the streets outside right now! Because it is not working in the manner in which the Ambassador was saying: that we need transparency, we need inclusion, we need participation at every level, not just at the time of elections. That is the controversy right now: we need that engagement at every level.\n\nThe Aadhaar system: the World Bank has also put out that the centralization of data is a huge problem, that this system is not something that they are now advising other countries to do. Number two: this idea that technology is a panacea for all evil, that is not true actually! Technology, as you also pointed out: what is it that the people actually require? In fact, we have seen with Aadhaar—I mean, we made a presentation to the UIDAI, and we said to them that they say: 'Oh, our data is very robust.' But the problem is that the Aadhaar is needed for every other government department, and their data is not secure! You needed it to get your vaccine on the CoWIN website, and that data was hacked!\n\nSo the problem is not that, you know, the Aadhaar website is secure; the problem is that Aadhaar is being used by every other government body, and so that data is not secure, which means our data is being sold in the digital black market. And that's a huge problem, and that is something that they should have thought about and regulated before this thing. And I really want to emphasize the age barriers and the gender barriers in terms of algorithms: algorithms are actually depriving people of access! People have starved because algorithms have deprived them of being able to access their rations! Earlier they could have gone to a local person, but now things are way more centralized. So this idea of centralized system, centralized data repositories: I think we need to move towards more inclusion, more decentralization, more participation, more transparency, and less condescension."
  },
  {
    id: "seg-38",
    startTime: "108:11",
    endTime: "110:07",
    secondsStart: 6491,
    secondsEnd: 6607,
    speaker: "Audience Participant",
    speakerTitle: "Social Impact Funder & Strategist",
    organization: "Civil Society Network",
    theme: "The Hard Question of Capital: Who Is Ready to Fund Grassroots Customization?",
    text: "I have a question actually. All of you have spoken what you do individually, what your tool does individually, what you expect a tool to do or what someone should do. And how many of us in the room are ready to put money for making those decisions?\n\nToday, you may build a tool that works—the lady spoke about her bot, you are speaking about your app. Tomorrow, you want to scale it up, but do you guarantee that it's going to work in Meghalaya?\n\nThe thing is: you're all coming from a place of your point of views, and yet we are still struggling to understand what's happening on ground. That's what she's saying. We are still talking about DPI, we are still talking about how to scale up, we are still talking about what they need. And simple questions like: will your family use your app? Will her family use her app? If that's there, if I am working in education and I'm building an application using AI, will I ensure that my nephews and nieces use it?\n\nIf I can guarantee that, then I move on to the villages. Then I move on to the marginalized societies. And then when I want to move on to the marginalized societies, I want funds. Who is going to put that money? I'm genuinely asking, because are you guys ready to put that money for me to go on the ground, get that data, and create something for them specifically that will work for their benefit? It's a question."
  },
  {
    id: "seg-39",
    startTime: "110:07",
    endTime: "112:39",
    secondsStart: 6607,
    secondsEnd: 6759,
    speaker: "Development Sector Leader",
    speakerTitle: "Senior Development Practitioner",
    organization: "Social Impact & Policy Forum",
    theme: "Adam Smith, Modern Capitalism, and the Flaw of Expecting Free Capital",
    text: "The overarching question of whether AI can benefit all is a question of economics. Adam Smith, when he visualized—he is the father of modern economics as we know—my understanding of his idea of profit was that local businesses generate surplus, which is then invested for local needs. This idea of a nameless, faceless shareholder, stakeholder whose profit needs to be maximized is a modern capitalism idea.\n\nThe reason I bring this up is: this can never—no DPI, DPG, no AI can create an equitable world, an equal society till this basic, fundamental premise of capitalism is tamed. And we can't do away with it, because as humanity, we have established for ourselves that: kaun paisa lagayega jab tak uska paisa banega nahi? ('Who will invest money until money is made from it?').\n\nSo the basic human persona that economics has created for all of us is that we are self-centered, selfish. That's why all our decisions are driven by maximization of utility. I'm not saying something which all of you don't know: this is the basic human persona, and so we have also started believing in it that: nahi, hum toh aise hi hain. Who will put money when there is no money to be made?\n\nUnless things like this change, this question of some technology which even today is leading to billions of dollars of value being created for some people, will not lead to equitable... Even countries today are competing! The sovereign AI systems—why? Because there is money to be made. It's not necessarily for an equitable world with tech. Of course, that's one part of it, but because there is money to be made. India needs its own sovereign system, and many—and US and others. So I can't sit in this room and solve fundamental human issues, but I just want to add that, because that is the elephant in the room and that's the uncertainty of action. I may or may not have the money, but collectively we have to."
  },
  {
    id: "seg-40",
    startTime: "112:39",
    endTime: "117:45",
    secondsStart: 6759,
    secondsEnd: 7065,
    speaker: "Aditi",
    speakerTitle: "Director of Capacity Building",
    organization: "Wadhwani AI",
    theme: "Demonstrating Value Fast: NotebookLM for Fisherwomen & Teleconsultation Realities",
    text: "Also, just to answer your question in the first half of my response: translation of value has to happen very quickly for marginalized communities. So I lead capacity building at Wadhwani AI, and I work with diverse communities and diverse cohorts on training of digital services as well as how to use AI technology.\n\nWhat I've seen is: I've never had to sit and convince a women entrepreneur to start using reels—Instagram reels for the marketing of her products! I've never had to convince someone to use a particular application that just simply works, because they see there's a quick translation of value. I've sat with fisherwomen in Tamil Nadu, in Thoothukudi, and they've used NotebookLM—which is an application created by Google—to create a training suite for other fisherwomen to understand how to use dried fish products and sell it in the market! These are women who have not gone to school and completed formal education, but they've used NotebookLM to create a training catalog for other fisherwomen.\n\nSo I've never had to convince a particular member of a community to use a product. The flip side of this is when I've had to do capacity building of DPI products, or products that have been rolled out by a particular government—let's, I don't want to make it too controversial. And in the design phase, what I have noticed is: that to answer point B of your question, we fail at data quality, and there's also no agency in terms of maybe regulation or ensuring that that quality is maintained.\n\nAnd I'll give you an example to illustrate what I'm talking about: we were working with a particular government to create a solution for teleconsultation for healthcare-related issues. And we noticed that there were a lot of hits for stomach aches by women in a certain area. And stomach aches were not being escalated beyond a certain point, because there could be multiple reasons for stomach ache, right? Stomach ache is not a symptom, it's just—it probably has to do with maybe even right from a condition that's a flu, right to a chronic-level issue.\n\nThe data that exists for us to train models to be able to diagnose the stomach ache is missing! And what we realized is: in a lot of cases where women had chronic issues like endometriosis, the data was missing! And stomach ache in general, the data for that kind of particular symptom that ties to endometriosis in India for that state was missing. And that particular state government had assured us that: 'Hey, we have the data for so and so, and you can build a robust solution.' And we had to go back to the government saying that: 'This is not possible, because you don't have enough data to actually be able to help these women in this particular geography.'\n\nThe other thing is policy. We've also seen in teleconsultation, there is a very popular model that was floated at the central level, where there were a lot of consultations being hit as a KPI: that this is the number of consultations we've had centrally across so and so states. And what we actually realized was there was a minor policy that led to that KPI being hit: a lot of government staff were being incentivized to actually complete online consultations, so there were dummy records being made!\n\nAnd in a lot of cases, what we realized is where there were conditions that were tied to particular societal taboo, we knew that the person is not even escalating this issue, but the consultation was done and it was recorded. And when we went on ground, we saw that the person doesn't even want to admit that so and so condition is being diagnosed for a member in their family, but we still saw that many consultations being hit because there was a policy that was being implemented, and there was an administration that was pushing this policy, and so on and so forth.\n\nSo I feel like this is a combination of issues that needs to be solved when we're talking about quality of data and building DPI and then sort of adding AI into that layer. And of course, it's also like what sir had mentioned: that there are political reasons to a lot of these solutions, and you have to sort of—you can't really extrapolate a lot of this and say that AI is going to solve a lot of problems in our society. You have to look at it from all angles."
  },
  {
    id: "seg-41",
    startTime: "117:45",
    endTime: "118:09",
    secondsStart: 7065,
    secondsEnd: 7089,
    speaker: "Kartik Sharma & Yashraj Mukati",
    speakerTitle: "Co-Hosts",
    organization: "Wasabi AI",
    theme: "Session Time Check & Final Round Announcements",
    text: "[Kartik]: Just before I hand over to anyone, we are in short of time, and we have high tea and networking. So let's be mindful of that.\n[Yash]: Just one thing: Hanne has very well put that forward that it's a hard stop at 5:00. So we request please make it brief. Either we leave before 5:00 or it's door shut!"
  },
  {
    id: "seg-42",
    startTime: "118:09",
    endTime: "119:08",
    secondsStart: 7089,
    secondsEnd: 7148,
    speaker: "Yash (Embassy of Brazil)",
    speakerTitle: "Head of Trade & Tech",
    organization: "Embassy of Brazil in New Delhi",
    theme: "Global South DPI Convergence: The Brasília DPI Center & Credit Lines for Farmers",
    text: "All right, hi everyone, my name is Yash from Embassy of Brazil. First of all, thank you so much for bringing up all the use cases from health and education and all the impact foundations. So for Brazil, what I want to make a point regarding DPI is a positive one for India's DPI story.\n\nSo last year in November, Brazilian government with the help of Co-Develop and IIIT Hyderabad set up a DPI center in Brasília with the MGI—what we call as the Ministry of Management and Innovation in Public Services in Brazil. And a few months ago, we have launched EMIAR, which is a credit line for the farmers, wherein the components of AI and DPI would be used for the verifiable credentials, and then we are expanding it beyond it as well. That's it."
  },
  {
    id: "seg-43",
    startTime: "119:08",
    endTime: "120:36",
    secondsStart: 7148,
    secondsEnd: 7236,
    speaker: "Social Sector / CSR Representative",
    speakerTitle: "Social Sector Leader",
    organization: "CSR & Community Development",
    theme: "Value Creation at the Micro Level: Why Basic Awareness Precedes Tool Adoption",
    text: "I'll just quickly share: the major part which we all are missing, which she recently shared, was: it is being made by the people and for the people. And somewhere or the other, we are not able to create that value even in our family and relatives. We keep seeing our mother is not using AI, our mother is not able to use that. I think we are also looking for that where we can able to create that value. People are utilizing everyday reels, social media, doing everything on a regular basis, and nobody taught them! They just realized it is creating some value—maybe in terms of some finances or holding pieces, right?\n\nBut yes, the most important: if we start focusing on—the accessibility is not an issue, I think everybody has a mobile phone, even if not, their family members have it. But the most important: the value creation. How we can focus on creating the value from the very small and the micro level, that each individual can find out the solution, even in the technology field or in the CSR. I am from the CSR and social sector. Even in our field, when we go on a ground and keep seeing that people know the solution, but they don't use the tool, because there's no awareness. They are not mindful enough to utilize and how to utilize. I think the basic capacity building training should also be there to build their capacity and make people understand what is the value of it, and how we can make a better solution."
  },
  {
    id: "seg-44",
    startTime: "120:36",
    endTime: "122:33",
    secondsStart: 7236,
    secondsEnd: 7353,
    speaker: "Yashraj (Yash) Mukati",
    speakerTitle: "Founder & CEO, Wasabi AI",
    organization: "Wasabi AI",
    theme: "Grassroots Experiments: Housewives Building Household Appliance RAG Bots",
    text: "So that, you know, when you're working at the grassroots, it's rarely that people see the potential and then they don't use it. It doesn't happen, what you also shared. And it's always for the use case: you were mentioning people who are not here, who are excluded, who need to be included.\n\nSo before that, with the SRF Foundation, Wasabi and GoverniAI, we did this another session. And the idea was to flip the conference agenda and do it at the grassroots in their community, at the village level. And some of the participants who were there were the people who are goat herders, who are ASHA and ANM, who are people like housewives who have just lived in a village and have no other area of interest beyond like they want to raise their children. Now the idea comes: within their context, how is AI useful?\n\nSo when women came and we introduced to them the voice capability of ChatGPT and how they can use it, now they were asking questions to ChatGPT about their own context. It's not about being valuable in an economic lens, but in their: how can they be a better homemaker in a particular context? I remember a woman early in Wasabi's space, a woman: she built a small RAG (Retrieval-Augmented Generation) for her home! What she did was, in that system she put all the manuals of different devices which were there, so now she can use it across her home, she doesn't need to call 10-15 different people, she's the mechanic of the home! Now, these are the people in general, like the way people can use, it depends on their context. And pretty much that. Yes, ma'am."
  },
  {
    id: "seg-45",
    startTime: "122:33",
    endTime: "124:06",
    secondsStart: 7353,
    secondsEnd: 7446,
    speaker: "Sangita",
    speakerTitle: "Industry Representative",
    organization: "NASSCOM",
    theme: "NASSCOM Perspective: Skilling the Demographic Dividend & Looking Beyond GenAI",
    text: "My name is Sangita, I represent NASSCOM. NASSCOM is the tech sector industry body in India, between government and industry. I was waiting that everyone speak their turn, but I understand that there's a time limit, so I thought I'll just quickly share some viewpoints.\n\nFirst and foremost: when we talk about technology, AI has become synonymous with technology. It is not just AI! There are other important emerging technologies like cybersecurity in our day-to-day life: for our phones, we need that cybersecurity layers which are there; like cloud computing, we're using data drives, etc. So when you have a technology conversation, we talk in the larger ambit is what I feel—everyone should talk in the larger ambit. ChatGPT, Claude are very simple examples because you use it in day-to-day life, but larger ambit is important.\n\nSecond, I think our friend from Deloitte, sir, you highlighted the fact that learning is going to be important. So while a lot of you spoke about different products at grassroots level, larger level, etc., but India also has a demographic dividend and we know that we are heading to the peak of that, and we'll be having the largest, you know, age population which would be workforce-ready, etc. So the importance of learning and skilling is going to matter a lot. So it's a request that any of you, whether you have your products, etc., just make learning or skilling very, very imperative.\n\nBecause what you learn today is not going to be good enough unless a learner is able to do, you know—it's not just access or content, it's about how you are creating value out of that content: what one is सक्षम (capable) to do rather than what is learning in today's language. So in the interest of time, I'll just leave it at that. Thank you."
  },
  {
    id: "seg-46",
    startTime: "124:06",
    endTime: "126:35",
    secondsStart: 7446,
    secondsEnd: 7595,
    speaker: "DPI Architect & Systems Expert",
    speakerTitle: "Pioneering Technologist & Systems Architect",
    organization: "eGov Foundation / Early UIDAI Architecture",
    theme: "Celebrating Indian DPI Successes: FASTag, UPI, and Qure.ai's Targeted Healthcare AI",
    text: "Just on a very happy note: so I think we should be happy with two things. One, I think we gained a lot from DPI, because if people have moved from a toll to toll, you have actually crossed toll gates, and you have actually used FASTag, and you've benefited from not standing in the queues. You have bought items from Amazon, used the UPI which is a foundational DPI. So I think we should celebrate first of all the DPI, because—and there's a difference between a DPI and a DPG. Most of you are actually talking about a DPG (Digital Public Good), which is very contextual, is an application layer. DPI is a foundational layer which is far more important, and we've done serious work. Let's celebrate that! That's a very happy story.\n\nThe second is: I think AI is in different forms and formats. The data availability doesn't stop an AI to work, or a quality of data also doesn't. Qure.ai, for example, a brilliant startup from India, uses a X-ray data from any of the hospitals and tells you whether you are—you're going to have a lung cancer or not. It's India's topmost innovators in the space of healthcare, and they don't require a huge amount of data! I think we are getting too much confused between an LLM and an SLM and a pure model and the tech part of it.\n\nSo I think for simplicity's sake: can something improve my life, which was—I used to say if a technology can help me reach Bangalore five minutes earlier than last time, I would gladly adopt that technology solution! Okay? Because five minutes for me is a far more important yardstick than a different unit. So therefore, technology adoption, learning that technology, using that technology, and trying to actually tell the other guy: 'Please use it!' is what I think we should put—whether it is AI, cyber, or anything. But AI is a tool: please don't confuse between LLM, SLM, and models and stuff. So that's the humble request. Thank you so much."
  },
  {
    id: "seg-47",
    startTime: "126:35",
    endTime: "128:03",
    secondsStart: 7595,
    secondsEnd: 7683,
    speaker: "Sanjay Gupta",
    speakerTitle: "Director",
    organization: "CHETNA NGO",
    theme: "Reuniting Lost Children via Aadhaar & APAAR vs Voice Cloning Risks",
    text: "Superbly charged meeting, really appreciated. So few points which we were not able to discuss is about: there are pros and cons of AI. So we have very talked about how it has helped, but we have not talked about what are the issues. So probably one more round is required after this!\n\nSecond is that I just want to give few examples where it actually helped: like for example, we are helping street children to get their home—the lost and found children—because of the Aadhaar. Secondly, that the child is getting admission in Bihar and now in Haryana because of the APAAR ID, which is again Government of India initiative. You can trace where the child was admitted before, and also for various schemes which they are eligible, they can get it.\n\nThe negative part is—again, the negative part is like we are not talking about the misuse of it: changing voice and threatening on this thing. So people are very smart, so they have used it as per their convenience. So if like the most deprived people are not using AI, probably AI used in a different way, so we need to explore this thing. And thanks again, Government of India, that now we have a Data Protection Policy as well (DPDP Act). So probably if something is covered under that more strongly, we will be able to protect. Thank you so much."
  },
  {
    id: "seg-48",
    startTime: "128:03",
    endTime: "129:44",
    secondsStart: 7683,
    secondsEnd: 7784,
    speaker: "Mamta Saikia",
    speakerTitle: "Chief Executive Officer",
    organization: "Bharti Airtel Foundation",
    theme: "Closing Reflection: 'Money Matters, People Too' and Human Agency in the AI Era",
    text: "Thank you. Thank you so much. Again, to conclude this conversation formally, I would like to invite Ms. Mamta Saikia, ma'am, founder and CEO of Bharti Airtel Foundation. Over decades of work experience in this sector. In the meantime, just one thing which summarized what a lot of us have spoken: ma'am is author of a book that 'Money Matters, People Too'. Over to you, ma'am.\n\n[Mamta Saikia]: So thank you, thank you for this wonderful conversation. I had a lot of points written, but in the interest of time, I think I'll just say: I'm looking for a world where AI can do the work and we can enjoy music and drama! Very interesting discussion and a lot of points got raised, but really I want you guys to have tea. I'm sacrificing my 10 minutes for your tea! So let's do what Elon Musk said: in future, no job, nobody would be working, AI would be working, and hopefully our government would come up with good policies so that we can go and watch dramas, plays, enjoy music, go for walks in the park with our robots working for us! Tea please! Thank you so much."
  }
];

export const ROUNDTABLE_THEMES = [
  {
    id: "theme-1",
    title: "Samudra Manthan & Amara's Law",
    description: "The dual reality of technology churning good and evil simultaneously, and why humanity chronically overestimates short-term impacts while underestimating tectonic long-term transformations.",
    speakers: ["H.E. Arvinn Gadgil", "Kartik Sharma"],
    segmentsCount: 2
  },
  {
    id: "theme-2",
    title: "Agency vs Mere Digital Access",
    description: "Moving from passive consumers of Silicon Valley models to active grassroots builders and problem-solvers across rural, semi-urban, and marginalized populations.",
    speakers: ["Yashraj (Yash) Mukati", "Sanjay Gupta", "Vishal", "Senior Director / Impact Strategist"],
    segmentsCount: 8
  },
  {
    id: "theme-3",
    title: "DPI, Public Systems & Political Legitimacy",
    description: "The architecture of Digital Public Infrastructure (Aadhaar, UPI, FASTag, DIKSHA), bureaucratic technocracy vs democratic legitimacy, and avoiding 'the killing off of politics'.",
    speakers: ["H.E. Arvinn Gadgil", "Prof. (Dr.) Charu Malhotra", "DPI Architect & Systems Expert", "Dr. Namita Wakhloo"],
    segmentsCount: 9
  },
  {
    id: "theme-4",
    title: "The Bottom 60% & Structural Exclusion",
    description: "Why 60% of rural India, Dalits, Adivasis, and women must be co-producers of technology rather than afterthought consumers; environmental costs of data centers on land and water.",
    speakers: ["Dr. Namita Wakhloo", "Namrata", "Srikanth", "NGO Representative"],
    segmentsCount: 5
  },
  {
    id: "theme-5",
    title: "Frontline Health, Education & Frugal AI",
    description: "Real-world implementations: ARMMAN's ANM high-risk pregnancy assistant, NariBot Voice-to-Ledger for SHG women, NotebookLM for fisherwomen, and Qure.ai's localized diagnostics.",
    speakers: ["Gaurav", "Aditi", "Co-Founder / Team, BodhBridge", "Suresh Reddy", "Dr. Navneet"],
    segmentsCount: 7
  },
  {
    id: "theme-6",
    title: "Capital, Sovereignty & Economics of Inclusion",
    description: "Who funds grassroots AI when shareholder capitalism demands quick ROI? Sovereign AI competition across the Global South and the Brazil-India bilateral DPI bridge.",
    speakers: ["Audience Participant", "Development Sector Leader", "Yash (Embassy of Brazil)", "Mamta Saikia"],
    segmentsCount: 5
  }
];

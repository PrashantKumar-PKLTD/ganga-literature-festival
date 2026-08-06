export const BLOGS = [
  {
    slug: "internet-culture-and-gen-z",
    author: "Charumitra Sardana",
    date: "Jan-21-2026",
    title: "Internet, Culture and Gen-Z",
    excerpt: "A slightly ironic reflection on internet culture, book conversations, and perpetual connection.",
    image: "/gangaimg1.png",
    body: [
      "The internet has given Gen-Z a language of speed: memes, screenshots, short videos, reaction images, voice notes, and endless commentary. Culture no longer arrives as a finished object. It circulates, mutates, and becomes public before anyone has time to name it.",
      "For literature festivals, this is not a threat. It is an invitation. Books still ask for patience, but the conversations around books now travel through timelines, fan communities, podcasts, reels, and group chats. A reader may discover an author through a quotation card, a debate clip, or a friend forwarding a paragraph at midnight.",
      "The challenge is to keep depth alive inside this speed. GLF treats young readers not as distracted spectators, but as cultural participants who can move between the printed page and the digital public square with intelligence, humour, and seriousness.",
    ],
  },
  {
    slug: "myths-semantics-and-the-women-left-behind",
    author: "Stuti Bhatia",
    date: "Jan-21-2026",
    title: "Myths, Semantics and the Women Left Behind",
    excerpt: "History is never neutral. A note on how stories travel through gender, memory, and translation.",
    image: "/gangaimg3.png",
    body: [
      "Myths survive because they are retold, and every retelling makes choices. A word can soften a rebellion, erase a wound, glorify a silence, or restore a forgotten voice. Semantics is never decorative; it is often where power hides.",
      "Women in inherited stories are frequently remembered through relationships: wife, mother, daughter, queen, devotee. But literature allows us to return to the text and ask sharper questions. What did they know? What did they refuse? What did the story require them to carry?",
      "A festival conversation on myth must therefore be more than nostalgia. It must examine language, translation, memory, and the moral imagination through which women are seen or left behind.",
    ],
  },
  {
    slug: "why-the-constitution-still-matters",
    author: "Samiya Mishra",
    date: "Jan-19-2026",
    title: "Why the Constitution Still Matters",
    excerpt: "A festival session on law, liberty, and the public imagination in contemporary India.",
    image: "/gangaimg5.png",
    body: [
      "The Constitution is often discussed as a legal document, but it is also a public text. It shapes how citizens imagine rights, duties, justice, institutions, and the limits of power.",
      "In contemporary India, constitutional conversations can become technical very quickly. Yet their deepest questions are human: how should a society balance liberty and order, faith and law, individual dignity and collective memory?",
      "At GLF, the Constitution belongs in public conversation because literature, history, and law all deal with the same raw material: the lives people are allowed to live and the stories a nation tells about itself.",
    ],
  },
  {
    slug: "when-images-speak-storytelling-in-many-mediums",
    author: "Amaya Morgan",
    date: "Jan-19-2026",
    title: "When Images Speak: Storytelling in Many Mediums",
    excerpt: "How visual culture, oral history, cinema, and books meet on the same festival stage.",
    image: "/gangaimg2.png",
    body: [
      "Stories do not belong only to the page. They live in paintings, films, photographs, performances, archives, songs, and the gestures of oral memory.",
      "When images speak, they often bypass the arguments that language must build step by step. A photograph can hold evidence and emotion at once. A film frame can make history feel intimate. A performance can return a forgotten story to the body.",
      "The modern literature festival must therefore be porous. It must let books sit beside cinema, oral history, visual culture, and performance, because readers today encounter narrative through many mediums at once.",
    ],
  },
  {
    slug: "bridging-voices",
    author: "Victoria Harrison",
    date: "Jan-19-2026",
    title: "Bridging Voices",
    excerpt: "A reflection on translation, literary friendship, and the many languages of a river city.",
    image: "/gangaimg4.png",
    body: [
      "Every river city is multilingual. Words arrive with traders, pilgrims, students, workers, poets, and families. Patna carries Hindi, Urdu, Bhojpuri, Maithili, Magahi, English, Sanskritic memory, and the everyday speech of the bazaar.",
      "Translation is not merely a technical bridge between languages. It is a form of hospitality. It allows one literary world to receive another without demanding that it become identical.",
      "GLF's work is to create rooms where these voices can meet: regional and national, classical and contemporary, scholarly and popular, local and global.",
    ],
  },
  {
    slug: "artificial-intelligence-meets-tamil-mythology",
    author: "Gauri Yadav",
    date: "Jan-19-2026",
    title: "Artificial Intelligence Meets Tamil Mythology",
    excerpt: "A short essay on technology, inheritance, and the new ways myths are being read.",
    image: "/logo.png",
    body: [
      "Artificial intelligence has entered the world of stories as a tool, a provocation, and a mirror. When placed beside mythology, it raises old questions in new forms: who remembers, who interprets, and who has authority over inherited narratives?",
      "Tamil mythology, like every living tradition, is not a static archive. It is sung, translated, performed, contested, and loved. Technology can help readers discover texts and patterns, but it cannot replace the cultural intimacy through which meaning is made.",
      "The useful question is not whether AI will replace tradition. It is whether we can use new tools without flattening old wisdom, and whether technology can deepen rather than dilute our relationship with inherited stories.",
    ],
  },
];

export function getBlogBySlug(slug) {
  return BLOGS.find((blog) => blog.slug === slug);
}

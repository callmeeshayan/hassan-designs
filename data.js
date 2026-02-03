/**
 * Client Database
 * Contains configuration and content for different client campaigns
 * 
 * Structure:
 * - greeting: Main headline for the client
 * - subtext: Subtitle explaining the analysis
 * - explanation: Detailed strategy breakdown
 * - thumbnails: Array of thumbnail comparisons
 */

const database = {
  'default': {
    greeting: "Let's Scale Your Tech Channel",
    subtext: "I analyzed your recent video and noticed the thumbnail was losing clicks to competitors.",
    explanation: "In my version, I increased the subject contrast by 40% and used a 'glow' effect to create a focal point. I also replaced the long title with a 'Worth it?' hook to create curiosity, which typically increases CTR by 2-5%.",
    thumbnails: [
      {
        title: "Default Tech Thumbnail Redesign",
        before: "img/default-before.png",
        after: "img/default-after.png",
      },
    ],
  },

  'tech-creator-01': {
    greeting: "Your Gaming Thumbnail Needs a Refresh",
    subtext: "I noticed your click-through rate has plateaued. Here's what I'd change.",
    explanation: "The original thumbnail uses too much text and loses visibility at small sizes. My version uses bold contrasting colors, a single focal point, and a curiosity-driven hook. This approach typically boosts CTR by 15-25% for gaming content.",
    thumbnails: [
      {
        title: "Gaming Stream Redesign",
        before: "https://i.imgur.com/example-before.png",
        after: "https://i.imgur.com/example-after.png",
      },
    ],
  },

  'beauty-creator-02': {
    greeting: "Your Beauty Content Deserves Better Thumbnails",
    subtext: "Analysis shows your thumbnails aren't standing out in the algorithm.",
    explanation: "Your thumbnails have great products but the composition is cluttered. I've simplified the layout to focus on one hero product, improved lighting with a subtle glow effect, and added text that creates curiosity. Expected CTR increase: 10-20%.",
    thumbnails: [
      {
        title: "Makeup Tutorial Redesign",
        before: "https://i.imgur.com/beauty-before.jpg",
        after: "https://i.imgur.com/beauty-after.jpg",
      },
    ],
  },

  'education-creator-03': {
    greeting: "Your Educational Content Can Reach More People",
    subtext: "Let me show you how to make your thumbnails more engaging.",
    explanation: "Educational content often underperforms due to boring thumbnails. I've added dynamic visual elements, clear typography hierarchy, and psychological triggers (like directional focus) to guide viewer attention. Projected CTR improvement: 8-15%.",
    thumbnails: [
      {
        title: "Tutorial Series Redesign",
        before: "https://i.imgur.com/edu-before.jpg",
        after: "https://i.imgur.com/edu-after.jpg",
      },
    ],
  },

  'vlog-creator-04': {
    greeting: "Make Your Vlogs More Clickable",
    subtext: "Your thumbnails don't match the energy of your content.",
    explanation: "Vlog thumbnails need personality and emotion. I've enhanced facial expressions with strategic lighting, added movement through dynamic composition, and used bold accent colors. This approach increases click-through by 20-30% on average.",
    thumbnails: [
      {
        title: "Vlog Redesign",
        before: "https://i.imgur.com/vlog-before.jpg",
        after: "https://i.imgur.com/vlog-after.jpg",
      },
    ],
  },
};

import { Metadata } from 'next';
import ReadinessQuiz from './ReadinessQuiz';

export const metadata: Metadata = {
  title: "AI Readiness Quiz - Is Your Business Ready for AI?",
  description: "Take this free 2-minute AI readiness assessment. Answer 6 questions about your business and get a personalized score with actionable recommendations for AI automation.",
  keywords: ["is my business ready for ai", "ai readiness assessment", "ai readiness quiz", "business ai evaluation", "should i use ai for my business"],
  alternates: {
    canonical: 'https://novasoftai.com/tools/ai-readiness-quiz/',
  },
  openGraph: {
    title: "AI Readiness Quiz - Is Your Business Ready for AI? | Novasoft AI",
    description: "Free 2-minute assessment: find out if your business is ready for AI automation. Get a personalized score and recommendations.",
    url: 'https://novasoftai.com/tools/ai-readiness-quiz/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Readiness Quiz | Novasoft AI",
    description: "Is your business ready for AI? Take the free quiz and find out in 2 minutes.",
  },
};

export default function AIReadinessQuizPage() {
  return <ReadinessQuiz />;
}

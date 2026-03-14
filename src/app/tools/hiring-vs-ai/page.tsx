import { Metadata } from 'next';
import CostComparison from './CostComparison';

export const metadata: Metadata = {
  title: "Hiring vs AI Assistant Cost Comparison Calculator",
  description: "Compare the real cost of hiring a full-time employee vs a virtual assistant vs an AI assistant. Free calculator with side-by-side annual cost breakdown.",
  keywords: ["ai vs hiring employee cost", "ai assistant vs virtual assistant cost", "hiring vs ai cost comparison", "ai assistant cost calculator", "virtual assistant vs ai"],
  alternates: {
    canonical: 'https://novasoftai.com/tools/hiring-vs-ai/',
  },
  openGraph: {
    title: "Hiring vs AI Cost Comparison Calculator | Novasoft AI",
    description: "Free calculator: compare the true cost of hiring an employee, a virtual assistant, or an AI assistant. See annual projections side by side.",
    url: 'https://novasoftai.com/tools/hiring-vs-ai/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Hiring vs AI Cost Calculator | Novasoft AI",
    description: "Compare costs: full-time employee vs virtual assistant vs AI assistant. Free side-by-side calculator.",
  },
};

export default function HiringVsAIPage() {
  return <CostComparison />;
}

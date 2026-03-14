import { Metadata } from 'next';
import ROICalculator from './ROICalculator';

export const metadata: Metadata = {
  title: "AI ROI Calculator - See How Much You Can Save",
  description: "Calculate your AI automation ROI in seconds. Enter your current call volume, costs, and follow-up hours to see exactly how much time and money AI can save your business.",
  keywords: ["ai roi calculator", "ai automation roi", "ai cost savings calculator", "business automation roi", "ai return on investment"],
  alternates: {
    canonical: 'https://novasoftai.com/tools/ai-roi-calculator/',
  },
  openGraph: {
    title: "AI ROI Calculator - See How Much You Can Save | Novasoft AI",
    description: "Calculate your AI automation ROI in seconds. Enter your numbers and see exactly how much time and money AI can save your business.",
    url: 'https://novasoftai.com/tools/ai-roi-calculator/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI ROI Calculator | Novasoft AI",
    description: "Free calculator: see how much your business can save with AI automation. Get your personalized ROI breakdown.",
  },
};

export default function AIROICalculatorPage() {
  return <ROICalculator />;
}

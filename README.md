# Novasoft AI Website

A Next.js website for Novasoft AI with contact form submissions and booking functionality.

> Last deploy trigger: 2026-01-27 22:55 UTC
 
## Setup
 
### Contact Form (Resend)

The contact form sends emails to jessmason23@gmail.com using Resend. To enable it:
 
1. Go to [resend.com](https://resend.com) and create an account
2. Create an API key in the Resend dashboard 
3. Add the API key to your Vercel project:  
   - Go to your project in Vercel dashboard 
   - Settings > Environment Variables 
   - Add: `RESEND_API_KEY` = your-api-key-here 
4. Redeploy the site 

The form will work once the environment variable is set. Emails will be sent from `onboarding@resend.dev` (Resend's test domain) until a custom domain is verif ied.

### Book a Call

"Book a Call" buttons throughout the site link to: https://cal.com/jess-mason/meeting

## Getting Started

First, run the development server:

```bash 
npm run dev
# or 
yarn dev
# or adsf 
pnpm dev
# or a 
bun dev 
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

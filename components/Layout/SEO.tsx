import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export default function SEO({ 
  title = "Image to Prompt Generator | AI Prompt Generator",
  description = "Convert any image to AI prompts for free. Best image to prompt generator for Stable Diffusion, Midjourney. Instant results, no signup required.",
  keywords = "image to prompt, ai prompt generator, img to prompt, free image to prompt generator"
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {/* Open Graph / Social Media */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Image to Prompt" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
} 
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | DevBooks</title>
        <meta name="robots" content="noindex" />
      </Head>

      <Navbar />
      
      <div className="max-w-6xl px-5 mx-auto my-20">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-black">Introduction</h2>
              <p className="mb-4">
                This Privacy Policy explains how DevBooks ("we", "us", or "our") handles information through our website. We are committed to protecting your privacy and being transparent about our practices.
              </p>
              <p>Last updated: 14.12.2024</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-black">Website Hosting</h2>
              <p className="mb-4">
                Our website is hosted on Vercel. While we do not collect any personal data directly, Vercel may collect certain technical information as part of their service:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP addresses - temporarily stored in server logs</li>
                <li>Browser type and version</li>
                <li>Time and date of access</li>
                <li>Pages visited</li>
              </ul>
              <p className="mt-4">
                This information is collected by Vercel for security and operational purposes. For more information about how Vercel processes data, please visit{" "}
                <Link href="https://vercel.com/legal/privacy-policy" target="_blank" className="text-yellow-900">
                  Vercel's Privacy Policy
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-black">Data Collection and Usage</h2>
              <p>
                Our website does not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use cookies</li>
                <li>Collect personal information</li>
                <li>Require user registration</li>
                <li>Track user behavior</li>
                <li>Use any analytics services</li>
                <li>Use any advertising services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-black">External Links</h2>
              <p>
                Our website contains links to external sites (such as Amazon). This privacy policy applies only to our website. When you click links to other websites, we encourage you to read their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-black">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-black">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-2">Email: <a href="mailto:info@devbooks.org">info@devbooks.org</a></p>
            </section>
          </div>
        </div>
    </>
  );
}

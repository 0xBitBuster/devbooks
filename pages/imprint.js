import Navbar from "@/components/Navbar";
import Link from "next/link";
import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Imprint | DevBooks</title>
        <meta name="robots" content="noindex" />
      </Head>

      <Navbar />
      
      <div className="max-w-6xl px-5 mx-auto my-20">
        <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Imprint</h1>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-black">Information according to § 5 TMG</h2>
                <img src="/images/address.png" alt="Address" />
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-black">Contact</h2>
                <p>Email: info@devbooks.org</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-black">Dispute Resolution</h2>
                <p className="mb-4">
                  The European Commission provides a platform for online dispute resolution (OS): 
                  <Link href="https://ec.europa.eu/consumers/odr/" className="text-indigo-400 hover:text-indigo-300 ml-1" target="_blank">
                    https://ec.europa.eu/consumers/odr/
                  </Link>
                </p>
                <p>We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.</p>
              </section>
            </div>
          </div>
        </div>
    </>
  );
}

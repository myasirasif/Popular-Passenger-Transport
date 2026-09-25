import { photoCredits } from "@/lib/photo-credits";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({ title: "Photo Credits", description: "Credits and licences for photos used on this website.", path: "/credits" }),
  robots: { index: false },
};

export default function CreditsPage() {
  return (
    <section className="bg-brand-deep pt-36 pb-4">
      <div className="container-x pb-10">
        <h1 className="text-4xl font-extrabold text-white!">Photo credits</h1>
      </div>
      <div className="bg-white py-16">
        <ul className="container-x grid gap-4 text-sm sm:grid-cols-2">
          {photoCredits.map((c) => (
            <li key={c.file} className="rounded-2xl bg-mist p-5">
              <a href={c.source} target="_blank" rel="noopener noreferrer" className="font-semibold text-ink hover:text-brand-blue">
                {c.title}
              </a>
              <p className="mt-1">
                by {c.creator},{" "}
                <a href={c.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-blue">
                  {c.license}
                </a>
                . Cropped and resized.
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

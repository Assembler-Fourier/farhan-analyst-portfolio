import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <span>404 / OFF LEDGER</span>
      <h1>
        This page does not
        <br />
        <em>balance.</em>
      </h1>
      <p>The address may have changed, but Farhan&apos;s portfolio is one click away.</p>
      <Link className="button button-primary" href="/">
        <ArrowLeft aria-hidden="true" size={18} />
        Return home
      </Link>
    </main>
  );
}

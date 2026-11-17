import Link from "next/link";
import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <h1 className="text-xl font-normal uppercase tracking-title">Página no encontrada</h1>
      <Link href="/" className="mt-8 inline-block border-b border-ink pb-1 text-[0.7rem] uppercase tracking-label">
        Volver al inicio
      </Link>
    </Container>
  );
}

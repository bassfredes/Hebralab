"use client";
import Link from "next/link";
import { Breadcrumb } from "flowbite-react";

export default function AboutPage() {
  return (
    <section>
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
        <Breadcrumb aria-label="Default breadcrumb example">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item>About</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <h1 className="text-3xl font-bold underline">About</h1>
      <Link href="/"> Inicio </Link>
    </section>
  );
}

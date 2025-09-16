import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center">
      {/* Profil Fotoğrafı */}
      <div className="relative w-40 h-40 mb-6">
        <Image
          src="/profile.jpg"
          alt="Ege Bulut"
          fill
          className="rounded-full object-cover shadow-lg"
        />
      </div>

      {/* İsim ve Rol */}
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
        Ege Bulut
      </h1>
      <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
        Fullstack & Mobile Developer | DevOps Enthusiast
      </p>

      {/* Sosyal Linkler */}
      <div className="flex gap-6 mt-6">
        <Link
          href="https://github.com/egebulut"
          className="hover:opacity-80 transition"
          target="_blank"
        >
          <Image src="/icons/github.svg" alt="GitHub" width={28} height={28} />
        </Link>
        <Link
          href="https://linkedin.com/in/egebulut"
          className="hover:opacity-80 transition"
          target="_blank"
        >
          <Image
            src="/icons/linkedin.svg"
            alt="LinkedIn"
            width={28}
            height={28}
          />
        </Link>
        <Link
          href="mailto:ege@example.com"
          className="hover:opacity-80 transition"
        >
          <Image src="/icons/mail.svg" alt="Email" width={28} height={28} />
        </Link>
      </div>

      {/* About Section */}
      <section className="max-w-2xl mt-12 text-left space-y-4">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p>
          I’m a passionate software engineer specializing in fullstack web and
          mobile development. With experience in React, Next.js, Flutter, and
          DevOps (Docker, Kubernetes, Azure DevOps), I build scalable and modern
          applications.
        </p>
        <p>
          I love solving challenging problems, experimenting with new
          technologies, and continuously improving my craft.
        </p>
      </section>
    </main>
  );
}

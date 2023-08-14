import Court from "@/components/Court";

export default function Home() {
  return (
    <main className="flex flex-grow flex-shrink h-full w-full flex-row items-center justify-between px-16 py-10">
      {Array.from({ length: 3 }).map((e, i) => (
        <Court num={i + 1} />
      ))}
    </main>
  );
}

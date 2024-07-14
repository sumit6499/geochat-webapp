
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BlurFade from '@/components/magicui/blur-fade'
import { GlobeDemo } from "@/components/Globe";

export default function Home() {
 
  return (
    <main className="flex-1">
        <section className=" h-full py-12 md:pt-24 lg:pt-32 ">
          <div className="px-0 md:px-6 space-y-10 xl:space-y-16 ">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-2 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
                <div className="px-0 sm:px-0">
                  <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                    <BlurFade className="pl-2">
                      Connect with people nearby
                    </BlurFade>
                  </h1>
                  <p className="mx-auto px-2 mt-3 max-w-[700px] text-muted-foreground md:text-xl">
                      GeoChat is a location-based chat app that lets you connect with people in your area. Share messages,
                      photos, and locations in real-time.
                  </p>
                  <div className="mt-6 space-x-6">
                      <Link 
                        href={'/chat'}
                        >
                        <Button className="ml-2">
                          Start Chatting
                        </Button>
                      </Link>
                  </div>
                </div>
              <div className="flex justify-center  lg:space-y-4 ">
                <GlobeDemo />
              </div>
              </div>
          </div>
        </section>
    </main>
  );
}

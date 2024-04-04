"use client"
import Image from "next/image";
import { inter, lusitana } from '@/components/ui/fonts';
import { Caroussel } from "@/components/caroussel";
import {Reviews} from "@/components/reviews";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button"
import { IconBox } from "@/components/iconbox";
import { FaCheck } from "react-icons/fa";

export default function Home() {
  return (
      <main className="flex justify-center gap-8 flex-wrap">
        <div className="w-full bg-emerald-100 pt-20">
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="flex flex-col justify-center w-1/3 gap-3">
              <p className={`${inter.className} font-light text-[20px] leading-[1.2] tracking-[-0.027em]`}>Démarquez-vous en entretien : Préparez-vous avec les meilleurs experts métiers ! 💪</p>
              <h1 className={`${lusitana.className} font-[100] text-[60px] leading-[1.2] tracking-[-0.027em]`}>Obtenez le job de <span className="font-bold">vos rêves</span></h1>
              <p className={`${inter.className} font-light text-[20px] leading-[1.2] tracking-[-0.027em]`}>Rentre en contact avec les plus grands experts de ton domaine et mets toutes les chances de ton côté pour obtenir le job de tes rêves.</p>
            </div>
            <div>
              <Image
                src='/home_page_girl.svg'
                width={500}
                height={500}
                alt="home_page_girl"
              />   
            </div>
          </div>
          <div className="flex justify-center gap-8 flex-wrap">
            <Caroussel/>
          </div>
          <div className="flex justify-center gap-8 flex-wrap pb-10">
            <div className="flex flex-col justify-center">
              <h1 className={`${lusitana.className} pb-10 text-center font-[300] text-[60px] leading-[1.2] tracking-[-0.027em]`}>Comment ça marche ?</h1>
              <p>1. Réservez des séances de simulation d’entretiens quand vous le souhaitez.</p>
              <p>2. Rencontrez votre interlocuteur (expert d’une grande entreprise de votre secteur) pour des sessions virtuelles entièrement anonymes.</p>
              <p>3. Obtenez des retours détaillés et concrets sur ce sur quoi vous devez travailler précisément pour obtenir le poste que vous méritez.</p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="flex flex-col justify-center gap-3 pt-20">
              <h1 className={`${lusitana.className} font-[100] text-[50px] leading-[1.2] tracking-[-0.027em]`}>Nos experts en parlent le mieux !</h1>
            </div>
          </div>
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="flex flex-col items-center justify-center pt-10">
                <Reviews></Reviews>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center pt-10 max-w-2xl mx-auto">
          <Label className={`${lusitana.className} font-[100] text-[50px] leading-[1.2] tracking-[-0.027em] text-center pt-20`}>
            Mettez toutes les chances de votre côté et rencontrez les plus grands acteurs de votre domaine.
          </Label>
          <Label className={`${lusitana.className} font-[100] text-[20px] leading-[1.2] tracking-[-0.027em] text-center text-slate-500/80`}>
            Nos experts métiers vous offrent des simulations d’entretiens adaptées à vos aspirations et aux exigences de l’entreprise de vos rêves.
          </Label>
          </div>
            <div className="flex justify-between pt-10 max-w-6xl mx-auto gap-10">
              <IconBox icon="user-lock.svg" description="Vous pouvez vous préparer en toute discrétion grâce à notre service entièrement anonyme, sans compromettre votre candidature." title="Confidentialité totale"/>
              <IconBox icon="tools.svg" description="Bénéficiez des conseils avisés et des retours d’expérience de professionnels actifs au sein des entreprises ciblées." title="Accès aux experts"/>
              <IconBox icon="time.svg" description="Évitez de parcourir d’innombrables ressources en ligne, notre plateforme centralise l’accès aux meilleurs experts pour votre réussite." title="Gagnez du temps"/>
            </div>

            <div className="flex justify-center gap-8 flex-wrap pt-20 gap-20 pb-10">
            <div>
              <Image
                src='/teacher.jpg'
                width={500}
                height={500}
                alt="teacher"
              />   
            </div>
            <div className="flex flex-col justify-center w-1/3 gap-10">
              <h1 className={`${lusitana.className} font-[100] text-[60px] leading-[1.2] tracking-[-0.027em]`}>Préparation <span className="font-bold">personnalisée</span></h1>
              <p className={`${lusitana.className} font-[100] text-[20px] leading-[1.2] tracking-[-0.027em] text-left text-slate-500/80`}>Nos experts métiers vous offrent des simulations d’entretiens adaptées à vos aspirations et aux exigences de l’entreprise de vos rêves.</p>
              <div className="flex flex-col">
                <div className="flex items-center pb-5">
                  <div className="rounded-full bg-pink-300 h-8 w-8 flex items-center justify-center mr-4 flex-shrink-0">
                      <FaCheck/>
                    </div>
                    <div className={`${lusitana.className} font-[100] text-[20px] leading-[1.2] tracking-[-0.027em]`}>
                      Réservez des simulations d&aposentretiens à l&aposheure qui vous convient le mieux, en fonction de votre emploi du temps
                    </div>
                </div>
                <div className="flex items-center pb-5">
                  <div className="rounded-full bg-pink-300 h-8 w-8 flex items-center justify-center mr-4 flex-shrink-0">
                      <FaCheck/>
                    </div>
                    <div className={`${lusitana.className} font-light text-[20px] leading-[1.2] tracking-[-0.027em]`}>
                      Obtenez un avantage considérable à un tarif accessible, sans les frais élevés d&aposun coaching traditionnel.
                    </div>
                </div>
                <div className="flex items-center">
                  <div className="rounded-full bg-pink-300 h-8 w-8 flex items-center justify-center mr-4 flex-shrink-0">
                      <FaCheck/>
                    </div>
                    <div className={`${lusitana.className} font-light text-[20px] leading-[1.2] tracking-[-0.027em]`}>
                      Que vous visiez la finance, la technologie, le marketing, ou d&aposautres domaines, nos experts couvrent un large éventail de secteurs.
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-emerald-100 pt-20 pb-20">
          <div className="flex justify-center gap-8 flex-wrap pt-20 gap-20">
          <div className="flex flex-col justify-center w-1/3 gap-10">
              <h1 className={`${lusitana.className} font-[100] text-[60px] leading-[1.2] tracking-[-0.027em]`}>Réussite <span className="font-bold">assurée</span></h1>
              <p className={`${lusitana.className} font-[100] text-[20px] leading-[1.2] tracking-[-0.027em] text-left text-slate-500/80`}>Bénéficiez des conseils avisés et des retours d&aposexpérience de professionnels actifs au sein des entreprises ciblées.</p>
              <div className="flex flex-col">
                <div className="flex items-center pb-5">
                  <div className="rounded-full bg-pink-300 h-8 w-8 flex items-center justify-center mr-4 flex-shrink-0">
                      <FaCheck/>
                    </div>
                    <div className={`${lusitana.className} font-[100] text-[20px] leading-[1.2] tracking-[-0.027em]`}>
                    Nos candidats obtiennent des résultats exceptionnels lors des entretiens, augmentant ainsi leurs chances de décrocher leur job idéal.
                    </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-green-300 h-96 w-1/3 flex items-center justify-center">
              <Image
                    src='/key-metrics.webp'
                    width={400}
                    height={400}
                    alt="key-metrics"
                    className="border border-solid border-black rounded-xl"
                  />   
              </div>
              </div>
        </div>
        <div className="w-full pb-20">
          <div className="flex justify-center gap-8 flex-wrap pt-20 gap-20">
            <div className="w-1/3 flex items-center justify-center">
                <Image
                      src='/guy_calendar.svg'
                      width={600}
                      height={600}
                      alt="guy_calendar"
                    />   
                </div>
            <div className="flex flex-col justify-center w-1/3 gap-10">
                <h1 className={`${lusitana.className} font-[100] text-[60px] leading-[1.2] tracking-[-0.027em]`}>Réservez votre session dès maintenant et  <span className="font-bold">démarquez-vous</span> en entretien.</h1>
                <p className={`${lusitana.className} font-[100] text-[20px] leading-[1.2] tracking-[-0.027em] text-left text-slate-500/80`}>Boostez votre réussite professionnelle dès aujourd’hui !</p>
                <Button className="mt-4 rounded">C&aposest parti !</Button>
              </div>
            </div>
        </div>
      </main>
  );
}

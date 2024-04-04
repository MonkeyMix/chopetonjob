import Image from "next/image"

export function Logo() {
  return (
      <div
          className={`flex flex-row items-center leading-none`}
      >
        <Image
            src='/logo-black.svg'
            width={500}
            height={500}
            className="h-20 w-20 text-muted-foreground"
            alt="logo"
        />            
      </div>
  );
}

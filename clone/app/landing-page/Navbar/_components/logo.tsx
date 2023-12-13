import Link from "next/link"
import Image from "next/image";



const logo = () => {
  return (
    <Link href="/">
        
    

    <Image
    src="/images/bird-logo.png"
    alt="Bird logo"
    width={80}
     height={80}
     className="mr-6"
     />
     </Link>
  )
}

export default logo
"use client"
import Image from "next/image"
import Link from "next/link"
import logo from "@/public/logo.svg"
import illustrationWorking from "@/public/illustration-working.svg"
import { IoMenu } from "react-icons/io5"
import { useState } from "react"



function Hero() {
  const [ isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    navigator.clipboard.writeText(shortUrl)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  async function handleShorten() {
    if (!url.trim()) {
      setError("Please add a link")
      return
    }
    const res = await fetch("/api/shorten", {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify({url})
    })

    const data = await res.json();
    setShortUrl(data.shortUrl)
  }

  return (
    <div className=" relative pb-36 md:pb-24 px-6 md:px-0">
      <nav className=" container mx-auto flex items-center justify-between py-8">
        <div className="flex items-center gap-x-5">
          <Link href="">
            <Image src={logo} alt="logo" />
          </Link>
          <div className=" hidden md:flex items-center gap-x-5">
            <Link href="">Features</Link>
            <Link href="">Pricing</Link>
            <Link href="">Resources</Link>
          </div>
        </div>

        <div className=" hidden md:flex items-center gap-x-4">
          <button className=" text-gray-500">Login</button>
          <button className=" bg-primaryBlue text-white rounded-full py-2 px-5">Sign Up</button>
        </div>

        <div className=" md:hidden">
          <button onClick={ () => setIsOpen(!isOpen) }>
            <IoMenu  className=" text-3xl cursor-pointer"/>
          </button>
          {
            isOpen && (
    
              <div className=" fixed top-24 left-6 bg-primaryPurple px-5 py-10 w-[89%] rounded-lg">
                <div className=" flex flex-col items-center gap-y-6 pb-8 text-white text-lg font-bold">
                  <Link href="">Features</Link>
                  <Link href="">Pricing</Link>
                  <Link href="">Resources</Link>
                </div>
                <div className=" flex flex-col items-center gap-y-6 border-t-2 border-gray-400 pt-5 text-lg font-bold">
                  <button className=" text-white">Login</button>
                  <button className=" bg-primaryBlue text-white rounded-full py-2 px-5 w-full">Sign Up</button>
                </div>
              </div>
            )
          }
        </div>

      </nav>

      <div className=" flex flex-col-reverse md:flex-row items-center gap-x-20 gap-y-14 py-14">
        <div className=" md:pl-14 lg:pl-24 md:w-160 px-6 md:px-0 text-center md:text-left">
          <h1 className=" text-primaryPurple font-bold text-4xl md:text-5xl mb-3">More than just shorter links</h1>
          <p className=" text-gray-400">
            Build your brand’s recognition and get detailed insights 
            on how your links are performing.
          </p>
          <button className=" bg-primaryBlue text-white rounded-full py-2 px-8 mt-5">Get Started</button>
        </div>

        <div className="">
          <Image src={illustrationWorking} alt="illustration-working.svg" className="" />
        </div>
      </div>

      <div className=" absolute -bottom-80 md:-bottom-56 left-5 md:left-12 w-11/12 z-20">
        <div className=" py-12 px-6 md:px-8 bg-primaryPurple bg-[url('/bg-shorten-mobile.svg')]  md:bg-[url('/bg-shorten-desktop.svg')]  bg-no-repeat bg-cover h-52  md:h-36 rounded-lg flex flex-col md:flex-row gap-4">
          <div className=" w-full md:w-[85%]">
            <input 
              type="search" 
              value={url}
              onChange={ (e: React.ChangeEvent<HTMLInputElement>) => {
                setUrl(e.target.value)
                setError("")
              }}
              placeholder="Shorten a link here..." 
              className={`rounded-lg bg-white text-gray-900 py-3 px-5 w-full outline-0  border-0
                ${error ? "border-2 border-red-500" : "border-0" }`} 
            />
            {error && (
              <div className=" mt-2">
                <p className="text-red-500 text-sm italic ">{error}</p>
              </div>
            )}
          </div>
          <button 
            className=" bg-primaryBlue text-white rounded-lg py-3 px-8 outline-0 cursor-pointer border-0"
            onClick={handleShorten}
          >
            Shorten It
            !
          </button>
        </div>
        {shortUrl && (
          <div className=" bg-white rounded-lg py-10 px-6 md:px-8 mt-7 gap-y-4 flex flex-col md:flex-row items-center justify-between shadow-2xl  bg">

            <div className=" w-full h-6 md:w-1/2 overflow-hidden">{url}</div>
            

            <div className=" flex flex-col md:flex-row  md:items-center md:justify-end  gap-3 w-full md:w-1/2 ">
              {shortUrl && (
                <p className=" text-primaryBlue">{shortUrl}</p>
              )}
              <button 
                onClick={handleCopy}
                className={` text-white w-full md:w-1/4  py-2 px-6 text-base rounded-lg  cursor-pointer 
                  ${copied ? "bg-primaryPurple"  : " bg-primaryBlue hover:bg-primaryBlue/50"}`}
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        )}

        
      </div>
    </div>
  )
}

export default Hero
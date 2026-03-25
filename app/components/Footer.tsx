import Link from "next/link"
import logo from "@/public/logo.svg"
import Image from "next/image"
import { FaFacebookSquare, FaPinterest } from "react-icons/fa"
import { FaInstagram, FaXTwitter } from "react-icons/fa6"


function Footer() {
  return (
    <div className=" bg-gray-950 py-14 md:py-10">
      <div className=" flex flex-col justify-center items-center md:flex-row md:justify-between md:items-start gap-x-5 gap-y-7 container mx-auto">
        <div className="">
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <div className=" flex flex-col md:flex-row gap-y-5 gap-x-12 text-center md:text-left">
          <div className="">
            <h3 className=" text-white font-bold mb-4">Features</h3>
            <ul className=" text-gray-500 space-y-1">
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Support</li>
            </ul>
          </div>

          <div>
            <h3 className=" text-white font-bold mb-4">Resources</h3>
            <ul className=" text-gray-500 space-y-1">
              <li>Blog</li>
              <li>Developers</li>
              <li>Analytics</li>
            </ul>
          </div>

          <div>
            <h3 className=" text-white font-bold mb-4">Company</h3>
            <ul className=" text-gray-500 space-y-1">
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className=" flex gap-5 items-center text-white text-2xl">
          <Link href="/">
            <FaFacebookSquare />
          </Link>

          <Link href="/">
            <FaXTwitter />
          </Link>

          <Link href="/">
            <FaPinterest />
          </Link>

          <Link href="/">
            <FaInstagram />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
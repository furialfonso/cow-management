import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


export const metadata: Metadata = {
  title: 'Login Page',
  description: 'Login Page',
  icons: ['cow.svg'],
};

const LoginPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat">
      <div className="rounded-xl bg-gray-700 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-4 flex flex-col items-center">
            <Image
              className='rounded-xl'
              src={"cow.svg"}
              alt="Cow Logo"
              width={350}
              height={350} />
            <h1 className="mb-2 mt-2 text-2xl text-red-200">Cow App</h1>
          </div>
          <form>
            <div className="mb-4 text-lg">
              <input className="rounded-3xl border-none bg-cyan-400 bg-opacity-50 px-20 py-2 text-center text-inherit placeholder-gray-800 shadow-lg outline-none backdrop-blur-md" type="text" name="name" placeholder="user" />
            </div>

            <div className="mb-4 text-lg">
              <input className="rounded-3xl border-none bg-cyan-400 bg-opacity-50 px-20 py-2 text-center text-inherit placeholder-gray-800 shadow-lg outline-none backdrop-blur-md" type="Password" name="name" placeholder="password" />
            </div>
            <div className="mt-8 flex justify-center text-lg text-black">
              <Link href={"/dashboard/pokemons"} className="rounded-3xl bg-cyan-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-red-200">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;

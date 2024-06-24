'use client';
import Image from 'next/image';
import { FiBox } from 'react-icons/fi';
import { CiSearch } from 'react-icons/ci';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { RiLinkM } from 'react-icons/ri';
import { AiOutlineTable } from 'react-icons/ai';
import { IoAddCircleSharp } from 'react-icons/io5';
import { CiCircleInfo } from 'react-icons/ci';

export default function Home() {
  const [showModal, setShowModal] = useState(true);
  return (
    <main className="flex min-h-screen flex-col items-center text-xs relative">
      <section className="text-center">
        <button className="float-end bg-slate-500 text-slate-300 px-4 py-2.5 rounded-md inline-flex absolute right-4 mt-3">
          <FiBox className="mr-2 self-center text-sm font-medium	" />
          Request
        </button>
        <h1 className="text-5xl text-slate-800 font-extrabold mt-6">Library</h1>
        <p className="mt-8 text-sm font-medium">
          Browse for assets needed to report and present analysis.
        </p>
      </section>

      <section className="mt-6 w-5/6 relative">
        <div>
          <CiSearch className="text-lg top-6 left-2 absolute font-semibold text-slate-600" />
          <input
            className="w-full rounded-md border-slate-200 h-10 mt-3 pl-8 text-xs border-solid border-2 focus-visible:border-white focus:border-white"
            type="text"
            placeholder="Type to search..."
          />
        </div>

        <nav className="w-full rounded-md mt-8 grid grid-cols-4 p-1.5 bg-[#f1f5f8]">
          <button className="bg-slate-100 text-slate-300 px-4 py-2.5 rounded-md font-semibold text-slate-400 focus:bg-white focus:text-slate-900">
            Featured
          </button>
          <button className="bg-slate-100 text-slate-300 px-4 py-2.5 rounded-md font-semibold text-slate-400 focus:bg-white focus:text-slate-900">
            KPI
          </button>
          <button className="bg-slate-100 text-slate-300 px-4 py-2.5 rounded-md font-semibold text-slate-400 focus:bg-white focus:text-slate-900">
            Layouts
          </button>
          <button className="bg-slate-100 text-slate-300 px-4 py-2.5 rounded-md font-semibold text-slate-400 focus:bg-white focus:text-slate-900">
            Storyboards
          </button>
        </nav>

        <h2 className="text-3xl font-semibold text-slate-700 mt-10">
          Featured
        </h2>
        <p className="text-slate-500 mt-1">Curated top picks from this week</p>
      </section>

      <section className="mt-10 mx-5 w-9/12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-3 ">
          <article
            className="bg-white rounded-md p-2 flex flex-row border-gray-50	border-solid border-2 border-slate-100 cursor-pointer"
            tabIndex={0}
            onClick={() => setShowModal((prev) => !prev)}
          >
            <div>
              <Image width={80} height={80} src="/img.png" alt={''} />
            </div>
            <div className="content-center">
              <p className="font-bold">Item Name</p>
              <p className="font-semibold">
                Short description of the item goes nicely here.
              </p>
              <time className="text-slate-400" dateTime="06/27/2024">
                06/27/2024
              </time>
            </div>
          </article>
          <article
            className="bg-white rounded-md p-2 flex flex-row border-black	border-solid border-2 border-slate-100 cursor-pointer"
            tabIndex={0}
            onClick={() => setShowModal((prev) => !prev)}
          >
            <div>
              <Image width={80} height={80} src="/img.png" alt={''} />
            </div>
            <div className="content-center">
              <p className="font-bold">Item Name</p>
              <p className="font-semibold">
                Short description of the item goes nicely here.
              </p>
              <time className="text-slate-400" dateTime="06/27/2024">
                06/27/2024
              </time>
            </div>
          </article>
          <article
            className="bg-white rounded-md p-2 flex flex-row border-gray-700	border-solid border-2 border-slate-100 cursor-pointer"
            tabIndex={0}
            onClick={() => setShowModal((prev) => !prev)}
          >
            <div>
              <Image width={80} height={80} src="/img.png" alt={'img-mock'} />
            </div>
            <div className="content-center">
              <p className="font-bold">Item Name</p>
              <p className="font-semibold">
                Short description of the item goes nicely here.
              </p>
              <time className="text-slate-400" dateTime="06/27/2024">
                06/27/2024
              </time>
            </div>
          </article>
          <article
            className="bg-white rounded-md p-2 flex flex-row border-gray-950	border-solid border-2 border-slate-100 cursor-pointer"
            tabIndex={0}
            onClick={() => setShowModal((prev) => !prev)}
          >
            <div>
              <Image width={80} height={80} src="/img.png" alt={''} />
            </div>
            <div className="content-center">
              <p className="font-bold">Item Name</p>
              <p className="font-semibold">
                Short description of the item goes nicely here.
              </p>
              <time className="text-slate-400" dateTime="06/27/2024">
                06/27/2024
              </time>
            </div>
          </article>
        </div>
      </section>

      <section className="mt-6 w-5/6 relative">
        <h2 className="text-3xl font-semibold text-slate-700 mt-10">
          Trending
        </h2>
        <p className="text-slate-500 mt-1">Most popular by community</p>
      </section>

      <section className="mt-10 mx-5 mx-5 w-9/12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-3 ">
          <article
            className="rounded-md p-2 flex flex-row cursor-pointer"
            tabIndex={0}
            onClick={() => setShowModal((prev) => !prev)}
          >
            <div>
              <Image width={80} height={80} src="/img.png" alt={''} />
            </div>
            <div className="content-center ml-1">
              <p className="font-bold">Item Name</p>
              <p className="font-semibold">
                Short description of the item goes nicely here.
              </p>
              <time className="text-slate-400" dateTime="06/27/2024">
                06/27/2024
              </time>
            </div>
          </article>
          <article
            className="rounded-md p-2 flex flex-row cursor-pointer"
            tabIndex={0}
            onClick={() => setShowModal((prev) => !prev)}
          >
            <div>
              <Image width={80} height={80} src="/img.png" alt={''} />
            </div>
            <div className="content-center ml-1">
              <p className="font-bold">Item Name</p>
              <p className="font-semibold">
                Short description of the item goes nicely here.
              </p>
              <time className="text-slate-400" dateTime="06/27/2024">
                06/27/2024
              </time>
            </div>
          </article>
          <article
            className="rounded-md p-2 flex flex-row cursor-pointer"
            tabIndex={0}
            onClick={() => setShowModal((prev) => !prev)}
          >
            <div>
              <Image width={80} height={80} src="/img.png" alt={'img-mock'} />
            </div>
            <div className="content-center ml-1">
              <p className="font-bold">Item Name</p>
              <p className="font-semibold">
                Short description of the item goes nicely here.
              </p>
              <time className="text-slate-400" dateTime="06/27/2024">
                06/27/2024
              </time>
            </div>
          </article>
          <article
            className="rounded-md p-2 flex flex-row cursor-pointer"
            tabIndex={0}
            onClick={() => setShowModal((prev) => !prev)}
          >
            <div>
              <Image width={80} height={80} src="/img.png" alt={''} />
            </div>
            <div className="content-center ml-1">
              <p className="font-bold">Item Name</p>
              <p className="font-semibold">
                Short description of the item goes nicely here.
              </p>
              <time className="text-slate-400" dateTime="06/27/2024">
                06/27/2024
              </time>
            </div>
          </article>
        </div>
      </section>

      {showModal ? (
        <article
          tabIndex={-1}
          className="fixed flex flex-col bg-white rounded-md p-5 min-h-screen m-5 shadow-lg border-2 border-slate-200 border-solid min-w-96 max-w-screen-lg"
        >
          <div className="text-right flex flex-row justify-end w-full text-sm">
            <RiLinkM className="mr-1 cursor-pointer rounded-full hover:bg-slate-200" />
            <IoMdClose
              className="cursor-pointer rounded-full hover:bg-slate-200"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </div>
          <section>
            <div className="flex flex-col gap-y-1 items-center">
              <span className="h-12 w-14 bg-slate-100 text-center justify-center flex items-center rounded-md">
                <AiOutlineTable className="text-4xl	" />
              </span>
              <h1 className="text-2xl font-bold mt-3">
                INTES
                <span className="text-xs bg-slate-100 rounded-md p-1 text-slate-400 ml-1 align-middle">
                  Layout
                </span>
              </h1>
              <p className="text-slate-500">Descriptive name of the Layout</p>
              <p className="mt-3 text-center font-semibold">
                Those options are alreadyb baked in with this model shoot me an
                email clear blue water we need distributors to evangelize the
                new line to local markets.
              </p>
              <div className="mt-3">
                <span className="px-2.5 py-0.5 bg-slate-200 border-solid border-2 border-slate-300 rounded mr-1">
                  #comms
                </span>
                <span className="px-2.5 py-0.5 bg-slate-200 border-solid border-2 border-slate-300 rounded mr-1">
                  #coverage
                </span>
                <span className="px-2.5 py-0.5 bg-slate-200 border-solid border-2 border-slate-300 rounded mr-1">
                  #stakeholders
                </span>
              </div>
            </div>
          </section>
          <section className="mt-5">
            <div className="grid grid-cols-7 justify-items-center my-5">
              <div className="w-fit text-center">
                <p className="text-sm font-bold">2485</p>
                <span className="flex flex-row items-center text-slate-500">
                  Used <CiCircleInfo />
                </span>
              </div>
              <span className="text-4xl text-slate-300 font-light scale-y-100 font-thin	w-fit">
                |
              </span>
              <div className="w-fit text-center">
                <p className="text-sm font-bold">Universal</p>
                <span className="flex flex-row items-center text-slate-500">
                  Type
                </span>
              </div>
              <span className="text-4xl text-slate-300 font-light scale-y-100 font-thin	w-fit">
                |
              </span>
              <div className="w-fit text-center">
                <p className="text-sm font-bold">6</p>
                <span className="flex flex-row items-center text-slate-500 text-nowrap	">
                  Pages No. <CiCircleInfo />
                </span>
              </div>
              <span className="text-4xl text-slate-300 font-light scale-y-100 font-thin	w-fit">
                |
              </span>
              <div className="w-fit text-center">
                <p className="text-sm font-bold">07/23/2024</p>
                <span className="flex flex-row items-center text-slate-500">
                  Last Updated
                </span>
              </div>
            </div>
            <div className="w-full h-60 bg-slate-100 rounded"></div>
          </section>
          <section className="mt-5">
            <h2 className="text-xl font-bold">Business Questions</h2>
            <div className="grid grid-cols-2 mt-3 gap-y-2 gap-x-2">
              <div
                className="rounded-md p-2 flex flex-row hover:bg-slate-100"
                tabIndex={0}
              >
                <div className="content-center ml-1 ">
                  <p className="font-bold text-sm">Questions 1</p>
                  <p className="text-slate-400 text-sm">
                    Short description of the item goes nicely here.
                  </p>
                </div>
              </div>
              <div
                className="rounded-md p-2 flex flex-row hover:bg-slate-100"
                tabIndex={0}
              >
                <div className="content-center ml-1 ">
                  <p className="font-bold text-sm">Questions 1</p>
                  <p className="text-slate-400 text-sm">
                    Short description of the item goes nicely here.
                  </p>
                </div>
              </div>
              <div
                className="rounded-md p-2 flex flex-row hover:bg-slate-100"
                tabIndex={0}
              >
                <div className="content-center ml-1 ">
                  <p className="font-bold text-sm">Questions 1</p>
                  <p className="text-slate-400 text-sm">
                    Short description of the item goes nicely here.
                  </p>
                </div>
              </div>
              <div
                className="rounded-md p-2 flex flex-row hover:bg-slate-100"
                tabIndex={0}
              >
                <div className="content-center ml-1 ">
                  <p className="font-bold text-sm">Questions 1</p>
                  <p className="text-slate-400 text-sm">
                    Short description of the item goes nicely here.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="w-full mt-10">
            <button className="flex items-center justify-center h-8 w-full bg-[#0e1729] text-white text-center rounded">
              <IoAddCircleSharp className="mr-2 text-sm" />
              Favorite item
            </button>
          </div>
        </article>
      ) : null}
    </main>
  );
}

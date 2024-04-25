import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useRouter } from 'next/navigation';
import { useUser } from '@/contexts/UserContext';
import { useRoom } from '@/contexts/RoomContext';
import axios from 'axios';

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState<string>("");
  const [id, setId] = useState<string>("");
  const { myRooms, setMyRooms } = useRoom();
  const router = useRouter();
  const { userId } = useUser()


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const newRoom = await axios.post(
      process.env.NEXT_PUBLIC_BASE_URL + `rooms/`,
      { title, participants: [userId], userId, url: id}
    );
    console.log("yash", newRoom.data)
    setMyRooms([
      ...myRooms,
      newRoom.data
    ]);
    closeModal()
    // router.replace("/stream");
  }
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="my-8 z-50 inset-0 flex items-center text-white">
        <button
          type="button"
          onClick={openModal}
          className="bg-orange-vr font-[700] p-2 rounded-xl cursor-pointer  w-64 z-50"
        >
          Create Stream
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative  z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black opacity-80" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-black-3 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium mb-5 leading-6 text-white"
                  >
                    Create Stream
                  </Dialog.Title>

                  <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <label
                        htmlFor="title"
                        className="block mb-2 text-sm font-medium text-white"
                      >
                        Stream Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="bg-gray-50 focus:outline-none  text-gray-900 sm:text-sm rounded-lg border focus:border-primary block w-full p-2.5 "
                        required={true}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="roomId"
                        className="block mb-2 text-sm font-medium text-white"
                      >
                        VideoUrl
                      </label>
                      <input
                        type="text"
                        id="roomId"
                        value={id}
                        minLength={5}
                        onChange={(e) => setId(e.target.value)}
                        className="bg-gray-50  focus:outline-none text-gray-900 sm:text-sm rounded-lg border focus:border-primary block w-full p-2.5 "
                        required={true}
                      />
                    </div>
                    <button type="submit" className="btn !bg-orange-vr">
                      Join Room
                    </button>
                  </form>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

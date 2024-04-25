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
          Claim Reward
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
            <div className="fixed inset-0 bg-black/25" />
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Your Rewards
                  </Dialog.Title>

                  

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import ReactPlayer from "react-player";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

interface VideoModalProps {
  videoUrl: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
export default function VideoModal({
  videoUrl,
  isOpen,
  setIsOpen,
}: VideoModalProps) {
  //   let [isOpen, setIsOpen] = useState(true);
  const { push } = useRouter();
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md "
        aria-hidden="true"
      />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="mx-auto w-full rounded bg-white">
          <div className="relative aspect-video overflow-hidden w-full">
            <ReactPlayer
              url="/videos/hero-video.mp4"
              className="absolute object-cover"
              width="100%"
              height="100%"
              playing={isOpen}
              stopOnUnmount={true}
              //   controls={true}
              download={false}
              pip={false}
              onEnded={() => {
                setIsOpen(false);
                push("#i-pace", undefined, { scroll: false });
              }}
            />
            {/* close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-0 right-0 border-4 border-white rounded-full cursor-pointer group hover:border-white/50 transition-all duration-300"
            >
              <XMarkIcon className="w-6 h-6 lg:h-16 lg:w-16 text-white group-hover:text-white/50 transition-all duration-300" />
            </button>
          </div>

          {/* ... */}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

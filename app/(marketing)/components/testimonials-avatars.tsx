import Image from "next/image";

const TestimonialsAvatars = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-3">
      <div className="flex flex-col justify-center items-center md:items-start gap-1">
        <div className="flex">
          <div className="flex -space-x-2 overflow-hidden">
            <Image
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Team member profile"
              width={40}
              height={40}
              priority
            />
            <Image
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Team member profile"
              width={40}
              height={40}
              priority
            />
            <Image
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt="Team member profile"
              width={40}
              height={40}
              priority
            />
            <Image
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Team member profile"
              width={40}
              height={40}
              priority
            />
          </div>
        </div>

        <div className="text-base text-base-content/80">
          <span className="font-semibold text-base-content">54 users</span> are
          happy
        </div>
      </div>
    </div>
  );
};

export default TestimonialsAvatars;
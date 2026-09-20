import React from "react";

import { FaShareSquare } from "react-icons/fa";
import { FaBusinessTime, FaCloud, FaYoutube } from "react-icons/fa6";
import { GiProgression } from "react-icons/gi";
import { MdImageSearch } from "react-icons/md";
import { RiFolderSettingsFill } from "react-icons/ri";
import { GrNotes, GrTasks } from "react-icons/gr";

type DataType = {
  id: number;
  heading: string;
  description: string;
  icon: React.ReactNode;
};

const data: DataType[] = [
  {
    id: 1,
    heading: "Timetable",
    description: "Plan your classes",
    icon: <FaBusinessTime />,
  },
  {
    id: 2,
    heading: "Tasks",
    description: "Stay productive",
    icon: <GrTasks />,
  },
  {
    id: 3,
    heading: "Notes",
    description: "Rich text notes",
    icon: <GrNotes />,
  },
  {
    id: 4,
    heading: "YouTube Save",
    description: "Bookmark videos",
    icon: <FaYoutube />,
  },
  {
    id: 5,
    heading: "Folders",
    description: "Organise content",
    icon: <RiFolderSettingsFill />,
  },
  {
    id: 6,
    heading: "Sharing",
    description: "Share with others",
    icon: <FaShareSquare />,
  },
  {
    id: 7,
    heading: "Search",
    description: "Find anything",
    icon: <MdImageSearch />,
  },
  {
    id: 8,
    heading: "Progress",
    description: "Track your growth",
    icon: <GiProgression />,
  },
  {
    id: 9,
    heading: "Cloud Storage",
    description: "Store your files securely",
    icon: <FaCloud />,
  },
];

const Features = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 text-black">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10 text-center sm:mb-14">
          <h2 className="text-3xl font-bold  sm:text-4xl lg:text-5xl">
            Everything You Need
          </h2>

          <p className="mt-3 text-sm text-gray-400 sm:text-base">
            All your study tools in one place
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {data.map((item) => (
            <article
              key={item.id}
              className="group rounded-2xl border border-blue-200 bg-white text-black p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-white-900 sm:p-6"
            >
              {/* Icon */}
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-2xl text-blue-500 transition group-hover:bg-blue-500 group-hover:text-white">
                {item.icon}
              </div>

              {/* Heading */}
              <h3 className="text-lg font-semibold  sm:text-xl">
                {item.heading}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-6 text-gray-400">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the art Facilities",
    description: "Great, clean, new facilities to check out",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Diverse Classes",
    description: "Plenty of workout classes to get you into your shape",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and pro trainers",
    description: "1 on 1 treatment and best trainers in the bussniess.",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <div className="md:my-5 md:w-3/5">
          <HText>MORE THAN A REGULAR GYM!</HText>
          <p className="my-5 text-sm">
            Providing top teir fitness equipment, trainers and classes to get
            you into your ultimate shape.
          </p>
        </div>
        {/* BENEFITS */}
        <div className="mt-5 items-center justify-between gap-8 md:flex">
          {benefits.map((benefit) => (
            <Benefit />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;

import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@majidmisger",
    icon: Icons.gitHub,
    link: "https://github.com/majidmisger",
  },
  {
    name: "LinkedIn",
    username: "Majid Niyaz",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/majid-misger/",
  },
  {
    name: "Twitter",
    username: "@Majid_riaz_",
    icon: Icons.twitter,
    link: "https://x.com/Majid_riaz_",
  },
  {
    name: "Gmail",
    username: "majidmisger42",
    icon: Icons.gmail,
    link: "mailto:majidmisger42@gmail.com",
  },
];

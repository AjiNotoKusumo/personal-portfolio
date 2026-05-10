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
    username: "@AjiNotoKusumo",
    icon: Icons.gitHub,
    link: "https://github.com/AjiNotoKusumo",
  },
  {
    name: "LinkedIn",
    username: "Aji Noto Kusumo",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/ajinotokusumo",
  },
  {
    name: "Gmail",
    username: "Aji",
    icon: Icons.gmail,
    link: "mailto:aji201101@gmail.com",
  },
];

import {
  AlertTriangle,
  ArrowRight,
  BookMarked,
  Building,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  File,
  FileText,
  HelpCircle,
  Image,
  Laptop,
  Loader2,
  LucideProps,
  Menu,
  Moon,
  MoreVertical,
  Music,
  Palette,
  Phone,
  Pizza,
  Plus,
  Scroll,
  Settings,
  Sparkles,
  SunMedium,
  Trash,
  User,
  X,
  Download,
  Zap,
} from "lucide-react";
import { AiFillStar } from "react-icons/ai";
import { BiLaugh, BiSolidUser } from "react-icons/bi";
import { BsInfoCircle, BsQuestionCircle } from "react-icons/bs";
import {
  HiBriefcase,
  HiOutlineExternalLink,
  HiOutlineLink,
} from "react-icons/hi";
import { IoIosGitBranch } from "react-icons/io";
import {
  SiAmazonaws,
  SiAngular,
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiGmail,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiLinkedin,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNestjs,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiSocketdotio,
  SiTailwindcss,
  SiTwitter,
  SiTypescript,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiJenkins,
  SiGit,
  SiClickhouse,
  SiApachekafka,
  SiGooglecloud,
} from "react-icons/si";

export const Icons = {
  contact: Phone,
  gitRepoIcon: BookMarked,
  gitOrgBuilding: Building,
  gitBranch: IoIosGitBranch,
  download: Download,
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  menu: Menu,
  chevronDown: ChevronDown,
  laughEmoji: BiLaugh,
  check: Check,
  infoMark: BsInfoCircle,
  questionMark: BsQuestionCircle,
  link: HiOutlineLink,
  externalLink: HiOutlineExternalLink,
  star: AiFillStar,
  amazonaws: SiAmazonaws,
  angular: SiAngular,
  bootstrap: SiBootstrap,
  css3: SiCss3,
  express: SiExpress,
  graphql: SiGraphql,
  html5: SiHtml5,
  javascript: SiJavascript,
  mongodb: SiMongodb,
  PostgreSQL : SiPostgresql,
  Redis : SiRedis, 
  Docker : SiDocker,
  Jenkins: SiJenkins,
  Git: SiGit,
  clickhouse: SiClickhouse,
  kafka: SiApachekafka,
  googlecloud: SiGooglecloud,
  java: ({ size = 24, ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M8 10h8v5.5a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V10z" />
      <path d="M16 11.2h1.6a2.2 2.2 0 1 1 0 4.4H16" />
      <path d="M7 21h10" />
      <path d="M10 3.5c.5.9.5 1.5 0 2.3.6.9.6 1.5 0 2.4" />
      <path d="M13 3.5c.5.9.5 1.5 0 2.3.6.9.6 1.5 0 2.4" />
    </svg>
  ),
  bigquery: ({ size = 24, ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M12 2.4 20.4 7.2v9.6L12 21.6 3.6 16.8V7.2L12 2.4z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <rect x="7.1" y="12.2" width="2.2" height="5" rx="0.4" fill="currentColor" />
      <rect x="10.9" y="8.4" width="2.2" height="8.8" rx="0.4" fill="currentColor" />
      <rect x="14.7" y="10.4" width="2.2" height="6.8" rx="0.4" fill="currentColor" />
    </svg>
  ),
  bigtable: ({ size = 24, ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <rect x="3" y="3" width="5.2" height="5.2" rx="1" />
      <rect x="9.4" y="3" width="5.2" height="5.2" rx="1" />
      <rect x="15.8" y="3" width="5.2" height="5.2" rx="1" />
      <rect x="3" y="9.4" width="5.2" height="5.2" rx="1" />
      <rect x="9.4" y="9.4" width="5.2" height="5.2" rx="1" />
      <rect x="15.8" y="9.4" width="5.2" height="5.2" rx="1" />
      <rect x="3" y="15.8" width="5.2" height="5.2" rx="1" />
      <rect x="9.4" y="15.8" width="5.2" height="5.2" rx="1" />
      <rect x="15.8" y="15.8" width="5.2" height="5.2" rx="1" />
    </svg>
  ),
  gcs: ({ size = 24, ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M7 5.5h10l1.4 3.7H5.6L7 5.5z" />
      <path d="M5.2 10h13.6l-1.2 9.1A2.3 2.3 0 0 1 15.33 21.2H8.67a2.3 2.3 0 0 1-2.27-2.1L5.2 10z" />
    </svg>
  ),
  mui: SiMui,
  mysql: SiMysql,
  nestjs: SiNestjs,
  netlify: SiNetlify,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  react: SiReact,
  redux: SiRedux,
  socketio: SiSocketdotio,
  tailwindcss: SiTailwindcss,
  typescript: SiTypescript,
  gmail: SiGmail,
  twitter: SiTwitter,
  linkedin: SiLinkedin,
  userFill: BiSolidUser,
  work: HiBriefcase,
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  ),
  successAnimated: ({ ...props }: LucideProps) => (
    <div className="svg-container">
      <svg
        className="ft-green-tick"
        xmlns="http://www.w3.org/2000/svg"
        height="5rem"
        width="5rem"
        viewBox="0 0 48 48"
        aria-hidden="true"
        {...props}
      >
        <circle className="circle" cx="24" cy="24" r="22" />
        <path
          className="tick"
          fill="none"
          stroke="currentColor"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          d="M14 27l5.917 4.917L34 17"
        />
      </svg>
    </div>
  ),
  retro: Palette,
  cyberpunk: Zap,
  paper: Scroll,
  aurora: Sparkles,
  synthwave: Music,
};

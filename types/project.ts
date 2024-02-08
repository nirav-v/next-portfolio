export type ProjectType = {
  id: number;
  title: string;
  desc: string;
  img: string;
  link?: string;
  github?: string;
  tags: { name: string; icon: React.JSX.Element }[];
};

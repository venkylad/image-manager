export type Image = {
  id: string;
  created_at: string;
  width: number;
  height: number;
  urls: {
    regular?: string;
    thumb?: string;
  };
  description: string;
};

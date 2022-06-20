type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

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

export type ImageArr = {
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

export default Post;

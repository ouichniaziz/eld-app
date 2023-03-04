export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  upvote: number;
  downvote: number;
}

export interface CreatePost {
  title: string;
  content: string;
  author: string;
}

export interface APIResponsePost<T> {
  data: T;
}

export interface APIResponse<T> {
  data: Array<T>;
}

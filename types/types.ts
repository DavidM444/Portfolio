export interface Post{
    nombre: string,
    email: string,
    mensage: string
}

  
  export interface CreatePostResponse {
    success: boolean;
    user: Post;
  }
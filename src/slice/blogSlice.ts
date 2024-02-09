// blogSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BlogState {
  posts: BlogPost[];
}

interface BlogPost {
  id: number;
  title: string;
  text: string;
}

const initialState: BlogState = {
  posts: [],
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setPosts(state, action: PayloadAction<BlogPost[]>) {
      state.posts = action.payload;
    },
  },
});

export const { setPosts } = blogSlice.actions;
export default blogSlice.reducer;

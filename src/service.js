import axios from "axios";
import { mostFrequent } from './functions';

export const topPoster = async () => {
    try {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      var userPosts = [];
      for (let i = 0; i < result.data.length; i++) {
        userPosts.push(result.data[i].userId);
      }
      let userPostsLength = userPosts.length;
      const topPoster = mostFrequent(userPosts, userPostsLength);
      return topPoster;
    } catch (err) {
      return err;
    }
  };
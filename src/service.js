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
      const topPosterTitles = [];
      for(let i = 0; i < result.data.length; i++) {
        if(result.data[i].userId === topPoster) {
          topPosterTitles.push(result.data[i].title);
        }
      }
      return topPosterTitles;
    } catch (err) {
      return err;
    }
  };
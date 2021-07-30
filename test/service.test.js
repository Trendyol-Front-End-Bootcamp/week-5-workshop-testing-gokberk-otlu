import { topPoster } from "../src/service";
import { expect, it, jest } from "@jest/globals";
import axios from 'axios';

jest.mock('axios');

describe("topPoster()", () => {
    it('should return most poster user', async () => {
      axios.get.mockImplementation(() => {
        return Promise.resolve(
          {
            data : [
              {
                "userId": 4,
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
              },
              {
                "userId": 7,
                "id": 2,
                "title": "qui est esse",
                "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
              },
              {
                "userId": 7,
                "id": 2,
                "title": "magnam facilis autem",
                "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
              }
            ]
          }
        );
      });
      const result = await topPoster();
      const expectation = ["qui est esse", "magnam facilis autem"]
      expect(result).toEqual(expectation);
    })

    it('should give error when a problem occur while fetching user posts', async () => {
      axios.get.mockImplementation(() => {
        return Promise.reject("network error");
      });
      const result = await topPoster();
      expect(result).toBe("network error");
    })
  })
import { string } from "prop-types";
import { getGifs } from "../../src/helpers/getGifs";

describe('Test in getGifs', () => { 
    test('should return a gif array', async() => { 
        const gifs = await getGifs('Saint Seiya');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id:expect.any(string),
            title:expect.any(string),
            url:expect.any(string),
        })
     })
 })
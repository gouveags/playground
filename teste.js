import axios from 'axios';

const downloadToBuffer = async (url) => {
    const response = await axios.get(url, {responseType: "arraybuffer"});
    return Buffer.from(response.data, "binary");
};

const main = async (url) => {
    const res = await downloadToBuffer("https://static.vecteezy.com/system/resources/thumbnails/037/371/298/small/ai-generated-a-couple-of-love-makes-a-heart-shaped-gesture-while-the-sunset-ai-background-photo.jpg");
    console.log(res)
};

main();
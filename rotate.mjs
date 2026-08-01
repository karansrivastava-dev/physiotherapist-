import { Jimp } from 'jimp';

async function rotateImage() {
  try {
    const image = await Jimp.read('public/images/g4.jpeg');
    image.rotate(180); 
    await image.write('public/images/g4.jpeg');
    console.log('Rotated g4.jpeg');
  } catch (err) {
    console.error(err);
  }
}
rotateImage();

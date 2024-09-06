import NoImage from '../assets/no-image.jpg'

const getCroppedImage = (imageUrl: string) => {

    if (!imageUrl) {
        return NoImage;
    }

    const target = "media/";
    const index = imageUrl.indexOf(target) + target.length;
    return imageUrl.slice(0, index) + "crop/600/400/" + imageUrl.slice(index);

}

export default getCroppedImage;
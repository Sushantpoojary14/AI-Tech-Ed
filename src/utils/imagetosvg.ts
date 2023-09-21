import axios from "axios";

function blobToBase64(blob: any) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            resolve((<string>reader.result).split(",")[1]); // Remove the data URI prefix
        };
        reader.onerror = (error) => {
            reject(error);
        };
        reader.readAsDataURL(blob);
    });
}
const imagetosvg = async (images: any) => {


    const base64Images = await Promise.all(
        images.map(async (image: any) => {

            const imageUrl =
                import.meta.env.VITE_IMAGE_URL + `${image}`;
            // Replace with your base URL
            // console.log(imageUrl);
            const response = await axios.get("http://127.0.0.1:8000/images/girl.jpg", { responseType: "blob" });

            console.log(response.data);

            if (response.status === 200) {
                const blob = response.data;
                // console.log("BLOB", blob);

                const base64Image = await blobToBase64(blob);
                return base64Image;
            } else {
                console.error(`Failed to fetch image: ${imageUrl}`);
                return null; // Return null for failed requests
            }
        })
    );
    console.log(base64Images);

}

export default imagetosvg
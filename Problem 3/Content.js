//array of images
let catsImages = [
    "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
    "https://e3.365dm.com/21/03/768x432/skynews-cats-missing-microchip_5315182.jpg?20210323142004",
    "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fc3836660-7846-11eb-80c3-8cc375faed89.jpg?crop=5729%2C3222%2C187%2C805&resize=1200",
    "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/petting_pet_cat-1296x728-header.jpg?w=1155&h=1528",
	"https://lh3.googleusercontent.com/pw/AL9nZEXYJlrVkYoKIkpx07_3F4HOiTiOheaoaiRAcwrUg3C613-jkzEubJ3k8Z9fDjG5IfVqCzorphZ00vp6mIyB79GtCsoyV69xXe9cqrA0zglgrcvYhH2UP4cDR88WTm1AmuyCxQHAWCB5JzKD7eD94dtNZA=w690-h920-no",
	"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F06%2F27%2Fstriped-cat-playing-flower-552781357-2000.jpg",
	"https://cdn.cdnparenting.com/articles/2019/03/03175000/259729697-H.jpg",
	"https://media.istockphoto.com/photos/kitten-facing-up-with-a-questioning-facial-expression-picture-id157476330?k=20&m=157476330&s=612x612&w=0&h=MEN54hHPFdHH4fxjxiz49Fcl8zANXQ28ZedKXOC6W-8=",
	"https://www.mypetsname.com/wp-content/uploads/2019/10/Cute-Cat-Face.jpg",
	"https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pu2331636-image-kwvy7w5w.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=20899ffe2ed54df5e6371da6fe1dacc9",
	"https://wallpaperaccess.com/full/3842756.jpg"
];

var input_2 = document.createElement("input");
input_2.type = "button";
input_2.className = "button";
input_2.value = "Change Picture";
input_2.onclick = function () {
	const imgs = document.getElementsByTagName("img");
	for(let i = 0; i < imgs.length; i++) {
		const randomImg = Math.floor(Math.random() * catsImages.length)
		imgs[i].src = catsImages[randomImg]
	}
};

document.getElementById("button_to_change_pic").appendChild(input_2);

//getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
const imgs = document.getElementsByTagName("img");

const randomImg = Math.floor(Math.random() * catsImages.length)
imgs[0].src = catsImages[randomImg]

//do the same for h1 elements
const headers = document.getElementsByTagName("h1");
for (let i = 0; i < headers.length; i++){
    headers[i].innerText = "Cats are awesome.";
}
//do the same for p elements
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++){
    p[i].innerText = "This website is now about cats.";
}
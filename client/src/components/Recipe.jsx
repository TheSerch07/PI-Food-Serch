export default function Recipe({ name, img, diet }) {
    return (
        <div>
            <h1>{name}</h1>
            {img?<img src={img} alt="RecipeIMG" />:<img src="https://i0.wp.com/thehappening.com/wp-content/uploads/2018/06/libroscocinaapertura.jpg?fit=1024%2C694&ssl=1"/>}
            {diet?<h2>{diet}</h2>:<h2>No diet</h2>}
        </div>
    )
}
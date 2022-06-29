export default function Recipe({ name, img, diet }) {
    return (
        <div>
            <h1>{name}</h1>
            <img src={img} alt="RecipeIMG" />
            <h2>{diet}</h2>
        </div>
    )
}
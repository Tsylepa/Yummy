function SoYummy (){
    return(
        <>
<h1><span>So</span>Yummy</h1>
<p>"What to cook?" is not only a recipe app, it is, in fact, your cookbook. You can add your own recipes to save them for the future.</p>
<div>
    <img></img>
    <div>
        <div><span>Delicious and healthy</span> way to enjoy a variety of fresh ingredients in one satisfying meal</div>
    <a href="">See recipes</a>
    </div>
</div>
<div><input type="text" placeholder="Beaf"/>
<button>Search</button></div>
<ul className="cardsList">
    <li>
        <h2>{props.category}</h2>
        <div className="cardsItem"><img src="{props.url}" alt="recipe-photo" />
        <div >{props.recipeName}</div></div>
        <button>See all</button>
    </li>
</ul>
<div>
    <button>Other categories</button>
</div>
</>
    )
}

export default SoYummy;
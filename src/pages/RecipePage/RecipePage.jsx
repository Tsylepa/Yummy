import RecipePageHero from "components/RecipePageHero/RecipePageHero";
import RecipeIngredientsList from "components/RecipeIngredientsList/RecipeIngredientsList";
import RecipePreparation from "components/RecipePreparation/RecipePreparation";


const obj = {
    "_id": "6462a8f74c3d0ddd28897fb9",
    "title": "Lamb tomato and sweet spices",
    "category": "Lamb",
    "area": "Moroccan",
    "instructions": "Use pickled vine leaves here, preserved in brine. Small delicate leaves are better than the large bristly ones but, if only large leaves are to hand, then trim them to roughly 12 by 12 cms so that you don't get too many layers of leaves around the filling. And remove any stalks. Drain the preserved leaves, immerse them in boiling water for 10 minutes and then leave to dry on a tea towel before use. \r\nBasmati rice with butter and pine nuts is an ideal accompaniment. Couscous is great, too. Serves four.\r\nFirst make the filling. Put all the ingredients, apart from the tomatoes, in a bowl. Cut the tomatoes in half, coarsely grate into the bowl and discard the skins. Add half a teaspoon of salt and some black pepper, and stir. Leave on the side, or in the fridge, for up to a day. Before using, gently squeeze with your hands and drain away any juices that come out.\r\nTo make the sauce, heat the oil in a medium pan. Add the ginger and garlic, cook for a minute or two, taking care not to burn them, then add the tomato, lemon juice and sugar. Season, and simmer for 20 minutes.\r\nWhile the sauce is bubbling away, prepare the vine leaves. Use any torn or broken leaves to line the base of a wide, heavy saucepan. Trim any leaves from the fennel, cut it vertically into 0.5cm-thick slices and spread over the base of the pan to cover completely.\r\nLay a prepared vine leaf (see intro) on a work surface, veiny side up. Put two teaspoons of filling at the base of the leaf in a 2cm-long by 1cm-wide strip. Fold the sides of the leaf over the filling, then roll it tightly from bottom to top, in a cigar shape. Place in the pan, seam down, and repeat with the remaining leaves, placing them tightly next to each other in lines or circles (in two layers if necessary).\r\nPour the sauce over the leaves (and, if needed, add water just to cover). Place a plate on top, to weigh the leaves down, then cover with a lid. Bring to a boil, reduce the heat and cook on a bare simmer for 70 minutes. Most of the liquid should evaporate. Remove from the heat, and leave to cool a little - they are best served warm. When serving, bring to the table in the pan - it looks great. Serve a few vine leaves and fennel slices with warm rice. Spoon the braising juices on top and garnish with coriander.",
    "description": "A Moroccan-inspired dish made with lamb, tomatoes, onions, and spices (such as cinnamon, ginger, and cumin), typically served with couscous or bread.",
    "thumb": "https://www.themealdb.com/images/media/meals/qtwtss1468572261.jpg",
    "preview": "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560405/zlxxkd81sadgwzbugyzl.jpg",
    "time": "90",
    "youtube": "https://www.youtube.com/watch?v=vaZb1MnFBgA",
    "tags": [
        ""
    ],
    "ingredients": [
        {
            "id": "640c2dd963a319ea671e372c",
            "measure": "2 tbsp"
        },
        {
            "id": "640c2dd963a319ea671e36e8",
            "measure": "4cm piece finely chopped"
        },
        {
            "id": "640c2dd963a319ea671e36e3",
            "measure": "2 cloves peeled and chopped"
        },
        {
            "id": "640c2dd963a319ea671e377f",
            "measure": "800g peeled and chopped "
        },
        {
            "id": "640c2dd963a319ea671e3712",
            "measure": "2 tbsp"
        },
        {
            "id": "640c2dd963a319ea671e3687",
            "measure": "1 tsp"
        },
        {
            "id": "640c2dd963a319ea671e378d",
            "measure": "50"
        },
        {
            "id": "640c2dd963a319ea671e36d0",
            "measure": "1 large"
        },
        {
            "id": "640c2dd963a319ea671e370d",
            "measure": "400g"
        },
        {
            "id": "640c2dd963a319ea671e37ae",
            "measure": "1 medium"
        },
        {
            "id": "640c2dd963a319ea671e3669",
            "measure": "2 tbsp"
        },
        {
            "id": "640c2dd963a319ea671e36a0",
            "measure": "2 tbsp"
        },
        {
            "id": "640c2dd963a319ea671e36af",
            "measure": "2 tbsp chopped"
        },
        {
            "id": "640c2dd963a319ea671e36a5",
            "measure": "½ tsp ground "
        }
    ]
}


const RecipePage = ()=> {

    const { title, description, time, ingredients, preview, instructions } = obj;

    return (
        <>
        <RecipePageHero title={title} description={description} time={time}/>
       <RecipeIngredientsList ingredients={ingredients}/>
        <RecipePreparation image={preview} preparationSteps={instructions.split('\r\n')}/>
    </>
    )
}

export default RecipePage;
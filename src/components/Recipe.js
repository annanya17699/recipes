import React from 'react'
import icecream from './icecream.jfif'
import lemonade from './lemonade.jfif'
function Recipe(){
    const doc ={
        backgroundColor:'yellow',
    }
        const heading ={
            fontSize:'35px',
            color:'hotpink',
            backgroundColor:'aquamarine',
        }
        const mainbody ={
            backgroundColor: '#eaffff',
            color: '025955'
        }
        const rec ={
            backgroundColor:'hotpink',
            color:'#350b40'
        }

    function clickHandler(){
        alert('thanks For Feedback!!!')
    }
        return (
            <div style={doc}>
                <div style={heading}>
                    <h1>Recipes and Fun</h1>
                </div>
                <div style={mainbody}>
                    <h1 style={rec}>Vanilla Icecream</h1>
                    <img src={icecream} alt='icecream'/>
                    <p>
                        <b>Ingredients: </b>
                        1 can chilled sweetened condensed milk or 400 grams sweetened condensed milk
                        , 2.5 to 2.75 cups chilled whipping cream - 35% to 50% fat
                        , 2 teaspoons vanilla extract or 1 teaspoon vanilla essence or 1 vanilla bean or 1 teaspoon vanilla powder
                        , some grated chocolate for garnish - optional.
                    </p>
                    <p>
                        <b>Steps: </b>
                        In a large bowl, take 2.5 to 2.75 cups of chilled whipping cream (30% to 50% fat). Add 2 teaspoons vanilla extract. If using vanilla essence, then add 1 teaspoon of it.
                        With an electric beater at full speed, begin to whip the cream. Timing will vary depending on the fat content in the cream. Both for amul fresh cream and amul whipping cream, it takes about 8 to 10 minutes. 
                        Also be careful while whipping and do not whip too much, as then the cream would get churned into butter.
                        Whip till stiff peaks are formed. You can also whip till soft peaks. If using 25% fat cream, then you can whip till soft peaks.
                        Now add 400 grams of chilled sweetened condensed milk (about 1.6 cups).
                        Fold gently but very well. Also remember not to overfold as then the ice cream mixture can fall flat.
                        Remove the vanilla ice cream mixture in a container or box and then cover it tightly. Or you can cover the same bowl (if its freezer safe) with a tight fitting lid or aluminium foil.
                        Freeze till the ice cream is set. Before serving, keep the ice cream box or bowl for some minutes at room temperature. Then using a scoop, remove the ice cream.
                        Serve vanilla ice cream. You can sprinkle some chocolate chips or grated chocolate or candied fruits or even tutti frutti from top if you want.
                    </p>
                    <h1 style={rec}>Rose Lemonade</h1>
                    <img src={lemonade} alt='lemonade'/>
                    <p>
                        <b>Ingredients: </b>
                        60 ml water,
                        1/3 cup sweetener,
                        1/3 cup dried rose petals,
                        9 tablespoons freshly squeezed lemon juice,
                        sparkling water
                    </p>
                    <p>
                        <b>Steps: </b>
                        Add water and sweetener of choice to a small saucepan. Dissolve over medium-high heat. Don’t let it boil.
                        Turn heat to low, add rose petals and stir. Leave on low until the colours fade from the petals – it will only take a few minutes. Strain and cool. This is your rose syrup.
                        Place 2 tablespoons rose syrup and 3 tablespoons lemon juice into each glass.
                        Top with sparkling water
                    </p>
                </div>
                <form>
                    <h1>Feedback Form</h1>
                    <label>Username</label>
                    <input type='text'></input>
                    <label>Feedback</label>
                    <textarea></textarea>
                    <button onClick={clickHandler}>Submit</button>
                </form>
                <div style={heading}>
                    <h4>@AnnanyaRanjan</h4>
                    <p>Thanks for visiting!!!</p>
                </div>
            </div>
        )
}

export default Recipe

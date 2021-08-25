 import { useEffect } from "react";
import MeetupList  from "../components/articles/HomeArticleList"
 import Layout from "../components/layout/Layout";
 const DUMMY_MEETUPS = [
    {
        id:'m1',
        title: 'Why Kevin Durant is the GOAT',
        image: 'https://s.yimg.com/ny/api/res/1.2/bcVEEhYYUTRxPyz4ghsJhQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTIwMDA7aD0yMDAw/https://s.yimg.com/os/creatr-uploaded-images/2021-06/e23e5220-ce51-11eb-9137-c9765cb16afe',
        author: "Benjamin Tsang",
        date: "7/5/2021",
        likes: 10000
    },
    {
        id:'m2',
        title: 'Fried Chicken',
        image: 'https://www.seriouseats.com/thmb/iYMnKlLrza5RZeis8HzoMK2ZlUw=/610x343/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__20100408blueribbonnorthernfriedchicken-e3781415f559475598fd24aff789e4a4.jpg',
        author: "Benjamin Tsang",
        date: "7/5/2021",
        likes: 10000
    }
];
function HomePage(){
    return <MeetupList meetups={loadedArticles}/>
}

export async function getStaticProps(){
    return{
        props:{
            meetups: DUMMY_MEETUPS
        },
        revalidate:1
    };
}
export default HomePage;
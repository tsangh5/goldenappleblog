import classes from './articleDetail.module.css'
function articleDetail(props) {
    return (<section className={classes.detail}>
    <img src={props.image} alt={props.title}/>
    <h1> {props.title} </h1>
    <h2>Author: {props.author} Dat: {props.date}</h2>
    <h3>{props.content}</h3>
    </section>);
}

export async function getStaticPaths () {
    return {
        fallback: false,
        paths: [{params: {
            articleID: 'm1'    
        }}]
    }
}
export async function getStaticProps(context){
    const articleID = context.params.articleID
    return{
        props:{
            articleData:{
                id:articleID,
                title: 'Why Kevin Durant is the GOAT',
                image: 'https://s.yimg.com/ny/api/res/1.2/bcVEEhYYUTRxPyz4ghsJhQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTIwMDA7aD0yMDAw/https://s.yimg.com/os/creatr-uploaded-images/2021-06/e23e5220-ce51-11eb-9137-c9765cb16afe',
                author: "Benjamin Tsang",
                date: "7/5/2021",
                likes: 10000
            }
        },
        revalidate:1
    };
}
export default articleDetail;
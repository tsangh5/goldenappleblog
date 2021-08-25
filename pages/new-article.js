import NewArticleForm from "../components/articles/NewArticleForm";
function NewArticle() {
    function addMeetupHandler (enteredMeetupData){
        console.log(enteredMeetupData)
    }
    return <NewArticleForm onAddMeetup={addMeetupHandler}/>
}

export default NewArticle;  
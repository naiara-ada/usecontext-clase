import { useLanguage } from "./LanguageContext.jsx";

const Greeting = () =>{
    const { language} = useLanguage();

    const greetings = {
        en: 'Hello!',
        es: 'Hola!',
        fr: 'Bonjour!'
    }

    return(
        <>
            <h2>{greetings[language]}</h2>
        </>
    )

}

export default Greeting
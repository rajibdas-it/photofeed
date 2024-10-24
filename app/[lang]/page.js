
import { getDictionary } from "./dictionaries";


export default async function Home({ params: { lang } }) {
    const dictionary = await getDictionary(lang);
    return (
        <div>
            <p>{dictionary.followers}</p>
        </div>
    );
}

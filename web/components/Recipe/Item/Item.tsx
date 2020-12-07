import { FunctionComponent } from 'react';
import Large from './view/Large';
import ReactMarkdown from 'react-markdown';

type ItemProps = {
    key: any,
    item: {
        title: string,
        slug,
        description: string,
        difficulty: string,
        image: string,
        created_at: string,
        cover,
    },
    type?: string,
    width?: string,
    maxWidth?: string
}

const Item: FunctionComponent<ItemProps> = ( { item : { title, description, cover, created_at, slug }, maxWidth} ) => {

    const printContentResume = (description :string, letters :number) : string => {
        if(description === null) return "";
        return description.substr(0, letters) + '...';
    }

    /**
     * Return the date under the form of "day/month/year"
     * add +1 of the getMonth method because it starts by 0 
     * @param string created_at 
     */
    const printformatDate = (created_at : string) : string => {
        let date = new Date(created_at);
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }

    return(
        <Large
            title={title}
            cover={cover}
            //created_at={printformatDate(created_at)}
            link={{
                href: "/recettes/[slug]",
                as: `/recettes/${slug}`
            }}
            //description={<ReactMarkdown source={printContentResume(description, 100)}/>}
            width={"100%"}
            maxWidth={maxWidth}
        />
    );

}

export default Item;

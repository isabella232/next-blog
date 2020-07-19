import { FunctionComponent, ReactElement } from 'react';
import config from "@config/config";

type ItemProps = {
    title: string,
    cover,
    created_at: string,
    content: string
}

const Large: FunctionComponent<ItemProps> = ( {title, cover, created_at, content } ) => {

    return(
        <div className="card has-background-white-bis">
           {cover && (
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={config.strapiUrl + cover.formats.small.url} alt="Placeholder image" />
                    </figure>
                </div>
           )}
            <div className="card-content">
                <div className="level">
                    <div className="level-left">
                        <h3 className="is-size-4">{title}</h3>
                    </div>
                    <div className="level-right">
                        <time className="has-text-grey" datetime={created_at}>{created_at}</time>
                    </div>
                </div>
                <div className="content has-text-weight-light">
                    {content}
                </div>
                <div className="level">
                    <div className="level-left"></div>
                    <div className="level-right">
                        <a className="button is-primary has-text-right" href="">Lire la suite</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Large;
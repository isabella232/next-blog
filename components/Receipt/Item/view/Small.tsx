import { FunctionComponent, ReactElement } from 'react';
import config from "@config/config";

type ItemProps = {
    image,
    created_at: string,
    content: string
}

const Small: FunctionComponent<ItemProps> = ( {title, cover, created_at, content } ) => {

    return(
        <div className="card columns has-background-white-bis mb-2">
            {config && (
                <figure className="column is-one-quarter image is-128x128">
                    <img src={config.strapiUrl + cover.formats.small.url} alt="Placeholder image" />
                </figure>
            )}
            <div className="card-content column">
                <div className="level mb-2">
                    <div className="level-left">
                        <h3 className="is-size-4">{title}</h3>
                    </div>
                    <div className="level-right">
                    <time className="has-text-grey" datetime={created_at}>{created_at}</time>
                    </div>
                </div>
                
                <div className="content has-text-weight-light mb-2">
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

export default Small;
import {ReactNode} from 'react';

interface Props {
    term:string;
    children:ReactNode | ReactNode[];
}

const GameItemDefinition = ({term,children}:Props) => {
    return (
        <div className="my-5">
            <dt className={"text-2xl text-gray-600 dark:text-gray-500"}>
                {term}
            </dt>
            <dd className={"py-1"}>
                {children}
            </dd>
        </div>
    );
};

export default GameItemDefinition;
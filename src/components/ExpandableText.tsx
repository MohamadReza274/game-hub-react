import {useState} from "react";


interface Props {
    children: string;
}

const ExpandableText = ({children}: Props) => {

    const [isExpand, setExpand] = useState(false)
    const limit = 300;

    if (!children) {
        return null;
    }

    if (children.length <= limit) {
        return <p>{children}</p>
    }
    const summary = isExpand ? children : children.substring(0, limit) + "..."
    return (
        <p className={"text-xl"}>
            {summary}
            <button onClick={() => setExpand(!isExpand)}
                    className={"rounded py-2 px-1 ml-2 underline font-bold"}>{isExpand ? "Show Less" : "Read More"}</button>

        </p>
    );
};

export default ExpandableText;
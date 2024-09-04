import {Badge} from "@/components/ui/badge.tsx";

interface Props {
    score: number;
}

const CriticScore = ({score}: Props) => {

    const badgeColor = score > 75 ? "bg-green-600" : score > 60 ? "bg-yellow-600" : "";

    return (
        <Badge className={badgeColor}>{score}</Badge>
    );
};

export default CriticScore;
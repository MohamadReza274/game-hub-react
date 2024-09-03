interface Props {
    score: number;
}

const CriticScore = ({score}: Props) => {

    const badgeColor = score > 75 ? "bg-green-600" : score > 60 ? "bg-yellow-600" : "";

    return (
        <div className={`px-4 bg-gray-700 text-center rounded-lg ${badgeColor}`}>
            {score}
        </div>
    );
};

export default CriticScore;
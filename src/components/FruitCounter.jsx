function FruitCounter({header, fruit, fruitSetter, disabled}) {
    return (
        <article>
            <h2>{header}</h2>
            <button
                type="button"
                disabled={fruit === 0}
                onClick={() => fruitSetter(fruit - 1)}
            >
                -
            </button>
            <p>{fruit}</p>
            <button type="button"
                    onClick={() => fruitSetter(fruit + 1)}
            >
                +
            </button>
        </article>
    );
}

export default FruitCounter;
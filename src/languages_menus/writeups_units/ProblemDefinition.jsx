function ProblemDefinition(props) {
    return(
        <div className="problem-definition-wrapper">
            <h3 className="definition-header">Problem Definition</h3>
            <p className="definition-p">{props.definition}</p>
        </div>
    );
}

export default ProblemDefinition;
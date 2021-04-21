import TreeView from "react-treeview";
import DataSource from "./DataSource.json";

const Accordion = () => {
    return (
        <div id="style-1" className="accordionContent scrollbar">
            <div class="force-overflow"></div>
            {DataSource.data.map((node, i) => {
                const type = node.type;
                const label = <span className="node">{type}</span>;
                return (
                    <TreeView key={type + '|' + i} nodeLabel={label} defaultCollapsed={true}>
                        {node.people.map(person => {
                            const label2 = <p className="node">{person.name}<span onClick={() => alert(person.id)} className="crossIcon">&#10005;</span><span onClick={() => alert(person.id)} className="arrowIcon">&#x22B3;</span></p>;
                            return (
                                <TreeView nodeLabel={label2} key={person.name} defaultCollapsed={true}>
                                    <div className="info">{person.content}</div>
                                </TreeView>
                            );
                        })}
                    </TreeView>
                );
            })}
        </div>

    );
}
export default Accordion;


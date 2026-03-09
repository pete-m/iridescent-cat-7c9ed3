export function initAndrew(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Wipe previous engine
    
    const nodes = new vis.DataSet([
        {id: 1, label: 'Prince Andrew', color: '#2ecc71', shape: 'dot'},
        {id: 2, label: 'Epstein', color: '#000', font:{color:'#fff'}, shape: 'diamond'}
    ]);
    const edges = new vis.DataSet([{from: 1, to: 2, label: 'Liaison'}]);
    
    new vis.Network(container, {nodes, edges}, {physics: {stabilization: true}});
    console.log("Module: Andrew Trade Loaded");
}
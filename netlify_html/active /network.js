/**
 * LinkScope Nexus: Master Network Module
 * Version: 2026.03.09
 * Purpose: Central OSINT Visualization Hub
 */

export function initNetwork(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Clear previous engine artifacts
    container.innerHTML = '';

    // Dataset: The "JMail" Restoration 2026
    const nodes = new vis.DataSet([
        // Tier 1: Primary Targets
        {id: 1, label: 'Jeffrey Epstein', color: '#000000', font:{color:'#ffffff'}, shape: 'diamond', size: 25},
        {id: 2, label: 'Howard Lutnick', color: '#3498db', shape: 'dot', title: 'Commerce Secretary / Adfin Link'},
        
        // Tier 2: 2026 Legal/Political Nodes
        {id: 3, label: 'Adfin Solutions', color: '#e74c3c', shape: 'triangle', title: 'Epstein/Lutnick Joint Venture'},
        {id: 4, label: 'Pam Bondi', color: '#f1c40f', shape: 'box', title: 'AG / Subpoenaed March 2026'},
        {id: 5, label: 'Trade Envoy Data', color: '#2ecc71', shape: 'database', title: 'March 2026 HOC Release'},
        
        // Tier 3: Connections
        {id: 6, label: 'Prince Andrew', color: '#2ecc71', shape: 'dot', title: 'Misconduct in Public Office Probe'},
        {id: 7, label: 'Amalfi Villa', color: '#9b59b6', shape: 'star', title: 'Mandelson/Epstein Email Source'}
    ]);

    const edges = new vis.DataSet([
        {from: 1, to: 3, label: 'Partner', width: 2},
        {from: 2, to: 3, label: 'Investor', width: 2},
        {from: 4, to: 2, label: 'Inquiry', dashes: true, color: '#e67e22'},
        {from: 5, to: 6, label: 'Vetting File', arrows: 'to'},
        {from: 6, to: 1, label: 'Liaison', dashes: true},
        {from: 1, to: 7, label: 'Stay', title: 'Restored JMail Correspondence'}
    ]);

    const options = {
        physics: {
            enabled: true,
            stabilization: { iterations: 150 },
            barnesHut: { gravitationalConstant: -2000 }
        },
        interaction: {
            hover: true,
            tooltipDelay: 200,
            navigationButtons: true // Adds on-screen zoom controls for mobile
        },
        nodes: {
            font: { face: 'monospace', size: 14 }
        }
    };

    try {
        const network = new vis.Network(container, {nodes, edges}, options);
        console.log("Master Network Engine: Operational");
        
        // Dynamic event: click a node to see description in the console
        network.on("selectNode", function (params) {
            const nodeId = params.nodes[0];
            const nodeData = nodes.get(nodeId);
            console.log("Focus: " + nodeData.label + " - " + (nodeData.title || "No data"));
        });

    } catch (e) {
        console.error("Network Init Error:", e);
    }
}
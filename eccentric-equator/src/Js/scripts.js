function showPolicy(policyId) {
    // Hide all policies
    document.querySelectorAll('.policy-container').forEach(policy => {
        policy.style.display = 'none';
    });
    
    // Show selected policy
    document.getElementById(policyId).style.display = 'block';
}

function closePolicy(policyId) {
    document.getElementById(policyId).style.display = 'none';
}
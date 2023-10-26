// Function to add a new issue
function addIssue() {
    const issueInput = document.getElementById("issue-input");
    const issueText = issueInput.value.trim();
    
    if (issueText !== "") {
        const issue = {
            id: Date.now(),
            text: issueText,
            status: "Open"
        };

        // Store the issue in localStorage or server (for a production app)
        // For this example, we'll store it in a JSON file.
        storeIssue(issue);

        // Clear the input field
        issueInput.value = "";

        // Reload issues
        listIssues();
    }
}

// Function to store an issue
function storeIssue(issue) {
    // In a real app, you'd save the issue to a database.
    // For this example, we'll store it in a JSON file.
    const issues = JSON.parse(localStorage.getItem("issues")) || [];
    issues.push(issue);
    localStorage.setItem("issues", JSON.stringify(issues));
}

// Function to list all issues
function listIssues() {
    const issuesList = document.getElementById("issues-list");
    issuesList.innerHTML = "";

    // Retrieve issues from storage
    const issues = JSON.parse(localStorage.getItem("issues")) || [];

    issues.forEach(issue => {
        const issueCard = document.createElement("div");
        issueCard.className = "issue-card";
        issueCard.innerHTML = `
            <p>${issue.text}</p>
            <p>Status: ${issue.status}</p>
            <button onclick="updateStatus(${issue.id})">Update Status</button>
            <button onclick="deleteIssue(${issue.id})">Delete</button>
        `;
        issuesList.appendChild(issueCard);
    });
}

// Function to update the status of an issue
function updateStatus(id) {
    // Update the status of the issue in storage (or database)
    const issues = JSON.parse(localStorage.getItem("issues")) || [];
    const issueIndex = issues.findIndex(issue => issue.id === id);

    if (issueIndex !== -1) {
        const status = issues[issueIndex].status;
        issues[issueIndex].status = (status === "Open") ? "In Progress" : "Closed";
        localStorage.setItem("issues", JSON.stringify(issues));
        listIssues();
    }
}

// Function to delete an issue
function deleteIssue(id) {
    // Remove the issue from storage (or database)
    const issues = JSON.parse(localStorage.getItem("issues")) || [];
    const updatedIssues = issues.filter(issue => issue.id !== id);
    localStorage.setItem("issues", JSON.stringify(updatedIssues));
    listIssues();
}

// Initial load of issues
listIssues();

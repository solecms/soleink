module.exports = async ({ github, context }) => {
	// Check if github object is correctly passed
	if (!github) {
		throw new Error("GitHub object is undefined.");
	}

	const { payload } = context;
	const { pull_request } = payload;
	const prId = pull_request.node_id;

	const projectId = "PVT_kwDOCksqQs4AkdsH"; // replace with your project ID
	const statusFieldId = "PVTSSF_lADOCksqQs4AkdsHzgcqtpk"; // replace with your status field ID
	const newStatusOptionId = "df73e18b"; // replace with the new status option ID

	const query = `
    query($pullRequestId: ID!) {
      node(id: $pullRequestId) {
        ... on PullRequest {
          projectItems(first: 1) {
            nodes {
              id
            }
          }
        }
      }
    }
  `;

	try {
		const result = await github.graphql(query, { pullRequestId: prId });
		const projectItemId = result.data.node.projectItems.nodes[0].id;

		// Now you can use the projectItemId to update the project item field value
		const updateQuery = `
    mutation($projectId: ID!, $itemId: ID!, $fieldId: ID!, $optionId: String!) {
      updateProjectV2ItemFieldValue(input: {
        projectId: $projectId,
        itemId: $itemId,
        fieldId: $fieldId,
        value: { singleSelectOptionId: $optionId }
      }) {
        projectV2Item {
          id
        }
      }
    }
    `;

		await github.graphql(updateQuery, {
			projectId: projectId,
			itemId: projectItemId,
			fieldId: statusFieldId,
			optionId: newStatusOptionId,
		});
	} catch (error) {
		console.error("Error updating project status:", error);
		throw error;
	}
};

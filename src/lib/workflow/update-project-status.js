module.exports = async ({ github, context }) => {
	const projectId = "PVT_kwDOCksqQs4AkdsH"; // replace with your project ID
	const prId = "PR_kwDOMSKc7c53EOIm"; // replace with your PR ID
	const statusFieldId = "PVTSSF_lADOCksqQs4AkdsHzgcqtpk"; // replace with your status field ID
	const newStatusOptionId = "df73e18b"; // replace with the new status option ID

	try {
		await github.graphql(
			`
        mutation($projectId: ID!, $contentId: ID!, $fieldId: ID!, $optionId: ID!) {
          updateProjectV2ItemFieldValue(input: {
            projectId: $projectId,
            itemId: $contentId,
            fieldId: $fieldId,
            value: { singleSelectOptionId: $optionId }
          }) {
            projectV2Item {
              id
            }
          }
        }
      `,
			{
				projectId,
				contentId: prId,
				fieldId: statusFieldId,
				optionId: newStatusOptionId.toString(), // Ensuring the ID is treated as a string
			},
		);
	} catch (error) {
		console.error("Error updating project status:", error);
		throw error;
	}
};

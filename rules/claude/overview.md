# Rules

- for docs and knowledge gutenberg/ is always source of truth
- All documentation needs to be written in gutenberg/ folder with proper folder structure, do not write code, use mermaid for flow and vizualisation
- Keep gutenberg/ always update and properly structured

## GitHub Projects Copying

### Prerequisites
- GitHub CLI authenticated: `gh auth status`
- Access to template projects (#66 Kanban, #67 BugTracker)
- User node ID: `gh api user --jq '.node_id'`

### Copy Template Projects
Use GraphQL API to copy from templates:

**Kanban Project (Template #66):**
```bash
gh api graphql -f query='
mutation($project:ID!,$owner:ID!,$title:String!){
  copyProjectV2(input:{
    projectId:$project
    ownerId:$owner
    title:$title
    includeDraftIssues:true
  }){
    projectV2 { id number title url }
  }
}' \
-f project="PVT_kwHOAAIrCs4BAngq" \
-f owner="$(gh api user --jq '.node_id')" \
-f title="$PROJECT_NAME - Kanban"
```

**BugTracker Project (Template #67):**
```bash
gh api graphql -f query='
mutation($project:ID!,$owner:ID!,$title:String!){
  copyProjectV2(input:{
    projectId:$project
    ownerId:$owner
    title:$title
    includeDraftIssues:true
  }){
    projectV2 { id number title url }
  }
}' \
-f project="PVT_kwHOAAIrCs4BAngu" \
-f owner="$(gh api user --jq '.node_id')" \
-f title="$PROJECT_NAME - BugTracker"
```

### Template IDs
- **Kanban Template**: `PVT_kwHOAAIrCs4BAngq` (Project #66)
- **BugTracker Template**: `PVT_kwHOAAIrCs4BAngu` (Project #67)

Replace `$PROJECT_NAME` with desired project prefix. The workflow creates paired projects with consistent naming.

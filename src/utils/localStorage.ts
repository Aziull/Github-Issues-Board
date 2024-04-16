export type ColumnKey = 'todo' | 'inProgress' | 'done';

interface IssuePosition {
  column: ColumnKey;
  position: number;
}

export interface RepoIssuesPositions {
  [issueId: string | number]: IssuePosition;
}

interface Target {
  column: ColumnKey,
  position: number
}

interface SaveType {
  repoId: string | number,
  issueId: string | number,
  destination: Target,
  source: Target
}

export function saveIssuePosition({ repoId, issueId, destination, source }: SaveType): void {
  const storageKey = `repoIssues_${repoId}`;
  let positions: RepoIssuesPositions = JSON.parse(localStorage.getItem(storageKey) || '{}');

  Object.keys(positions).forEach(key => {
    if (positions[key].column === destination.column && positions[key].position >= destination.position) {
      positions[key].position += 1;
    }
    if (positions[key].column === source.column && positions[key].position > source.position) {
      positions[key].position -= 1;
    }
  });

  positions[issueId] = destination;

  localStorage.setItem(storageKey, JSON.stringify(positions));
}

export function loadIssuePositions(repoId: number): RepoIssuesPositions {
  const storageKey = `repoIssues_${repoId}`;
  return JSON.parse(localStorage.getItem(storageKey) || '{}');
}
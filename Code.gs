/**
 * Alignment Console Demo Backend
 * Sanitized for portfolio use with mock identifiers and policies.
 */
const MOCK_SPREADSHEET_ID = 'MOCK_SPREADSHEET_ID_001';

function doGet() {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('Alignment Console Demo')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.DEFAULT);
}

function include(name) {
  return HtmlService.createHtmlOutputFromFile(name).getContent();
}

function getMockState() {
  return {
    success: true,
    spreadsheetId: MOCK_SPREADSHEET_ID,
    workflows: ['WF_ALPHA', 'WF_BETA', 'WF_GAMMA', 'WF_DELTA', 'WF_EPSILON'],
    policies: ['Policy-A', 'Policy-B', 'Policy-C'],
    rows: [
      { id: 'T-1001', workflow: 'WF_ALPHA', policy: 'Policy-A', verdict: 'Approved', note: 'Demo-safe placeholder content.' },
      { id: 'T-1002', workflow: 'WF_BETA', policy: 'Policy-B', verdict: 'Review', note: 'Mock escalation route.' },
      { id: 'T-1003', workflow: 'WF_GAMMA', policy: 'Policy-C', verdict: 'Rejected', note: 'Synthetic violation sample.' }
    ]
  };
}

function saveMockRow(payload) {
  const row = payload || {};
  return {
    success: true,
    message: 'Mock row accepted (no external system call).',
    saved: {
      id: row.id || 'T-MOCK',
      workflow: row.workflow || 'WF_ALPHA',
      policy: row.policy || 'Policy-A',
      verdict: row.verdict || 'Review',
      note: row.note || ''
    }
  };
}

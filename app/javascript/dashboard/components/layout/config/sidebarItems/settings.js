import { FEATURE_FLAGS } from '../../../../featureFlags';
import { frontendURL } from '../../../../helper/URLHelper';

const settings = accountId => ({
  parentNav: 'settings',
  routes: [
    'agent_bots',
    'agent_list',
    'attributes_list',
    'automation_list',
    'auditlogs_list',
    'billing_settings_index',
    'canned_list',
    'general_settings_index',
    'general_settings',
    'labels_list',
    'macros_edit',
    'macros_new',
    'macros_wrapper',
    'settings_applications_integration',
    'settings_applications_webhook',
    'settings_applications',
    'settings_inbox_finish',
    'settings_inbox_list',
    'settings_inbox_new',
    'settings_inbox_show',
    'settings_inbox',
    'settings_inboxes_add_agents',
    'settings_inboxes_page_channel',
    'settings_integrations_dashboard_apps',
    'settings_integrations_integration',
    'settings_integrations_slack',
    'settings_integrations_webhook',
    'settings_integrations',
    'settings_teams_add_agents',
    'settings_teams_edit_finish',
    'settings_teams_edit_members',
    'settings_teams_edit',
    'settings_teams_finish',
    'settings_teams_list',
    'settings_teams_new',
  ],
  menuItems: [
    {
      icon: 'briefcase',
      label: 'ACCOUNT_SETTINGS',
      hasSubMenu: false,
      toState: frontendURL(`accounts/${accountId}/settings/general`),
      toStateName: 'general_settings_index',
    },
    {
      icon: 'people',
      label: 'AGENTS',
      hasSubMenu: false,
      toState: frontendURL(`accounts/${accountId}/settings/agents/list`),
      toStateName: 'agent_list',
      featureFlag: FEATURE_FLAGS.AGENT_MANAGEMENT,
    },
    {
      icon: 'people-team',
      label: 'TEAMS',
      hasSubMenu: false,
      toState: frontendURL(`accounts/${accountId}/settings/teams/list`),
      toStateName: 'settings_teams_list',
      featureFlag: FEATURE_FLAGS.TEAM_MANAGEMENT,
    },
    {
      icon: 'mail-inbox-all',
      label: 'INBOXES',
      hasSubMenu: false,
      toState: frontendURL(`accounts/${accountId}/settings/inboxes/list`),
      toStateName: 'settings_inbox_list',
      featureFlag: FEATURE_FLAGS.INBOX_MANAGEMENT,
    },
    {
      icon: 'tag',
      label: 'LABELS',
      hasSubMenu: false,
      toState: frontendURL(`accounts/${accountId}/settings/labels/list`),
      toStateName: 'labels_list',
      featureFlag: FEATURE_FLAGS.LABELS,
    },
    {
      icon: 'code',
      label: 'CUSTOM_ATTRIBUTES',
      hasSubMenu: false,
      toState: frontendURL(
        `accounts/${accountId}/settings/custom-attributes/list`
      ),
      toStateName: 'attributes_list',
      featureFlag: FEATURE_FLAGS.CUSTOM_ATTRIBUTES,
    },
    {
      icon: 'automation',
      label: 'AUTOMATION',
      beta: true,
      hasSubMenu: false,
      toState: frontendURL(`accounts/${accountId}/settings/automation/list`),
      toStateName: 'automation_list',
      featureFlag: FEATURE_FLAGS.AUTOMATIONS,
    },
    {
      icon: 'bot',
      label: 'AGENT_BOTS',
      beta: true,
      hasSubMenu: false,
      globalConfigFlag: 'csmlEditorHost',
      toState: frontendURL(`accounts/${accountId}/settings/agent-bots`),
      toStateName: 'agent_bots',
      featureFlag: FEATURE_FLAGS.AGENT_BOTS,
    },
    {
      icon: 'flash-settings',
      label: 'MACROS',
      hasSubMenu: false,
      toState: frontendURL(`accounts/${accountId}/settings/macros`),
      toStateName: 'macros_wrapper',
      beta: true,
      featureFlag: FEATURE_FLAGS.MACROS,
    },
    {
      icon: 'chat-multiple',
      label: 'CANNED_RESPONSES',
      hasSubMenu: false,
      toState: frontendURL(
        `accounts/${accountId}/settings/canned-response/list`
      ),
      toStateName: 'canned_list',
      featureFlag: FEATURE_FLAGS.CANNED_RESPONSES,
    },
    {
      icon: 'flash-on',
      label: 'INTEGRATIONS',
      hasSubMenu: false,
      toState: frontendURL(`accounts/${accountId}/settings/integrations`),
      toStateName: 'settings_integrations',
      featureFlag: FEATURE_FLAGS.INTEGRATIONS,
    },
    {
      icon: 'star-emphasis',
      label: 'APPLICATIONS',
      hasSubMenu: false,
      toState: frontendURL(`accounts/${accountId}/settings/applications`),
      toStateName: 'settings_applications',
      featureFlag: FEATURE_FLAGS.INTEGRATIONS,
    },
    {
      icon: 'credit-card-person',
      label: 'BILLING',
      hasSubMenu: false,
      toState: frontendURL(`accounts/${accountId}/settings/billing`),
      toStateName: 'billing_settings_index',
      showOnlyOnCloud: true,
    },
    {
      icon: 'key',
      label: 'AUDIT_LOGS',
      hasSubMenu: false,
      toState: frontendURL(`accounts/${accountId}/settings/audit-log/list`),
      toStateName: 'auditlogs_list',
      featureFlag: FEATURE_FLAGS.AUDIT_LOGS,
      beta: true,
    },
  ],
});

export default settings;

<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <ninja-keys
    ref="ninjakeys"
    :no-auto-load-md-icons="true"
    hideBreadcrumbs
    :placeholder="placeholder"
    @selected="onSelected"
  />
</template>

<script>
import 'ninja-keys';
import conversationHotKeysMixin from './conversationHotKeys';
import goToCommandHotKeys from './goToCommandHotKeys';
import agentMixin from 'dashboard/mixins/agentMixin';
import conversationLabelMixin from 'dashboard/mixins/conversation/labelMixin';
import conversationTeamMixin from 'dashboard/mixins/conversation/teamMixin';
import adminMixin from 'dashboard/mixins/isAdmin';
import { GENERAL_EVENTS } from '../../../helper/AnalyticsHelper/events';

export default {
  mixins: [
    adminMixin,
    agentMixin,
    conversationHotKeysMixin,
    conversationLabelMixin,
    conversationTeamMixin,
    goToCommandHotKeys,
  ],

  data() {
    return {
      placeholder: this.$t('COMMAND_BAR.SEARCH_PLACEHOLDER'),
    };
  },
  computed: {
    accountId() {
      return this.$store.getters.getCurrentAccountId;
    },
    routeName() {
      return this.$route.name;
    },
    hotKeys() {
      return [...this.conversationHotKeys, ...this.goToCommandHotKeys];
    },
  },
  watch: {
    routeName() {
      this.setCommandbarData();
    },
  },
  mounted() {
    this.setCommandbarData();
  },
  methods: {
    setCommandbarData() {
      this.$refs.ninjakeys.data = this.hotKeys;
    },
    onSelected(item) {
      const {
        detail: { action: { title = null, section = null } = {} } = {},
      } = item;
      this.$track(GENERAL_EVENTS.COMMAND_BAR, {
        section,
        action: title,
      });
      this.setCommandbarData();
    },
  },
};
</script>

<style lang="scss">
ninja-keys {
  --ninja-accent-color: var(--w-500);
  --ninja-font-family: 'PlusJakarta';
  z-index: 9999;

  @media (prefers-color-scheme: dark) {
    --ninja-overflow-background: rgba(26, 29, 30, 0.5);
    --ninja-modal-background: #151718;
    --ninja-secondary-background-color: #26292b;
    --ninja-selected-background: #26292b;
    --ninja-footer-background: #2b2f31;
    --ninja-text-color: #f8faf9;
    --ninja-icon-color: #f8faf9;
    --ninja-secondary-text-color: #c2c9c6;
  }
}
</style>

"use strict";

/**
 * Browser-only stand-in for followup_flow_pointers, followup_flow_versions
 * and followup_enrollments. The React adapter (src/api-client.ts) is what
 * applies the product rules; this file only stores and seeds.
 *
 * Keep the shape aligned with the follow-up flow demo types.
 */
(function () {
  var KEY = "dealtrace-crm_followups_demo_v1";

  var FLOW = "11111111-1111-4111-8111-111111111111";
  var VER1 = "22222222-2222-4222-8222-222222222222";
  var ENR1 = "33333333-3333-4333-8333-333333333333";
  var CONTACT_PILOT = "44444444-4444-4444-8444-444444444444";
  var CONTACT_EXPANSION = "55555555-5555-4555-8555-555555555555";
  var CONTACT_RENEWAL = "66666666-6666-4666-8666-666666666666";
  var PIPE = "77777777-7777-4777-8777-777777777777";
  var ST_NEW = "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaa1";
  var ST_CON = "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaa2";
  var ST_PRO = "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaa3";
  var ST_WON = "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaa4";
  var AGENDA = "bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbb1";
  var WHEN = "2026-11-18T02:00:00.000Z";

  function baseGraph(promptHint) {
    return {
      nodes: [
        {
          id: "trigger-1",
          type: "trigger",
          label: "流程开始",
          position: { x: 40, y: 80 },
          config: {},
        },
        {
          id: "wait-1",
          type: "wait",
          label: "等待",
          position: { x: 340, y: 80 },
          config: { mode: "fixed", duration_ms: 300000 },
        },
        {
          id: "action-1",
          type: "action",
          label: "发送消息",
          position: { x: 640, y: 80 },
          config: { mode: "ai_message", prompt_hint: promptHint },
        },
        {
          id: "end-1",
          type: "end",
          label: "流程结束",
          position: { x: 940, y: 80 },
          config: { outcome: "exhausted" },
        },
      ],
      edges: [
        { id: "edge-1", source: "trigger-1", target: "wait-1", priority: 0, condition: { type: "always" } },
        { id: "edge-2", source: "wait-1", target: "action-1", priority: 0, condition: { type: "always" } },
        { id: "edge-3", source: "action-1", target: "end-1", priority: 0, condition: { type: "always" } },
      ],
    };
  }

  function createSeed() {
    var graph = baseGraph("为 30 席试点整理总部、总部加车间两种范围，约工作日 14:00 后人工回访。正式报价和对客草稿由负责人审核。");
    return {
      pointers: [
        {
          id: FLOW,
          name: "30 席试点方案发出后跟进",
          status: "active",
          active_version_id: VER1,
          draft_graph: graph,
          handoff_policy: "pause",
          trigger_config: { kind: "manual" },
          created_at: WHEN,
          updated_at: WHEN,
        },
      ],
      versions: [
        {
          id: VER1,
          pointer_id: FLOW,
          graph: JSON.parse(JSON.stringify(graph)),
          created_at: WHEN,
        },
      ],
      enrollments: [
        {
          id: ENR1,
          pointer_id: FLOW,
          version_id: VER1,
          contact_id: CONTACT_PILOT,
          status: "active",
          current_node_id: "trigger-1",
          next_eval_at: WHEN,
          outcome: null,
          cancel_reason: null,
          started_at: WHEN,
          completed_at: null,
          updated_at: WHEN,
        },
      ],
      contacts: [
        { id: CONTACT_PILOT, name: "顾言川" },
        { id: CONTACT_EXPANSION, name: "沈攸宁" },
        { id: CONTACT_RENEWAL, name: "许知微" },
      ],
      pipelines: [{ id: PIPE, name: "企业 SaaS 采购漏斗" }],
      stages: [
        { id: ST_NEW, pipeline_id: PIPE, name: "新客户", is_won: false, is_lost: false, is_archived: false },
        { id: ST_CON, pipeline_id: PIPE, name: "已联系", is_won: false, is_lost: false, is_archived: false },
        { id: ST_PRO, pipeline_id: PIPE, name: "方案沟通", is_won: false, is_lost: false, is_archived: false },
        { id: ST_WON, pipeline_id: PIPE, name: "已成交", is_won: true, is_lost: false, is_archived: false },
      ],
      agenda_types: [{ id: AGENDA, name: "试点范围人工评审" }],
      message_templates: [
        {
          id: "00000000-0000-4000-8000-0000000000aa",
          title: "试点范围确认草稿",
          body: "已整理两种试点范围，想请您核对涉及的部门、席位数和管理员权限，正式方案请以人工确认结果为准。",
          shortcut: null,
          owner_user_id: null,
        },
      ],
      notes: [
        {
          at: WHEN,
          text: "顾言川已纳入 30 席试点跟进的版本 1，当前停在触发节点。这是浏览器里的演示记录。",
        },
      ],
    };
  }

  function emit() {
    try {
      window.dispatchEvent(new CustomEvent("pi-followups-store"));
    } catch (e) {}
  }

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    var seed = createSeed();
    try {
      localStorage.setItem(KEY, JSON.stringify(seed));
    } catch (e2) {}
    return seed;
  }

  function save(db) {
    localStorage.setItem(KEY, JSON.stringify(db));
    emit();
  }

  function reset() {
    var seed = createSeed();
    try {
      localStorage.setItem(KEY, JSON.stringify(seed));
    } catch (e) {}
    emit();
    return seed;
  }

  window.FollowupsDemoState = {
    KEY: KEY,
    load: load,
    save: save,
    reset: reset,
    createSeed: createSeed,
  };
})();

'use strict';

window.DEMO_NAV_GROUPS = [
  {
    id: 'overview',
    label: '概览',
    items: [
      { path: '/app', label: '首页概览', icon: 'gauge' },
    ],
  },
  {
    id: 'ai',
    label: 'Agent 操作 CRM',
    items: [
      { path: '/app/ai/workbench', label: 'Agent–CRM 工作台', icon: 'robot', badge: 'Ontology' },
      { path: '/app/ai/followups', label: '跟进流程', icon: 'flow' },
      { path: '/app/ai/memory', label: '客户记忆与规则', icon: 'brain', badgeKey: 'pendingMemories' },
      { path: '/app/ai/evals', label: '本体论与评测基准', icon: 'scales' },
    ],
  },
  {
    id: 'service',
    label: '客户服务',
    items: [
      { path: '/app/inbox', label: '会话收件箱', icon: 'inbox', badgeKey: 'unreadInbox' },
      { path: '/app/radar', label: '风险雷达', icon: 'radar', badgeKey: 'radarCount' },
      { path: '/app/agenda', label: '日程预约', icon: 'calendar' },
      { path: '/app/templates', label: '快速回复', icon: 'file' },
    ],
  },
  {
    id: 'sales',
    label: '销售日常',
    items: [
      { path: '/app/kanban', label: '销售漏斗', icon: 'kanban' },
      { path: '/app/contacts', label: '联系人', icon: 'users' },
      { path: '/app/tasks', label: '跟进任务', icon: 'tasks', badgeKey: 'openTasks' },
    ],
  },
  {
    id: 'system',
    label: '分析与设置',
    items: [
      { path: '/app/metrics', label: '指标分析', icon: 'chart' },
      { path: '/app/settings', label: '工作区设置', icon: 'settings' },
    ],
  },
];

window.DEMO_STAGES = [
  { id: 'new', name: '新客户' },
  { id: 'contacted', name: '已联系' },
  { id: 'proposal', name: '方案沟通' },
  { id: 'won', name: '已成交' },
];

window.createInitialDemoState = function createInitialDemoState() {
  return {
    theme: 'light',
    sidebarCollapsed: false,
    activeConvId: 'conv-1',
    inboxFilter: 'all',
    inboxSearch: '',
    composerMode: 'reply',
    workbenchAgent: '商机诊断 Agent',
    workbenchMode: 'controlled',
    outboundPaused: false,
    activeScenarioId: 'ontology-stalled',
    workbenchRuns: [],
    contacts: [
      {
        id: 'c-1',
        name: '顾言川',
        company: '砚舟智造',
        email: 'gu.yanchuan@example.test',
        phone: '+1 202-555-0111',
        source: 'WhatsApp 售前咨询',
        tags: ['重点', '工作台试点'],
        memories: [
          { id: 'm-1', text: '仅接受工作日 14:00 后电话回访，拒绝机器人自动外呼', status: 'confirmed', source: '会话提取 · 2026-11-16' },
          { id: 'm-2', text: '30 席试点预算上限 ¥15,000，需包含部门权限配置与管理员培训', status: 'confirmed', source: '人工确认 · 2026-11-17' },
          { id: 'm-3', text: '希望下周二前比较总部试点、总部加车间试点两种范围', status: 'candidate', source: '待审核候选记忆 · 来自收件箱' },
        ],
      },
      {
        id: 'c-2',
        name: '沈攸宁',
        company: '星岬物流',
        email: 'shen.youning@example.test',
        phone: '+1 202-555-0112',
        source: '微信客服',
        tags: ['席位扩容'],
        memories: [
          { id: 'm-4', text: '分批为 4 个区域团队扩容，首批上线前须完成单点登录和用户分组联调', status: 'confirmed', source: '人工确认 · 2026-11-15' },
        ],
      },
      {
        id: 'c-3',
        name: '许知微',
        company: '映栈咨询',
        email: 'xu.zhiwei@example.test',
        phone: '+1 202-555-0113',
        source: '老客户转介绍',
        tags: ['重点', '年度订阅'],
        memories: [
          { id: 'm-5', text: '续签前需复核部门权限变更和续约提前通知条款', status: 'confirmed', source: '会话提取 · 2026-11-14' },
          { id: 'm-6', text: '法务审批周期约 5 个工作日，需提前提供标准 SLA 附件', status: 'candidate', source: '待审核候选记忆 · 来自跟进纪要' },
        ],
      },
      {
        id: 'c-4',
        name: '陆承砚',
        company: '青棱设备',
        email: 'lu.chengyan@example.test',
        phone: '+1 202-555-0114',
        source: '官网表单',
        tags: ['重点', '年度合同'],
        memories: [
          { id: 'm-7', text: '信息安全部需审核租户行级隔离说明和审计记录导出样例', status: 'confirmed', source: '人工确认 · 2026-11-12' },
        ],
      },
      {
        id: 'c-5',
        name: '唐越宁',
        company: '汀屿设计',
        email: 'tang.yuening@example.test',
        phone: '+1 202-555-0115',
        source: '活动报名',
        tags: ['已签约'],
        memories: [
          { id: 'm-8', text: '已续签协同工作台基础版，计划下季度为交付组增购 5 席', status: 'confirmed', source: '合同归档 · 2026-11-10' },
        ],
      },
    ],
    leads: [
      { id: 'l-1', title: '顾言川 — 企业协同工作台试点', stage: 'new', valueCents: 1280000, contactId: 'c-1', tags: ['待跟进'], staleHours: 4, owner: '演示账号' },
      { id: 'l-2', title: '沈攸宁 — 四区域团队席位扩容', stage: 'contacted', valueCents: 760000, contactId: 'c-2', tags: ['待跟进'], staleHours: 18, owner: '演示账号' },
      { id: 'l-3', title: '许知微 — 企业协同年度订阅续签', stage: 'proposal', valueCents: 2450000, contactId: 'c-3', tags: ['重点客户'], staleHours: 52, owner: '演示账号' },
      { id: 'l-4', title: '陆承砚 — 年度协同服务合同', stage: 'proposal', valueCents: 5200000, contactId: 'c-4', tags: ['重点客户'], staleHours: 76, owner: '演示账号' },
      { id: 'l-5', title: '唐越宁 — 协同工作台基础版续签', stage: 'won', valueCents: 980000, contactId: 'c-5', tags: ['已成交'], staleHours: 0, owner: '演示账号' },
    ],
    tasks: [
      { id: 't-1', title: '回访顾言川：确认工作台试点需求', dueLabel: '已逾期 2 小时', priority: 'urgent', status: 'pending', contactId: 'c-1', leadId: 'l-1' },
      { id: 't-2', title: '复核许知微的企业协同年度订阅续签', dueLabel: '3 小时后到期', priority: 'high', status: 'in_progress', contactId: 'c-3', leadId: 'l-3' },
      { id: 't-3', title: '跟进陆承砚年度协同服务合同', dueLabel: '明天 18:00', priority: 'medium', status: 'pending', contactId: 'c-4', leadId: 'l-4' },
      { id: 't-4', title: '整理沈攸宁的四区域团队席位扩容记录', dueLabel: '昨天已完成', priority: 'low', status: 'done', contactId: 'c-2', leadId: 'l-2' },
    ],
    conversations: [
      {
        id: 'conv-1',
        contactId: 'c-1',
        leadId: 'l-1',
        channel: 'WhatsApp',
        status: 'human',
        unread: 1,
        time: '16:22',
        preview: '请先转人工，我需要和顾问确认两种试点范围。',
        messages: [
          { id: 'msg-1', type: 'inbound', sender: '顾言川', text: '我们下个月想开 30 席企业协同工作台试点，预算 1.2 万到 1.5 万。总部和车间的权限能分开配吗？', time: '16:15' },
          { id: 'msg-2', type: 'outbound', sender: 'DealTrace 客服助手', text: '顾经理您好，试点通常需要 2–3 周，包含部门权限配置和管理员培训。总部与车间的权限范围可在试点方案里分别核对。', time: '16:16', badge: '引用知识库 · 交付规范 v2' },
          { id: 'msg-3', type: 'inbound', sender: '顾言川', text: '请先转人工。我们想在下周二前比较总部试点、总部加车间试点两种范围。我只有工作日 14:00 后方便接电话，请暂停机器人回复。', time: '16:22' },
          { id: 'msg-4', type: 'handoff', text: '客户要求转人工。已暂停自动回复，试点范围偏好已收录为待确认记忆。', time: '16:22' },
          { id: 'msg-5', type: 'note', sender: '系统记忆提示', text: '检测到客户约束：「仅工作日 14:00 后接听电话」「拒绝机器人自动回复」。已加入客户记忆并阻塞自动外发。', time: '16:22' },
        ],
      },
      {
        id: 'conv-2',
        contactId: 'c-3',
        leadId: 'l-3',
        channel: '微信客服',
        status: 'ai',
        unread: 0,
        time: '14:05',
        preview: '好的，麻烦把标准 SLA 附件也一并发我，我同步给法务预审。',
        messages: [
          { id: 'msg-21', type: 'inbound', sender: '许知微', text: '企业协同年度订阅续签整体方向没问题，我们法务审批大概需要 5 个工作日。', time: '13:58' },
          { id: 'msg-22', type: 'outbound', sender: 'DealTrace 销售助手', text: '许经理您好，我先整理标准 SLA、续约通知条款和权限变更说明，方便法务在 5 个工作日内预审。', time: '14:00', badge: '读取已确认记忆 · 续约与权限' },
          { id: 'msg-23', type: 'inbound', sender: '许知微', text: '好的，麻烦把标准 SLA 附件也一并发我，我同步给法务预审。', time: '14:05' },
        ],
      },
      {
        id: 'conv-3',
        contactId: 'c-4',
        leadId: 'l-4',
        channel: 'WhatsApp',
        status: 'human',
        unread: 2,
        time: '昨天',
        preview: '安全评审需要租户隔离说明和审计记录导出样例。',
        messages: [
          { id: 'msg-31', type: 'inbound', sender: '陆承砚', text: '年度协同服务合同报价已过初审。我们信息安全部还要看租户行级隔离说明和一份审计记录导出样例。', time: '昨天 17:40' },
          { id: 'msg-32', type: 'note', sender: 'Agent 诊断建议', text: '该商机金额 ¥52,000，已停滞 76 小时。建议为人工回访准备租户隔离说明和脱敏的审计导出样例。', time: '昨天 17:42' },
        ],
      },
      {
        id: 'conv-4',
        contactId: 'c-2',
        leadId: 'l-2',
        channel: '微信客服',
        status: 'ai',
        unread: 0,
        time: '11-16',
        preview: '四个区域团队分批扩容，技术同事正在核对单点登录配置。',
        messages: [
          { id: 'msg-41', type: 'inbound', sender: '沈攸宁', text: '四个区域团队分两批扩容。我已将 SSO 及用户分组文档交给技术同事，周四确认首批联调。', time: '11-16 11:20' },
          { id: 'msg-42', type: 'outbound', sender: 'DealTrace 客服助手', text: '收到，周四会跟您核对首批单点登录和用户分组，并确认上线前的验证范围。', time: '11-16 11:21' },
        ],
      },
    ],
    templates: [
      { id: 'tpl-1', title: '30 席试点范围与交付周期', category: '售前方案', content: '您好，30 席协同工作台试点通常需要 2–3 周，包含部门权限和管理员培训。请确认本次试点仅覆盖总部，还是把车间一起纳入。' },
      { id: 'tpl-2', title: '续签材料与安全评审', category: '法务合规', content: '已整理标准 SLA、续约条款和租户行级隔离说明。审计导出样例可供贵司评审，正式材料由负责人审核后发送。' },
      { id: 'tpl-3', title: '人工接管致意', category: '客服转接', content: '您好，我是专属客户经理，接下来的沟通由我直接为您跟进处理，请问下午两点后方便通话吗？' },
    ],
    agenda: [
      { id: 'ag-1', title: '顾言川 · 工作台试点需求电话沟通', time: '今天 14:30 - 15:00', owner: '演示账号', channel: '电话（遵循仅 14:00 后偏好）', status: '已预约' },
      { id: 'ag-2', title: '许知微 · 企业协同年度订阅续签法务答疑', time: '明天 10:00 - 10:45', owner: '演示账号', channel: '腾讯会议', status: '待确认' },
      { id: 'ag-3', title: '陆承砚 · 年度合同信息安全合规评审', time: '周五 15:00 - 16:00', owner: '演示账号', channel: '线上演示', status: '已预约' },
    ],
    orgRules: [
      { id: 'rule-1', title: '入站消息不等于外发同意', body: '客户首次入站询问或表达转人工意愿时，禁止自动触发营销外发或机器人连续追问，必须经过人工审批或明确同意边界。', source: '系统内置规则 v4', status: 'active' },
      { id: 'rule-2', title: '严格遵循客户时间窗口约束', body: '若客户记忆中存在明确联系时段限制（如「仅工作日 14:00 后」），所有跟进排期提案不得落在禁区时段内。', source: 'DealTrace 演示规则 · 客户记忆', status: 'active' },
      { id: 'rule-3', title: '业务口径以本体论语义层为准', body: '统计高价值停滞商机、转化率或回访优先级前，必须先调用 ontology_check_answerable 校验口径可回答性，禁止模型臆造 SQL。', source: 'DealTrace 演示规则 · 本体口径', status: 'active' },
    ],
  };
};

window.loadDemoState = function loadDemoState(storageKey) {
  const initial = window.createInitialDemoState();
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return initial;
    const state = JSON.parse(raw);
    if (!Array.isArray(state?.contacts)) return initial;

    for (const contact of state.contacts) {
      const company = initial.contacts.find((seed) => seed.id === contact?.id)?.company;
      if (company && contact.company === `${company}（演示）`) contact.company = company;
    }
    return state;
  } catch {
    return initial;
  }
};

window.approveDemoProposal = function approveDemoProposal(state, run) {
  const { proposal } = run;
  if (proposal.actionType === 'create_tasks_batch') {
    const tasks = proposal.tasksToAdd.map((task, index) => ({
      ...task,
      id: `t-prop-${run.id}-${index}`,
      status: 'pending',
    }));
    state.tasks.unshift(...tasks);
  } else if (proposal.actionType === 'confirm_memory') {
    const contact = state.contacts.find((item) => item.id === proposal.contactId);
    const memory = contact?.memories.find((item) => item.id === proposal.memoryId);
    if (memory) memory.status = 'confirmed';
  }
  run.proposalState = 'approved';
};

window.DEMO_SCENARIOS = [
  {
    id: 'ontology-stalled',
    title: '本体论查询：核对高价值停滞商机并生成跟进方案',
    prompt: '基于业务本体论核对高价值停滞商机与客户记忆，生成可执行跟进方案（先校验口径再读取）。',
    agent: '商机诊断 Agent',
    steps: [
      {
        name: '1. ontology_search_terms',
        status: 'ok',
        detail: { query: '高价值停滞商机', matchedTerms: ['deal.stalled_high_value', 'deal.value_cents', 'conversation.last_inbound_at'] },
      },
      {
        name: '2. ontology_check_answerable',
        status: 'full',
        detail: { ontologyVersion: '1.0.0', answerability: 'full', role: 'ontology_reader (read-only)', visibility: 'org_scoped_rls' },
      },
      {
        name: '3. ontology_query (只读语义执行)',
        status: 'ok',
        detail: { template: 'stalled_deals_with_memory_v1', rowCount: 2, rowLimit: 50, rows: ['陆承砚 — 年度协同服务合同 (¥52,000, 停滞 76h)', '许知微 — 企业协同年度订阅续签 (¥24,500, 停滞 52h)'] },
      },
    ],
    evidence: {
      status: 'full',
      ontologyVersion: '1.0.0',
      scope: 'DealTrace 演示工作区',
      visibility: '演示销售漏斗 · 只读角色 ontology_reader',
      relations: 'crm_leads → contacts → customer_memories',
      sources: 'crm_leads, crm_stages, org_memory_entries',
      template: 'stalled_deals_with_memory_v1 · 2 条（上限 50 条）',
    },
    reply: '已完成语义核验与只读查询，发现 2 笔高价值停滞商机。\n1. **陆承砚 — 年度协同服务合同（¥52,000，停滞 76 小时）**。为安全评审准备租户隔离说明和审计导出样例。\n2. **许知微 — 企业协同年度订阅续签（¥24,500，停滞 52 小时）**。准备标准 SLA 和续约说明，留出 5 个工作日供法务预审。\n\n两条跟进任务已生成提案，等负责人确认后写入演示工作区。',
    proposal: {
      id: 'prop-ontology-1',
      title: '创建 2 条高优先级跟进任务并标记合规附件准备',
      summary: '为陆承砚准备安全评审材料，为许知微准备 SLA 与续约条款。审批后只创建内部跟进任务。',
      actionType: 'create_tasks_batch',
      tasksToAdd: [
        { title: '准备陆承砚的租户隔离说明和审计导出样例', dueLabel: '今天 17:30', priority: 'urgent', contactId: 'c-4', leadId: 'l-4' },
        { title: '为许知微整理标准 SLA 和续约条款', dueLabel: '明天 10:00', priority: 'high', contactId: 'c-3', leadId: 'l-3' },
      ],
    },
  },
  {
    id: 'memory-boundary',
    title: '客户记忆闭环：准备顾言川回访建议（含约束冲突检查）',
    prompt: '查看顾言川的客户记忆与最近会话，起草一份不触犯偏好的回访计划。',
    agent: '记忆整理 Agent',
    steps: [
      {
        name: '1. memory_retrieve (客户记忆读取)',
        status: 'ok',
        detail: { contact: '顾言川', confirmedCount: 2, candidateCount: 1, constraints: ['仅工作日 14:00 后电话回访', '拒绝机器人自动外呼', '预算上限 ¥15,000'] },
      },
      {
        name: '2. ontology_describe_outcome (验收边界检查)',
        status: 'ok',
        detail: { inboundIsConsent: false, outboundAllowed: false, reason: '客户在会话中要求人工沟通，禁止自动外发' },
      },
    ],
    evidence: {
      status: 'partial',
      ontologyVersion: '1.0.0',
      scope: '联系人顾言川 (c-1)',
      visibility: '已确认记忆 2 条 · 待审候选 1 条',
      relations: 'contacts → conversations → customer_memories',
      sources: 'customer_memories, conversations',
      template: 'contact_memory_context_v1 · 3 条（上限 20 条）',
    },
    reply: '顾言川只接受**工作日 14:00 后人工回访**。30 席试点预算上限为 **¥15,000**，当前商机金额 **¥12,800**。\n\n「希望下周二前比较总部试点、总部加车间试点两种范围」仍是待审候选。建议顾问利用已预约的 14:30 电话核对试点范围与权限需求。',
    proposal: {
      id: 'prop-memory-1',
      title: '确认顾言川的试点范围候选记忆',
      summary: '将「希望下周二前比较总部试点、总部加车间试点两种范围」写入已确认记忆。客户联系由已预约的人工回访处理。',
      actionType: 'confirm_memory',
      contactId: 'c-1',
      memoryId: 'm-3',
    },
  },
];
